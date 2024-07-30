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
		.add({
			targets: '.el-item-1', opacity: [0, 1],
			translateX: [-100, 0],
			delay: anime.stagger(200, { start: 0 }),
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'all 0.3s ease-out';
				});
			}
		})
		.add({
			targets: '.el-item',
			opacity: [0, 1],
			translateY: [100, 0],
			delay: anime.stagger(200, { start: 100 }),
			easing: 'easeInOutSine',
			begin: function (anim) {
				anim.animatables.forEach(function (animatable) {
					animatable.target.style.transition = 'all 0.3s ease-out';
				});
			}
		}, 150);
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
			// markers: true,
		},
	});
}


export function animateTextLeft(element, trigger, endTrigger, start, end) {
	gsap.from(element, {
		x: 350,
		duration: 0.9,
		opacity: 0,
		scrollTrigger: {
			trigger: trigger,
			start: `top bottom-${start}}`,
			endTrigger: endTrigger,
			end: `bottom bottom-${end}`,
			toggleActions: 'play none none reverse',
			// markers: true,
		},
	});
}

export function animateForEachItems(element, endTrigger, start, end) {
	// Перебираем все элементы, подходящие под селектор 'element'
	document.querySelectorAll(element).forEach((el) => {
		gsap.from(el, {
			y: 100,
			duration: 0.9,
			opacity: 0,
			scrollTrigger: {
				trigger: el, // Используем общий триггер
				start: `top+=${-100} bottom-${start}`,
				endTrigger: endTrigger, // Используем общий конечный триггер
				end: `bottom bottom-${end}`,
				toggleActions: 'play none none reverse',
				// markers: true,
			},
		});
	});
}

export function opasityForEachItems(element, endTrigger, start, end) {
	// Перебираем все элементы, подходящие под селектор 'element'
	document.querySelectorAll(element).forEach((el) => {
		gsap.from(el, {
			x: 100,
			duration: 1,
			opacity: 0,
			scrollTrigger: {
				trigger: el, // Используем общий триггер
				start: `top+=${-100} bottom-${start}`,
				endTrigger: endTrigger, // Используем общий конечный триггер
				end: `bottom bottom-${end}`,
				toggleActions: 'play none none reverse',
				// markers: true,
			},
		});
	});
}

