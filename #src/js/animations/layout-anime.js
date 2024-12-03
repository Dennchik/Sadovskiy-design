import anime from 'animejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// -----------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);

export function opacityForEachItems(elContainer, elElements) {
	// Контейнер с элементами
	const container = document.querySelector(elContainer);
	if (container) { // проверка классов
		// Элементы для анимации
		const elements = document.querySelectorAll(elElements);
		const options = {
			root: null, // viewport
			rootMargin: '0px',
			threshold: 0.1 // 10% элемента должно быть видимо
		};
		// Определяем количество элементов в ряду
		let elementsPerRow = Math.floor(
			container.clientWidth / elements[0].offsetWidth);

		const updateElementsPerRow = () => {
			elementsPerRow = Math.floor(
				container.clientWidth / elements[0].offsetWidth);
			console.log(elementsPerRow);
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
					// Определяем индекс элемента в группе
					const indexInRow = Array.from(elements).indexOf(
						entry.target) % elementsPerRow;

					// Создаем временную линию для анимации
					let timeLine = anime.timeline({
						easing: 'easeOutExpo',
						duration: 250
					});

					// Устанавливаем задержку для элементов в зависимости от их позиции в
					// группе
					const delay = indexInRow > 0 ? indexInRow * 350 : 0;
					// 250 мс для каждого последующего элемента в группе

					timeLine.add({
						targets: entry.target,
						scale: [0.95, 1],
						delay: delay, // Задержка для элементов, начиная со второго
						easing: 'easeInOutSine',
						begin: function (anim) {
							anim.animatables.forEach(function (animatable) {
								animatable.target.style.transition = 'all 0.3s ease-out';
							});
						}
					});

					// Устанавливаем начальное состояние невидимости для элемента
					entry.target.style.transform = 'scale(0.95)';
				}

				// Если элемент выходит из зоны видимости вниз, возвращаем его в
				// начальное состояние
				if (!entry.isIntersecting && entry.boundingClientRect.bottom > window.innerHeight) {
					anime({
						targets: entry.target,
						scale: 0.95,
						duration: 0, // Мгновенный возврат без задержки
						easing: 'easeOutExpo'
					});
				}
			});
		}, options);

		// Наблюдаем за каждым элементом
		elements.forEach(element => {
			observer.observe(element);
		});

		// Обновляем количество элементов в ряду при изменении размера окна
		window.addEventListener('resize', updateElementsPerRow);
	}
}































