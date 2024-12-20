import loaded from './modules/preloader.js';

loaded('.preloader');
//* ----------------------------------------------------------------------------
import { dinamicAdaptive } from './assets/move-elements.js';

dinamicAdaptive();
//* ----------------------------------------------------------------------------
import { opacityForEachItems } from "./animations/layout-anime.js";
import { brandsSlide } from "./modules/brands-slide.js";
//* ----------------------------------------------------------------------------
import {
	sidebarMenuHandle,
	returnToSavedPosition,
	maskPhone,
	answersHandler,
	tabsHandler,
	shadowScroll,
	addToBlock,
	showCard,
	tooltipHide
} from "./layouts/layouts.js";

sidebarMenuHandle();
returnToSavedPosition();
shadowScroll();
//* ---------------- Плавная прокрутка страницы до позиции ---------------------
import { anchorsSmoothScrolling } from "./modules/anchors-smooth-scrolling.js";

const anchorLink = document.querySelector('.anchor-link');
if (anchorLink) {
	anchorsSmoothScrolling();
}
document.addEventListener('DOMContentLoaded', () => {
	maskPhone('.phone');
});
//* ------------ Проверка на присутствие элементов на странице -----------------
const answersList = document.querySelector('.answers__list');
const tabsButton = document.querySelector('.tabs-button');
const seoBlock = document.querySelector('.seo-block');
const servicesPrice = document.querySelector('.services-price');
const companyTeam = document.querySelector('.company-team');
const aboutCompany = document.querySelector('.about-company');
const brands = document.querySelector('.about-company');
const cardPrice = document.querySelector('.card-price');
const tooltip = document.querySelector('.tooltip');
if (cardPrice) {
	showCard();
}
if (answersList) {
	answersHandler();
	opacityForEachItems('.answers__list', '.answers__content');
}
if (brands) {
	brandsSlide();
}
if (tabsButton) {
	tabsHandler();
}
if (seoBlock) {
	addToBlock();
}
if (servicesPrice) {
	opacityForEachItems('.services-price__content', '.services-price__column');
}
if (companyTeam) {
	opacityForEachItems('.company-team__content', '.company-team__column');
}
if (aboutCompany) {
	opacityForEachItems('.about-company__content', '.about-company__row');
}
if (tooltip) {
	tooltipHide();
}
