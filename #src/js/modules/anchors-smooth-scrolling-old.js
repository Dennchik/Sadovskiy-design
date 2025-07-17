import { toggleSidebarMenu } from '../layouts/layouts.js';

export function anchorsSmoothScrolling() {
  // Функция плавного скролла к якорю по ID
  function scrollToAnchor(targetId) {
    // Получаем целевой элемент по ID
    const targetElement = document.getElementById(targetId);
    // Если элемент не найден — выходим
    if (!targetElement) return;

    // Получаем текущую ширину окна
    const screenWidth = window.innerWidth;

    //* Устанавливаем отступ в зависимости от ширины экрана
    // Базовое значение отступа (например, высота фиксированной шапки)
    let offset = 98; // Отступ
    if (screenWidth <= 690) {
      offset = 50;
    } else if (screenWidth <= 768) {
      offset = 60;
    } else if (screenWidth <= 1440) {
      offset = 71;
    }

    // Вычисляем положение элемента относительно всего документа
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;

    // Итоговая позиция прокрутки с учётом отступа
    const offsetPosition = targetPosition - offset;
    // Выполняем плавную прокрутку к элементу
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  // Обработка кликов по якорным ссылкам
  document.addEventListener('DOMContentLoaded', function () {
    // Находим все ссылки с классом .anchor-link
    const anchorLinks = document.querySelectorAll('.anchor-link');

    anchorLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        // Получаем значение href
        const href = this.getAttribute('href');
        // Создаём полноценный URL-объект
        const url = new URL(href, window.location.href);

        // Если якорь ведёт на другую страницу — ни хрена не делаем,
        // Иначе даем браузеру свободу
        if (url.pathname !== window.location.pathname) {
          return;
        }
        // Отменяем стандартное поведение браузера (прыжок по якорю)
        e.preventDefault();

        // Извлекаем ID якоря из hash  (#about → about)
        const targetId = url.hash.substring(1);

        // Проверяем, есть ли открытое боковое меню
        const sidebarMenu = e.target.closest('.sidebar-menu');
        if (sidebarMenu && sidebarMenu.classList.contains('_open-menu')) {
          // Кнопка открытия меню
          const buttonItems = document.querySelector('.burger-button');

          // Убираем класс открытия с кнопки
          buttonItems?.classList.remove('_open-menu');

          // Разрешаем прокрутку страницы
          document.body.classList.remove('no-scroll');

          // Закрываем меню, если функция доступна
          if (typeof toggleSidebarMenu === 'function') {
            toggleSidebarMenu(sidebarMenu);
          }
        }

        // Выполняем прокрутку к нужному якорю
        scrollToAnchor(targetId);
      });
    });

    // При загрузке страницы с якорем в URL (#about и т.д.)
    if (window.location.hash) {
      // Извлекаем ID из URL
      const targetId = window.location.hash.substring(1);

      // Задержка, чтобы дать время полностью отрендерить страницуБ дабы
      // увидеть анимацию прокрутки
      setTimeout(() => {
        // Выполняем прокрутку к якорю
        scrollToAnchor(targetId);
      }, 500);
    }
  });
}
