import loaded from './modules/preloader.js';
loaded('.preloader');
//* ----------------------------------------------------------------------------
import { dinamicAdaptive } from './assets/move-elements.js';
dinamicAdaptive();
//* ----------------------------------------------------------------------------
import { sidebarMenuHendle, addToBlock, returnToSavedPosition, maskPhone, answersHandler, tabsHandler, shadowScroll } from "./layouts/layouts.js";
sidebarMenuHendle();
returnToSavedPosition();
answersHandler();
tabsHandler();
shadowScroll();
document.addEventListener('DOMContentLoaded', () => {
	maskPhone('.phone');
	// timeLineServiceItem();
});
// -----------------------------------------------------------------------------
import { anchorsSmoothScrolling } from "./modules/anchors-smooth-scrolling.js";
anchorsSmoothScrolling();
addToBlock();
// -----------------------------------------------------------------------------
import { opacityForEachItems } from "./animations/layout-anime.js";
// timeLineServiceItem();
// animateTitles('.project__title', '.project', '.project', '=150', '=0');
// opasityForEachItems('.card-price', '.services-price__content', '=0', '=0');

opacityForEachItems('.services-price__content', '.services-price__column');
opacityForEachItems('.answers__list', '.answers__content');
opacityForEachItems('.seo-block__content', '.seo-block__column');














