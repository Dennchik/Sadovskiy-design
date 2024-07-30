import { tabsHandler, answersHandler, maskPhone } from "./layouts/layouts";
tabsHandler(); answersHandler();
import { timeLineServiceItem, animateTitles, animateForEachItems, animateTextLeft, opasityForEachItems } from "./animations/layout-anime";
document.addEventListener('DOMContentLoaded', () => {
	maskPhone();
	timeLineServiceItem();
});
animateTitles('.project__title', '.project', '.project', '=150', '=0');
animateTitles('.project__body', '.project__body', '.project__body', '=150', '=0');
animateTitles('.answers__title', '.answers', '.answers', '=150', '=0');
animateTitles('.clients__title', '.clients', '.clients', '=150', '=0');
animateTitles('.company-team__body', '.company-team', '.company-team ', '=100', '=0');
animateTitles('.company-team__title', '.company-team', '.company-team ', '=100', '=0');
animateTitles('.footer__body', '.footer', '.footer', '=150', '=0');
animateTitles('.about-company__title', '.about-company', '.about-company', '=150', '=0');
animateTitles('.services-price__title', '.services-price', '.services-price', '=150', '=0');
animateTitles('.seo-block__title', '.seo-block__body', '.seo-block__body', '=150', '=0');
animateTextLeft('.seo-block__text', '.seo-block__text', '.seo-block__text', '=150', '=0');
// -----------------------------------------------------------------------------
animateForEachItems('.answers__content', '.answers__list', '=150', '=0');
animateForEachItems('.order-place__body', '.order-place', '=150', '=0');
// -----------------------------------------------------------------------------
opasityForEachItems('.ab-item', '.about-company__content', '=150', '=0');
// opasityForEachItems('.card-price', '.services-price__column', '=150', '=0');
// -----------------------------------------------------------------------------


