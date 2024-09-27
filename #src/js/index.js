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



