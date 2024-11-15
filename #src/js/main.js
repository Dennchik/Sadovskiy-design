import loaded from './modules/preloader.js';
loaded('.preloader');
//* ----------------------------------------------------------------------------
import { dinamicAdaptive } from './assets/move-elements.js';
dinamicAdaptive();
//* ----------------------------------------------------------------------------
import { opacityForEachItems } from "./animations/layout-anime.js";
import { brandsSlide } from "./modules/brands-slide.js";
//* ----------------------------------------------------------------------------
import { sidebarMenuHendle, returnToSavedPosition, maskPhone, answersHandler, tabsHandler, shadowScroll, addToBlock, showCard } from "./layouts/layouts.js";
sidebarMenuHendle();
returnToSavedPosition();
shadowScroll();
//* ----------------- Плавная прокрутка стринци до позиции ---------------------
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
//* ----------------------------------------------------------------------------


(function () {
	"use strict";

	document.onmousemove = handleMouseMove;
	function handleMouseMove(event) {
		var dot, eventDoc, doc, body, pageX, pageY;

		event = event || window.event; // IE-ism
		if (event.pageX == null && event.clientX != null) {
			eventDoc = (event.target && event.target.ownerDocument) || document;
			doc = eventDoc.documentElement;
			body = eventDoc.body;

			event.pageX = event.clientX +
				(doc && doc.scrollLeft || body && body.scrollLeft || 0) -
				(doc && doc.clientLeft || body && body.clientLeft || 0);
			event.pageY = event.clientY +
				(doc && doc.scrollTop || body && body.scrollTop || 0) -
				(doc && doc.clientTop || body && body.clientTop || 0);
		}

		// Add a dot to follow the cursor
		dot = document.createElement('div');
		dot.className = "dot";
		dot.style.left = event.pageX + "px";
		dot.style.top = event.pageY + "px";
		document.body.appendChild(dot);
	}
})();