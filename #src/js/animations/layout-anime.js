import anime from 'animejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// -----------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);
// -----------------------------------------------------------------------------
export function timeLineServiceItem() {

	let timeLine = anime.timeline({
		easing: 'easeOutExpo',
		duration: 350
	});
	timeLine
		// .add({
		// 	targets: '.el-item', opacity: [0, 1],
		// 	translateX: [-100, 0],
		// 	delay: anime.stagger(200, { start: 0 }),
		// 	begin: function (anim) {
		// 		anim.animatables.forEach(function (animatable) {
		// 			animatable.target.style.transition = 'all 0.3s ease-out';
		// 		});
		// 	}
		// });
		.add({
			targets: '.el-item',
			opacity: [0.2, 1],
			// translateY: [100, 0],
			delay: anime.stagger(200, { start: 100 }),
			easing: 'easeInOutSine',
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'opacity 0.5s ease-out';
				});
			}
		}, 1050);
}

export function animateTitles(element, trigger, endTrigger, start, end) {
	gsap.from(element, {
		y: 150,
		duration: 0.9,
		opacity: 0,
		scrollTrigger: {
			trigger: trigger,
			start: `top bottom-${start}}`,
			endTrigger: endTrigger,
			end: `bottom bottom-${end}`,
			toggleActions: 'play none none reverse',
			markers: true,
		},
	});
}


// export function animateTextLeft(element, trigger, endTrigger, start, end) {
// 	gsap.from(element, {
// 		x: 350,
// 		duration: 0.9,
// 		opacity: 0,
// 		scrollTrigger: {
// 			trigger: trigger,
// 			start: `top bottom-${start}}`,
// 			endTrigger: endTrigger,
// 			end: `bottom bottom-${end}`,
// 			toggleActions: 'play none none reverse',
// 			// markers: true,
// 		},
// 	});
// }


// -----------------------------------------------------------------------------
// export function opasityForEachItems(element, endTrigger, start, end) {
// 	// Перебираем все элементы, подходящие под селектор 'element'
// 	document.querySelectorAll(element).forEach((el, index) => {
// 		gsap.from(el, {
// 			y: 100,
// 			duration: 1,
// 			opacity: 0.2,
// 			// delay: index * 0.3, // Добавляем задержку в 0.3 секунды между элементами
// 			scrollTrigger: {
// 				trigger: el, // Используем общий триггер
// 				start: `top+=${-100} bottom-${start}`,
// 				endTrigger: endTrigger, // Используем общий конечный триггер
// 				end: `bottom bottom-${end}`,
// 				toggleActions: 'play none none reverse',
// 				// markers: true,
// 			},
// 			delay: index * 0.3, // Добавляем задержку 0.3 секунды для каждого элемента
// 		});
// 	});
// }


export function opacityForEachItems(elContainer, elElements) {
	const container = document.querySelector(elContainer); // Контейнер с элементами
	if (container){ // проверка классов
		const elements = document.querySelectorAll(elElements); // Элементы для анимации
		const options = {
			root: null, // viewport
			rootMargin: '0px',
			threshold: 0.1 // 10% элемента должно быть видимо
		};

		let elementsPerRow = Math.floor(container.clientWidth / elements[0].offsetWidth); // Определяем количество элементов в ряду

		const updateElementsPerRow = () => {
			elementsPerRow = Math.floor(container.clientWidth / elements[0].offsetWidth);
			console.log(elementsPerRow);
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
					// Определяем индекс элемента в группе
					const indexInRow = Array.from(elements).indexOf(entry.target) % elementsPerRow;

					// Создаем временную линию для анимации
					let timeLine = anime.timeline({
						easing: 'easeOutExpo',
						duration: 250
					});

					// Устанавливаем задержку для элементов в зависимости от их позиции в группе
					const delay = indexInRow > 0 ? indexInRow * 350 : 0; // 250 мс для каждого последующего элемента в группе

					timeLine.add({
						targets: entry.target,
						scale: [0.95, 1],
						// opacity: [0.7, 1],
						filter: ['blur(1.5px)', 'blur(0px)'], // Добавляем размытие
						// translateY: [30, 0],
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
					// entry.target.style.opacity = 0.7;
					entry.target.style.filter = 'blur(1.5px)';
				}

				// Если элемент выходит из зоны видимости вниз, возвращаем его в начальное состояние
				if (!entry.isIntersecting && entry.boundingClientRect.bottom > window.innerHeight) {
					anime({
						targets: entry.target,
						scale: 0.95,
						// opacity: 0.7,
						filter: 'blur(1.5px)',
						// translateY: 30,
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































