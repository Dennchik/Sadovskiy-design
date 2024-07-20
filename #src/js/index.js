import { dinamicAdaptive } from "./assets/move-elements";
dinamicAdaptive();
// -----------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------
import Swiper from 'swiper/bundle';
// -----------------------------------------------------------------------------
function bindSwipers(...swiperList) {
	for (const swiper of swiperList) {
		swiper.setTranslate = function (translate, byController, doNotPropagate) {
			if (doNotPropagate) {
				Swiper.prototype.setTranslate.apply(this, arguments);
			} else {
				for (const swiper of swiperList) {
					swiper.setTranslate(translate, byController, true);
				}
			}
		};
		swiper.setTransition = function (duration, byController, doNotPropagate) {
			if (doNotPropagate) {
				Swiper.prototype.setTransition.apply(this, arguments);
			} else {
				for (const swiper of swiperList) {
					swiper.setTransition(duration, byController, true);
				}
			}
		};
	}
}

// -----------------------------------------------------------------------------
document.querySelectorAll('.slider').forEach((n, i) => {
	window[`slider${i + 1}`] = new Swiper(n, {


		freeMode: true,
		grabCursor: true,
		// centeredSlides: true,
		direction: 'vertical',
		mousewheel: true,
		slidesPerView: 1.75,
		slidesOffsetBefore: 15,
		spaceBetween: 30,
	});
});
bindSwipers(slider1, slider2, slider3);