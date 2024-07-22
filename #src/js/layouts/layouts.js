import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
// import { Observer } from 'gsap/Observer';
// import { SplitText } from 'gsap/SplitText';
// import { TextPlugin } from 'gsap/TextPlugin';


gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.normalizeScroll(true);
// ScrollTrigger.config({ ignoreMobileResize: true });
// -----------------------------------------------------------------------------
//todo: Устанавливаем плавную прокрутку страницы
// export let smoother = ScrollSmoother.create({
// 	wrapper: "#wrapper",
// 	content: "#content",
// 	smooth: 1,
// 	effects: true,
// 	normalizeScroll: true
// });
// -----------------------------------------------------------------------------

// export function scrollSlide() {
// 	console.clear();

// 	const sections = gsap.utils.toArray(".slide");
// 	const images = gsap.utils.toArray(".image").reverse();
// 	const slideImages = gsap.utils.toArray(".slide__img");
// 	const outerWrappers = gsap.utils.toArray(".slide__outer");
// 	const innerWrappers = gsap.utils.toArray(".slide__inner");
// 	const count = document.querySelector(".count");
// 	const wrap = gsap.utils.wrap(0, sections.length);
// 	let animating;
// 	let currentIndex = 0;
// 	let observerEnabled = true; // Флаг для включения/выключения Observer

// 	gsap.set(outerWrappers, { xPercent: 100 });
// 	gsap.set(innerWrappers, { xPercent: -100 });
// 	gsap.set(".slide:nth-of-type(1) .slide__outer", { xPercent: 0 });
// 	gsap.set(".slide:nth-of-type(1) .slide__inner", { xPercent: 0 });

// 	function toggleObserver(enable) {
// 		observerEnabled = enable;
// 		if (enable) {
// 			observer.enable();
// 		} else {
// 			observer.disable();
// 		}
// 	}

// 	function gotoSection(index, direction) {
// 		animating = true;
// 		index = wrap(index);

// 		let tl = gsap.timeline({
// 			defaults: { duration: 1, ease: "expo.inOut" },
// 			onComplete: () => {
// 				animating = false;
// 				// Если достигнут последний или первый слайд, отключаем Observer
// 				if ((index === sections.length - 1 && direction === 1) || (index === 0 && direction === -1)) {
// 					toggleObserver(false);
// 				}
// 			}
// 		});

// 		let currentSection = sections[currentIndex];
// 		let heading = currentSection.querySelector(".slide__heading");
// 		let nextSection = sections[index];
// 		let nextHeading = nextSection.querySelector(".slide__heading");

// 		gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 });
// 		gsap.set([sections[currentIndex], images[index]], { zIndex: 1, autoAlpha: 1 });
// 		gsap.set([sections[index], images[currentIndex]], { zIndex: 2, autoAlpha: 1 });

// 		tl
// 			.set(count, { text: index + 1 }, 0.32)
// 			.fromTo(
// 				outerWrappers[index],
// 				{
// 					xPercent: 100 * direction
// 				},
// 				{ xPercent: 0 },
// 				0
// 			)
// 			.fromTo(
// 				innerWrappers[index],
// 				{
// 					xPercent: -100 * direction
// 				},
// 				{ xPercent: 0 },
// 				0
// 			)
// 			.to(
// 				heading,
// 				{
// 					"--width": 800,
// 					xPercent: 30 * direction
// 				},
// 				0
// 			)
// 			.fromTo(
// 				nextHeading,
// 				{
// 					"--width": 800,
// 					xPercent: -30 * direction
// 				},
// 				{
// 					"--width": 200,
// 					xPercent: 0
// 				},
// 				0
// 			)
// 			.fromTo(
// 				images[index],
// 				{
// 					xPercent: 125 * direction,
// 					scaleX: 1.5,
// 					scaleY: 1.3
// 				},
// 				{ xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
// 				0
// 			)
// 			.fromTo(
// 				images[currentIndex],
// 				{ xPercent: 0, scaleX: 1, scaleY: 1 },
// 				{
// 					xPercent: -125 * direction,
// 					scaleX: 1.5,
// 					scaleY: 1.3
// 				},
// 				0
// 			)
// 			.fromTo(
// 				slideImages[index],
// 				{
// 					scale: 2
// 				},
// 				{ scale: 1 },
// 				0
// 			)
// 			.timeScale(0.8);

// 		currentIndex = index;
// 	}

// 	const observer = Observer.create({
// 		type: "wheel,touch,pointer",
// 		preventDefault: true,
// 		wheelSpeed: -3,
// 		onUp: () => {
// 			if (!observerEnabled || animating) return;
// 			gotoSection(currentIndex + 1, +1);
// 		},
// 		onDown: () => {
// 			if (!observerEnabled || animating) return;
// 			gotoSection(currentIndex - 1, -1);
// 		},
// 		tolerance: 5
// 	});

// 	document.addEventListener("keydown", logKey);

// 	function logKey(e) {
// 		if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && !animating) {
// 			if (currentIndex === 0) {
// 				toggleObserver(true); // Включаем Observer при прокрутке вверх с первого слайда
// 			}
// 			gotoSection(currentIndex - 1, -1);
// 		}
// 		if (
// 			(e.code === "ArrowDown" || e.code === "ArrowRight" || e.code === "Space" || e.code === "Enter") &&
// 			!animating
// 		) {
// 			if (currentIndex === sections.length - 1) {
// 				toggleObserver(true); // Включаем Observer при прокрутке вниз с последнего слайда
// 			}
// 			gotoSection(currentIndex + 1, 1);
// 		}
// 	}

// 	// Включаем Observer при прокрутке вручную, если прокручиваем обратно вверх с последнего слайда или вниз с первого слайда
// 	ScrollTrigger.create({
// 		start: 0,
// 		end: "max",
// 		onUpdate: (self) => {
// 			if ((self.direction < 0 && currentIndex === sections.length - 1) || (self.direction > 0 && currentIndex === 0)) {
// 				toggleObserver(true);
// 			}
// 		}
// 	});
// }
// -----------------------------------------------------------------------------
export function sidebarMenuHendle() {
	const sidebarMenu = document.querySelector('.sidebar-menu');
	const buttonItems = document.querySelector('.burger-button__items');
	buttonItems.addEventListener('click', () => {
		if (sidebarMenu.classList.contains('_open-menu')) {
			sidebarMenu.classList.add('_close-menu');
			buttonItems.classList.remove('_open-menu');

			setTimeout(() => {
				sidebarMenu.style.transition = 'transform 0.4s ease-in-out';
				sidebarMenu.addEventListener('transitionend', function transitionEndHandler() {
					sidebarMenu.style.transition = '';
					sidebarMenu.removeEventListener('transitionend', transitionEndHandler);
				}, { once: true });
				sidebarMenu.classList.remove('_open-menu');
				sidebarMenu.classList.remove('_close-menu');
			}, 1300);
		} else {
			sidebarMenu.classList.add('_open-menu');
			buttonItems.classList.add('_open-menu');

			sidebarMenu.style.transition = 'transform 0.4s ease-in-out';
			sidebarMenu.addEventListener('transitionend', function transitionEndHandler() {
				sidebarMenu.style.transition = '';
				sidebarMenu.removeEventListener('transitionend', transitionEndHandler);
			}, { once: true });

		}
	});
}
// -----------------------------------------------------------------------------
export function getRatioHendle() {

	let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

	gsap.utils.toArray("section").forEach((section, i) => {
		section.bg = section.querySelector(".bg");

		// Give the backgrounds some random images
		section.bg.style.backgroundImage = `url(https://picsum.photos/1600/800?random=${i})`;

		// the first image (i === 0) should be handled differently because it should start at the very top.
		// use function-based values in order to keep things responsive
		gsap.fromTo(section.bg, {
			backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
		}, {
			backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
			ease: "none",
			scrollTrigger: {
				trigger: section,
				start: () => i ? "top bottom" : "top top",
				end: "bottom top",
				scrub: true,
				invalidateOnRefresh: true // to make it responsive
			}
		});

	});
};

export function piningHendle() {
	gsap.to(".panel:not(:last-child)", {
		yPercent: -100,
		ease: "none",
		stagger: 0.5,
		scrollTrigger: {
			trigger: "#container",
			start: "top top",
			end: "+=300%",
			scrub: true,
			pin: true,
			// markers: true,
		}
	});


	gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
}