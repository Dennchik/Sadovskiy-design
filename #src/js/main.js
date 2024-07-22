import loaded from './modules/preloader.js';
loaded('.preloader');
//* ----------------------------------------------------------------------------
// import { sidebarMenuHendle } from "./layouts/layouts.js";
// sidebarMenuHendle();
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
// -----------------------------------------------------------------------------
import { sidebarMenuHendle } from "./layouts/layouts";
sidebarMenuHendle();
