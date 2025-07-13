import loaded from './modules/preloader.js';

loaded('.preloader');
//* ----------------------------------------------------------------------------
import { dinamicAdaptive } from './assets/move-elements.js';

dinamicAdaptive();
//* ----------------------------------------------------------------------------
import { opacityForEachItems } from './animations/layout-anime.jsx';
import { brandsSlide } from './modules/brands-slide.js';
//* ----------------------------------------------------------------------------
import {
	sidebarMenuHandle,
	returnToSavedPosition,
	maskPhone,
	answersHandler,
	tabsHandler,
	shadowScrollHeader,
	addToBlock,
	showCard,
	tooltipHide
} from './layouts/layouts.js';

sidebarMenuHandle();
returnToSavedPosition();
shadowScrollHeader();
//* ---------------- Плавная прокрутка страницы до позиции ---------------------
import { anchorsSmoothScrolling } from './modules/anchors-smooth-scrolling.js';

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
const brands = document.querySelector('.brand-slide');
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

document.addEventListener('DOMContentLoaded', () => {
	const itemMenu = document.querySelector('.menu-list__item-menu');
	let item = itemMenu.closest('.menu-list__item');

	item.addEventListener('click', () => {
		item.classList.toggle('_open');
	});;

});


document.addEventListener('DOMContentLoaded', () => {
	const forms = document.querySelectorAll('.order-form');

	forms.forEach(form => {
		const checkbox = form.querySelector('.checkbox__input');
		const button = form.querySelector('.order-form__button');

		if (!checkbox || !button) return;

		checkbox.addEventListener('change', () => {
			button.disabled = !checkbox.checked;
		});
	});
}); 