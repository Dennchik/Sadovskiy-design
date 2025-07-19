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
  document.querySelectorAll('.order-form').forEach((form, index) => {
    const name = form.querySelector('.input.name');
    const phone = form.querySelector('.input.phone');
    const checkbox = form.querySelector('.checkbox__input');
    const button = form.querySelector('.order-form__button');
    const buttonContainer = form
      .querySelector('.order-form__button')
      .closest('.order-form__column');

    if ([name, phone, checkbox, button, buttonContainer].includes(null)) return;

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
      const container = el.closest('.order-form__column') || el.parentElement;
      if (!container) return;

      let startTime = null;
      const totalTime = duration;

      function frame(ts) {
        if (!startTime) startTime = ts;
        const elapsed = ts - startTime;
        const progress = Math.min(elapsed / totalTime, 1);
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
      const nameVal = name.value.trim();
      const phoneVal = phone.value.trim();
      const isValid =
        nameVal.length >= 3 && phoneVal.length === 18 && checkbox.checked;

      buttonContainer.classList.toggle('is-disabled', !isValid);
      button.disabled = !checkbox.checked;
      return isValid;
    }

    function showValidationErrors() {
      if (name.value.trim().length < 3) animateError(name);
      if (phone.value.trim().length !== 18) animateError(phone);
      if (!checkbox.checked) animateError(checkbox);
    }

    name.addEventListener('input', validateFormFields);
    phone.addEventListener('input', validateFormFields);
    checkbox.addEventListener('change', validateFormFields);

    validateFormFields();

    buttonContainer.addEventListener('click', (e) => {
      if (buttonContainer.classList.contains('is-disabled')) {
        e.preventDefault();
        console.warn(`⚠️ [Форма ${index + 1}] Невалидная попытка отправки`);
        showValidationErrors();
      }
    });

    button.addEventListener('click', () => {
      if (
        !button.disabled &&
        !buttonContainer.classList.contains('is-disabled')
      ) {

        // Получаем название цели для аналитики из кнопки
        let goalName = "";
        if (button) {
          goalName = button.getAttribute("goal-name") || "";
        }

        // Собираем данные из формы
        const formData = new FormData();
        formData.append("action", "send_telegram_message");

        // Получаем номер телефона
        if (phone && phone.value) {
          formData.append("phone", phone.value.trim());
        }

        // Получаем имя
        if (name && name.value) {
          formData.append("name", name.value.trim());
        }

        // Добавляем имя цели (если есть)
        formData.append("goalName", goalName);

        // Отправляем данные через AJAX
        fetch(localizedVars.ajax_url, {
          method: "POST",
          headers: {
            "X-WP-Nonce": localizedVars.ajax_nonce
          },
          body: formData
        })
          .then(response => response.text())
          .then(responseText => {
            alert("Ваш запрос отправлен.");
            console.log("Ответ сервера:", responseText);

            // Очищаем форму
            if (phone) phone.value = "";
            if (name) name.value = "";
            if (checkbox) checkbox.checked = false;

            // Делаем форму неактивной
            button.classList.toggle("is-disabled", true);
          })
          .catch(error => {
            console.error("Ошибка при отправке:", error);
            alert("Произошла ошибка при отправке данных.");
          });
      }
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
