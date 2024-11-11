import loaded from './modules/preloader.js';
loaded('.preloader');
//* ----------------------------------------------------------------------------
import { dinamicAdaptive } from './assets/move-elements.js';
dinamicAdaptive();
//* ----------------------------------------------------------------------------
import { sidebarMenuHendle, returnToSavedPosition, maskPhone, answersHandler, tabsHandler, shadowScroll } from "./layouts/layouts.js";
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
// -----------------------------------------------------------------------------


