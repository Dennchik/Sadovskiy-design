import { swiperLayout } from '../layouts/swiper-layout.js';
swiperLayout();
//* import Swiper bundle with all modules installed 
import Swiper from 'swiper/bundle';
export function brandsSlide(
	mainslide = '.brand-slide__body',

) {
	if (mainslide) {
		new Swiper(mainslide, {
			speed: 800,
			spaceBetween: 30,
			loop: true,
			grabCursor: true,
			slidesPerView: 6,
			autoplay: {
				delay: 1500,
				disableOnInteraction: true,
				waitForTransition: true,
			},
			breakpoints: {
				200: {
					spaceBetween: 10,
					slidesPerView: 2,
				},
				376: {
					spaceBetween: 20,
					slidesPerView: 2,
				},
				490: {
					spaceBetween: 30,
					slidesPerView: 3,
				},
				768: {

					spaceBetween: 40,
					slidesPerView: 4,
				},
				1025: {
					slidesPerView: 5,
				}
			}
		});
	}
};