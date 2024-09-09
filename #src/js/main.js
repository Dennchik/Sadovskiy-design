import loaded from './modules/preloader.js';
loaded('.preloader');
//* ----------------------------------------------------------------------------
import { sidebarMenuHendle, scalingFunction } from "./layouts/layouts.js";
sidebarMenuHendle();
// -----------------------------------------------------------------------------
import { anchorsSmoothScrolling } from "./modules/anchors-smooth-scrolling.js";
anchorsSmoothScrolling();
scalingFunction();

// window.addEventListener('resize', function () {
// 	const scaleElements = document.querySelectorAll('.page__order-place');
// 	scaleElements.forEach(scaleElement => {
// 		console.log(scaleElement);


// 		const minViewport = 320;
// 		const maxViewport = 490;
// 		const scaleMin = 1;
// 		const scaleMax = 1.3;

// 		// Рассчитаем текущее значение ширины окна
// 		const currentViewportWidth = window.innerWidth;

// 		// Ограничим значение ширины окна диапазоном [320, 490]
// 		const clampedWidth = Math.min(Math.max(currentViewportWidth, minViewport), maxViewport);

// 		// Рассчитаем пропорцию для масштабирования
// 		const scaleFactor = scaleMin + (scaleMax - scaleMin) * ((clampedWidth - minViewport) / (maxViewport - minViewport));

// 		// Применим scaleY с динамическим значением
// 		scaleElement.style.transform = `scaleY(${scaleFactor})`;
// 	});

// });
// window.addEventListener('resize', function () {
// 	const scaleElements = document.querySelectorAll('.order-form__column');
// 	scaleElements.forEach(scaleElement => {
// 		console.log(scaleElement);


// 		const minViewport = 320;
// 		const maxViewport = 490;
// 		const scaleMin = 1;
// 		const scaleMax = 0.8;

// 		// Рассчитаем текущее значение ширины окна
// 		const currentViewportWidth = window.innerWidth;

// 		// Ограничим значение ширины окна диапазоном [320, 490]
// 		const clampedWidth = Math.min(Math.max(currentViewportWidth, minViewport), maxViewport);

// 		// Рассчитаем пропорцию для масштабирования
// 		const scaleFactor = scaleMin + (scaleMax - scaleMin) * ((clampedWidth - minViewport) / (maxViewport - minViewport));

// 		// Применим scaleY с динамическим значением
// 		scaleElement.style.transform = `scaleY(${scaleFactor})`;
// 	});

// });
