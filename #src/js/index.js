// -----------------------------------------------------------------------------
import { brandsSlide } from "./modules/brands-slide.js";
brandsSlide();
// -----------------------------------------------------------------------------
const contentItems = document.querySelectorAll('.services-price__column');

if (contentItems.length > 0) {
	contentItems.forEach(contentItem => {
		const openButton = contentItem.querySelector('.card-price__open-btn');
		const closeButton = contentItem.querySelector('.card-price__close-btn');

		if (openButton) {
			openButton.addEventListener('click', () => {
				contentItem.classList.add('_open');
			});
		}

		if (closeButton) {
			closeButton.addEventListener('click', () => {
				contentItem.classList.remove('_open');
			});
		}
	});
}
// -----------------------------------------------------------------------------
import { opacityForEachItems } from "./animations/layout-anime.js";
if (document.querySelector('.company-team__content')) {
	opacityForEachItems('.company-team__content', '.company-team__column');
}

if (document.querySelector('.about-company__content')) {
	opacityForEachItems('.about-company__content', '.about-company__row');
}
// -----------------------------------------------------------------------------



