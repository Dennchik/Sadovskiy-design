import loaded from './modules/preloader.js';
loaded('.preloader');
//* ----------------------------------------------------------------------------
import { sidebarMenuHendle, addToBlock, returnToSavedPosition } from "./layouts/layouts.js";
sidebarMenuHendle(); returnToSavedPosition();
// -----------------------------------------------------------------------------
import { anchorsSmoothScrolling } from "./modules/anchors-smooth-scrolling.js";
anchorsSmoothScrolling();
addToBlock();
// -----------------------------------------------------------------------------
import { timeLineServiceItem, animateTitles, opasityForEachItems, opacityForEachItems } from "./animations/layout-anime.js";
// timeLineServiceItem();
// animateTitles('.project__title', '.project', '.project', '=150', '=0');
// opasityForEachItems('.card-price', '.services-price__content', '=0', '=0');

opacityForEachItems('.services-price__content', '.services-price__column');

opacityForEachItems('.company-team__content', '.company-team__column');
opacityForEachItems('.about-company__content', '.about-company__row');
opacityForEachItems('.answers__list', '.answers__content');
opacityForEachItems('.seo-block__content', '.seo-block__column');














