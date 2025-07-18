//* ----------------------------------------------------------------------------
import { opacityForEachItems } from './animations/layout-anime.jsx';
//* ----------------------------------------------------------------------------
import { dinamicAdaptive } from './assets/move-elements.js';
//* ----------------------------------------------------------------------------
import {
  addToBlock,
  answersHandler,
  maskPhone,
  returnToSavedPosition,
  shadowScrollHeader,
  showCard,
  sidebarMenuHandle,
  tabsHandler,
  tooltipHide,
} from './layouts/layouts.js';
//* ---------------- Плавная прокрутка страницы до позиции ---------------------
import { anchorsSmoothScrolling } from './modules/anchors-smooth-scrolling.js';
import { brandsSlide } from './modules/brands-slide.js';
import loaded from './modules/preloader.js';

loaded('.preloader');

dinamicAdaptive();

sidebarMenuHandle();
returnToSavedPosition();
shadowScrollHeader();

anchorsSmoothScrolling();
// if (anchorLink) {
// }
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

const isMobile = /Mobi|Android/i.test(navigator.userAgent);
if (isMobile) {
  const itemMenu = document.querySelector('.menu-list__item-menu');
  itemMenu.addEventListener('click', () => {
    let item = itemMenu.closest('.menu-list__item');
    item.classList.toggle('_open');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.order-form');

  forms.forEach((form, index) => {
    const name = form.querySelector('.input.name');
    const phone = form.querySelector('.input.phone');
    const checkbox = form.querySelector('.checkbox__input');
    const SendButton = form
      .querySelector('.order-form__button')
      .closest('.order-form__column');
    const button = form.querySelector('.order-form__button');

    if (!name || !phone || !checkbox || !SendButton) return;

    /**
     * @param {HTMLElement} el — элемент или его контейнер для анимации
     * @param {Object} options
     * @param {number} options.maxSpread  — максимальный «размах» тени (px)
     * @param {number} options.duration   — общее время анимации (ms)
     * @param {number} options.pulses     — количество «туда‑обратно» за это время
     */

    function animateError(
      el,
      { maxSpread = 12, duration = 1000, pulses = 3 } = {},
    ) {
      if (!el) return;
      const container = el.closest('.order-form__column') || el.parentElement;
      if (!container) return;

      let startTime = null;
      const totalTime = duration;

      function frame(ts) {
        if (!startTime) startTime = ts;
        const elapsed = ts - startTime;
        const progress = Math.min(elapsed / totalTime, 1); // от 0 до 1

        // волна: 0→1→0, повторить pulses раз: |sin(progress * pulses * π)|
        const wave = Math.abs(Math.sin(progress * pulses * Math.PI));
        const spread = maxSpread * wave;

        container.style.boxShadow = `0 0 ${spread}px ${spread / 2}px rgba(255,0,0,0.6)`;

        if (elapsed < totalTime) {
          requestAnimationFrame(frame);
        } else {
          container.style.boxShadow = '';
        }
      }

      requestAnimationFrame(frame);
    }

    function validateFormFields() {
      const nameValid = name.value.trim().length >= 3;
      const phoneValid = phone.value.trim().length === 18;
      const checkboxValid = checkbox.checked;

      SendButton.classList.toggle(
        'is-disabled',
        !(nameValid && phoneValid && checkboxValid),
      );
    }

    name.addEventListener('input', validateFormFields);
    phone.addEventListener('input', validateFormFields);
    checkbox.addEventListener('change', validateFormFields);

    validateFormFields();

    SendButton.addEventListener('click', (e) => {
      if (SendButton.classList.contains('is-disabled')) {
        e.preventDefault();
        console.warn(
          `⚠️ [Форма ${index + 1}] Невалидное нажатие на кнопку отправки`,
        );

        if (name.value.trim().length < 3) {
          animateError(name);
        }
        if (phone.value.trim().length !== 18) {
          animateError(phone);
        }
        if (!checkbox.checked) {
          animateError(checkbox, {
            maxSpread: 10, // размах тени в пикселях
            duration: 1000, // длительность анимации в мс
            pulses: 3, // количество «туда‑обратно»
          });
        }
      } else {
        form.submit(); // когда всё валидно — кинем форму на сервер
      }
    });

    checkbox.addEventListener('change', () => {
      button.disabled = !checkbox.checked;
    });
  });
});

const url = window.location.pathname; // вернет часть после домена
console.log(url); // например: "/index.html" или "/project"

if (url.includes('index')) {
  console.log('Это index');
} else if (url.includes('project')) {
  console.log('Это project');
} else {
  console.log('Другой файл');
}

// document.addEventListener('DOMContentLoaded', () => {
// 	const itemMenu = document.querySelector('.menu-list__item-menu');
// 	let item = itemMenu.closest('.menu-list__item');
//
// 	item.addEventListener('click', () => {
// 		item.classList.toggle('_open');
// 	});
//
// });
