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
});
// -----------------------------------------------------------------------------
import { anchorsSmoothScrolling } from "./modules/anchors-smooth-scrolling.js";
anchorsSmoothScrolling();
addToBlock();
// -----------------------------------------------------------------------------
import { opacityForEachItems } from "./animations/layout-anime.js";

opacityForEachItems('.services-price__content', '.services-price__column');
opacityForEachItems('.answers__list', '.answers__content'); 
