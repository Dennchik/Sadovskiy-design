
// -----------------------------------------------------------------------------
import { brandsSlide } from "./modules/brands-slide.js";
brandsSlide();
// -----------------------------------------------------------------------------


const contentItems = document.querySelectorAll('.services-price__column');

contentItems.forEach(contentItem => {

	const openButton = contentItem.querySelector('.card-price__open-btn');
	const closeButton = contentItem.querySelector('.card-price__close-btn');


	openButton.addEventListener('click', () => {
		contentItem.classList.add('_open');
	});
	closeButton.addEventListener('click', () => {
		contentItem.classList.remove('_open');
	});
});
// -----------------------------------------------------------------------------
import { opacityForEachItems } from "./animations/layout-anime.js";
opacityForEachItems('.company-team__content', '.company-team__column');
opacityForEachItems('.about-company__content', '.about-company__row');
// -----------------------------------------------------------------------------
// import { timeLineServiceItem, animateTitles, animateForEachItems, animateTextLeft, opasityForEachItems, animateTitles1 } from "./animations/layout-anime";
// animateTitles('.project__title', '.project', '.project', '=100', '=0');
// animateTitles('.project__body', '.project__body', '.project__body', '=100', '=0');
// animateTitles('.answers__title', '.answers', '.answers', '=100', '=0');
// animateTitles('.clients__title', '.clients', '.clients', '=100', '=0');

// animateTitles('.company-team__title', '.company-team', '.company-team ', '=100', '=0');
// animateTitles('.footer__body', '.footer', '.footer', '=100', '=0');
// animateTitles('.about-company__title', '.about-company', '.about-company', '=150', '=0');
// animateTitles('.services-price__title', '.services-price', '.services-price', '=100', '=0');
// animateTitles('.seo-block__title', '.seo-block__body', '.seo-block__body', '=100', '=0');
// animateTextLeft('.seo-block__text', '.seo-block__text', '.seo-block__text', '=100', '=0');
// animateTitles('.schedule__body', '.schedule', '.schedule', '=100', '=0');
// // -----------------------------------------------------------------------------
// animateForEachItems('.answers__content', '.answers__list', '=100', '=0');


// animateTitles('.order-place__row', '.order-place__row', '.order-place__row', '=100', '=0');
// animateForEachItems('.team-card', '.company-team__content', '=100', '=0');
// // -----------------------------------------------------------------------------
// opasityForEachItems('.ab-item', '.about-company__content', '=100', '=0');
// animateForEachItems('.card-price', '.services-price__column', '=0', '=0');
// -----------------------------------------------------------------------------


