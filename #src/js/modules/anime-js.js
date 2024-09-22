import anime from 'animejs';

// -----------------------------------------------------------------------------
export function timeLineHeaderItemRevers(element) {
	let timeline = anime.timeline({
		duration: 750,
	});
	timeline
		.add({
			targets: element,
			// opacity: [0, 1],
			translateY: [0, 50],
			// rotate: [-90, 0],
			duration: 500,
			easing: 'easeInOutSine',
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'opacity 0.1s ease-out';
				});
			}
		}, 50);
}

export function timeLineHeaderItem(element) {
	let timeline = anime.timeline({
		duration: 750,
	});
	timeline
		.add({
			targets: element,
			opacity: [0, 1],
			translateY: [10, 0],
			// rotate: [-90, 0],
			duration: 500,
			easing: 'easeInOutSine',
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'opacity 0.9s ease-out';
				});
			}
		}, 50);
}
// -----------------------------------------------------------------------------
export function fadeInSlide() {
	let fadeInSlide = anime.timeline({
		duration: 750,
	});
	fadeInSlide
		.add({
			targets: '.services-price__content .services-price__column',
			opacity: [0, 1],
			// translateY: [80, 0],
			delay: anime.stagger(100, { start: 500 }),
			duration: 1000,
			easing: 'easeInOutSine',
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'opacity 0.3s ease-out';
				});
			}
		}, 50)
		.add({
			targets: '.swiper-slide-active .main-slide__text',
			opacity: [0, 1],
			translateY: [100, 0],
			delay: anime.stagger(100, { start: 500 }),
			duration: 1000,
			easing: 'easeInOutSine',
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'opacity 0.3s ease-out';
				});
			}
		}, 130);
}
export function animationSvgLine(target, reverse) {
	const path = target.querySelector('.content-box__svg .lines path');
	// Создаем переменную path
	anime({
		targets: path,
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 500,
		opacity: [0, 1],
		delay: function (el, i) { return i * 250; },
		direction: reverse ? 'reverse' : 'normal', // Устанавливаем направление анимации в зависимости от параметра reverse 
		begin: () => {
			target.classList.add('animating'); // Добавляем класс при начале анимации
		},
		complete: () => {
			if (reverse) {
				target.classList.remove('animating'); // Удаляем класс после завершения анимации в обратном направлении
				path.setAttribute('stroke-dashoffset', anime.setDashoffset);
			}
		}
	});
}
export function animationSvgText(target, reverse) {
	const textPath = target.querySelectorAll('.content-box__image .lines-text path');
	// Создаем переменную path
	anime({
		targets: textPath,
		strokeDashoffset: [0, anime.setDashoffset],
		easing: 'easeInOutSine',
		duration: 300,
		opacity: 1,
		delay: function (el, i) { return i * 200; },
		direction: reverse ? 'reverse' : 'normal', // Устанавливаем направление анимации в зависимости от параметра reverse 
		begin: () => {
			target.classList.add('animating'); // Добавляем класс при начале анимации
		},
		complete: () => {
			if (reverse) {
				target.classList.remove('animating'); // Удаляем класс после завершения анимации в обратном направлении
				textPath.forEach(path => {
					path.setAttribute('stroke-dashoffset', anime.setDashoffset);
				});
			}
		}
	});
}
export function removeElement() {
	const animatedElements = document.querySelectorAll('.equalizer-content__square');
	animatedElements.forEach(element => {
		anime.remove(element); // Удаляем анимацию для каждого элемента
	});
}
// -----------------------------------------------------------------------------
// export function opacityForEachItems() {
// 	const elements = document.querySelectorAll('.services-price__column'); // Элементы для анимации

// 	const options = {
// 		root: null, // viewport
// 		rootMargin: '0px',
// 		threshold: 0.1 // 10% элемента должно быть видимо
// 	};

// 	let groupStart = true; // Флаг для отслеживания начала новой группы элементов
// 	let currentGroup = []; // Массив для текущей группы элементов

// 	const observer = new IntersectionObserver((entries) => {
// 		entries.forEach(entry => {
// 			if (entry.isIntersecting && entry.boundingClientRect.top > 0 && !currentGroup.includes(entry.target)) {
// 				// Если это первый элемент группы, сбрасываем флаг groupStart
// 				if (groupStart) {
// 					groupStart = false;
// 					currentGroup = []; // Очищаем массив для новой группы
// 				}

// 				// Добавляем элемент в текущую группу
// 				currentGroup.push(entry.target);

// 				const index = currentGroup.length - 1; // Индекс элемента в группе

// 				let timeLine = anime.timeline({
// 					easing: 'easeOutExpo',
// 					duration: 250
// 				});

// 				// Устанавливаем задержку только для элементов после первого в группе
// 				const delay = index > 0 ? index * 250 : 0; // 250 мс для каждого последующего элемента в группе

// 				timeLine.add({
// 					targets: entry.target,
// 					opacity: [0.2, 1],
// 					translateY: [100, 0],
// 					delay: delay, // Задержка для элементов, начиная со второго
// 					easing: 'easeInOutSine',
// 					begin: function (anim) {
// 						anim.animatables.forEach(function (animatable) {
// 							animatable.target.style.transition = 'all 0.5s ease-out';
// 						});
// 					}
// 				});

// 				// Устанавливаем начальное состояние невидимости для элемента
// 				entry.target.style.opacity = 0.2;
// 			}

// 			// Если элемент выходит из зоны видимости вниз, возвращаем его в начальное состояние
// 			if (!entry.isIntersecting && entry.boundingClientRect.bottom > window.innerHeight) {
// 				anime({
// 					targets: entry.target,
// 					opacity: 0.2,
// 					translateY: 100,
// 					duration: 0, // Мгновенный возврат без задержки
// 					easing: 'easeOutExpo'
// 				});

// 				// Сбрасываем флаг для начала новой группы
// 				groupStart = true;
// 				currentGroup = [];
// 			}
// 		});
// 	}, options);

// 	// Наблюдаем за каждым элементом
// 	elements.forEach(element => {
// 		observer.observe(element);
// 	});
// }
// -----------------------------------------------------------------------------
export function opacityForEachItems() {
	const elements = document.querySelectorAll('.services-price__column'); // Элементы для анимации
	const container = document.querySelector('.services-price__content'); // Контейнер с элементами

	const options = {
		root: null, // viewport
		rootMargin: '0px',
		threshold: 0.1 // 10% элемента должно быть видимо
	};

	let elementsPerRow = Math.floor(container.clientWidth / elements[0].offsetWidth); // Определяем количество элементов в ряду
	console.log(elementsPerRow);

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
				const delay = indexInRow > 0 ? indexInRow * 250 : 0; // 250 мс для каждого последующего элемента в группе

				timeLine.add({
					targets: entry.target,
					opacity: [0.2, 1],
					translateY: [100, 0],
					delay: delay, // Задержка для элементов, начиная со второго
					easing: 'easeInOutSine',
					begin: function (anim) {
						anim.animatables.forEach(function (animatable) {
							animatable.target.style.transition = 'all 0.5s ease-out';
						});
					}
				});

				// Устанавливаем начальное состояние невидимости для элемента
				entry.target.style.opacity = 0.2;
			}

			// Если элемент выходит из зоны видимости вниз, возвращаем его в начальное состояние
			if (!entry.isIntersecting && entry.boundingClientRect.bottom > window.innerHeight) {
				anime({
					targets: entry.target,
					opacity: 0.2,
					translateY: 100,
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
}