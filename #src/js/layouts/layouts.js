import { timeLineHeaderItem } from '../modules/anime-js.js';
//* ----------------------------------------------------------------------------
export function showCard() {
	const contentItems = document.querySelectorAll('.services-price__column');
	contentItems.forEach(contentItem => {

		const openButton = contentItem.querySelector('.card-price__open-btn');
		const closeButton = contentItem.querySelector('.card-price__close-btn');


		openButton.addEventListener('click', () => {
			contentItem.classList.add('_open');
		});
		closeButton.addEventListener('click', () => {
			contentItem.classList.remove('_open');
		});
	});
}
// -----------------------------------------------------------------------------
export function sidebarMenuHendle() {
	const sidebarMenu = document.querySelector('.sidebar-menu');
	const buttonItems = document.querySelectorAll('.burger-button');
	const tabsItem = document.querySelector('.project__tabs');


	buttonItems.forEach(buttonItem => {
		buttonItem.addEventListener('click', (e) => {
			if (buttonItem.classList.contains('header__button')) {
				buttonItem.classList.toggle('_open-menu');
				toggleSidebarMenu(sidebarMenu);
			} else if (buttonItem.classList.contains('tabs-button__button')) {
				buttonItem.classList.toggle('_open-menu');
				tabsItem.classList.toggle('_responsive');
			}
		});
	});
}
// -----------------------------------------------------------------------------
export function toggleSidebarMenu(sidebarMenu) {
	const asideButton = document.querySelector('.page__aside-button');
	if (sidebarMenu.classList.contains('_open-menu')) {
		console.log(asideButton);

		sidebarMenu.classList.add('_close-menu');
		setTimeout(() => {
			asideButton.style.opacity = '1';
			asideButton.style.transition = 'opacity 0.4s ease-in-out';
			asideButton.style.pointerEvents = 'all';
			document.body.classList.remove('no-scroll');
			sidebarMenu.style.transition = 'transform 0.4s ease-in-out';
			sidebarMenu.addEventListener('transitionend', function transitionEndHandler() {
				sidebarMenu.style.transition = '';
				sidebarMenu.removeEventListener('transitionend', transitionEndHandler);
			}, { once: true });
			sidebarMenu.classList.remove('_open-menu');
			sidebarMenu.classList.remove('_close-menu');
		}, 1300);
	} else {
		asideButton.style.opacity = '0';
		asideButton.style.transition = 'opacity 0.4s ease-in-out';
		asideButton.style.pointerEvents = 'none';
		sidebarMenu.classList.add('_open-menu');
		document.body.classList.add('no-scroll');

		sidebarMenu.style.transition = 'transform 0.4s ease-in-out';
		sidebarMenu.addEventListener('transitionend', function transitionEndHandler() {
			sidebarMenu.style.transition = '';
			sidebarMenu.removeEventListener('transitionend', transitionEndHandler);
		}, { once: true });
	}
}
// -----------------------------------------------------------------------------
export function tabsHandler() {
	const tablinks = document.querySelectorAll('.tabs-button__item');
	const tabcontents = document.querySelectorAll('.tab-content__items');
	const tabsItem = document.querySelector('.project__tabs');
	const buttonItems = document.querySelectorAll('.burger-button');

	tablinks.forEach((tablink, i) => {
		tablink.addEventListener('click', () => {
			const tabcontent = tabcontents[i];

			// Удаляем класс active у всех Tabs и Contents
			tablinks.forEach(link => link.classList.remove('active'));
			tabcontents.forEach(content => content.classList.remove('active'));

			// Добавляем класс active к текущей кнопке и контенту
			tablink.classList.add('active');
			tabcontent.classList.add('active');
			tabsItem.classList.remove('_responsive');
			buttonItems.forEach(buttonItem => {
				if (buttonItem.classList.contains('_open-menu')) {
					buttonItem.classList.remove('_open-menu');
				}
			});

			// Применяем анимацию только к активному контенту
			if (!tabcontent.classList.contains('.active')) {
				timeLineHeaderItem(tabcontent);
			}
		});
	});
}
// -----------------------------------------------------------------------------
import ItcCollapse from "../assets/collapse.js";

export function answersHandler() {
	const listItems = document.querySelectorAll('.answers__content');
	const menuList = document.querySelector('.answers__list');
	listItems.forEach(item => {
		const trigger = item.querySelector('.answers__question');
		trigger.addEventListener('click', () => {
			const opened_menu = menuList.querySelector('._open');
			_toggleMenu(item);
			if (opened_menu && opened_menu !== item) {
				_toggleMenu(opened_menu);
			}

		});
	});
	const _toggleMenu = (el) => {
		const collapse = new ItcCollapse(el.querySelector('._collapse'));
		if (el.classList.contains('_open')) {
			el.classList.remove('_open');
			collapse.toggle();
		} else {
			el.classList.add('_open');
			collapse.toggle();
		}
	};
}
// -----------------------------------------------------------------------------
import IMask from 'imask';

export function maskPhone(selector) {
	const elements = document.querySelectorAll(selector);
	if (!elements.length) return; // Убедитесь, что элементы существуют

	elements.forEach(element => {
		let mask = null;

		// Функция для инициализации маски
		function initializeMask() {
			mask = IMask(element, {
				mask: '+7 (000) 000-00-00',
				lazy: true // Показывать маску только при фокусе
			});
			mask.updateValue(); // Сразу обновляем значение маски

		}

		// При фокусе на поле ввода, показываем маску
		element.addEventListener('focus', function () {
			if (!mask) {
				initializeMask(); // Инициализируем маску только при первом фокусе
			}
			if (element.value === '') {
				element.value = '+7 '; // Устанавливаем начальное значение
			}
			mask.updateValue(); // Обновляем значение маски
		});

		// При потере фокуса, если поле пустое, очищаем его
		element.addEventListener('blur', function () {
			if (element.value.trim() === '+7') {
				element.value = ''; // Очищаем поле
				if (mask) {
					mask.updateValue(''); // Очищаем маску
				}
			}
		});
	});
}

// -----------------------------------------------------------------------------
export function shadowScroll() {
	const handleScroll = () => {
		const headerMain = document.querySelector('.page__header-main');
		const headerProject = document.querySelector('.page__header-project');
		const pageContainer = document.querySelector('.page__content');
		const pageContainerTop = pageContainer.getBoundingClientRect().top;

		if (headerMain) {
			if (pageContainerTop < -50) {
				headerMain.classList.add('with-shadow');
			} else if (pageContainerTop <= 0) {
				headerMain.classList.remove('with-shadow');
			}
		} else if (headerProject) {
			if (pageContainerTop < -50) {
				headerProject.classList.add('with-shadow');
			} else if (pageContainerTop <= 0) {
				headerProject.classList.remove('with-shadow');
			}
		}

	};

	window.addEventListener('scroll', handleScroll);
	// Очистка слушателя событий при размонтировании компонента
	return () => {
		window.removeEventListener('scroll', handleScroll);
	};
}
// -----------------------------------------------------------------------------
export function addToBlock() {
	document.addEventListener('DOMContentLoaded', function () {
		const blocks = document.querySelectorAll('.seo-block__content .seo-block__column');
		// Кнопка
		const button = document.querySelector('.seo-block__button');
		if (button) {
			// Текст внутри кнопки
			const buttonText = button.querySelector('span');

			// Сколько блоков видно изначально
			let visibleCount = 5;
			// Сколько блоков нужно показывать при каждом нажатии
			const blocksToShow = 3;

			// Показываем первые несколько блоков, остальные скрываем
			blocks.forEach((block, index) => {
				if (index >= visibleCount) {
					// Скрываем все блоки, начиная с определенного
					block.classList.add('hidden');
				}
			});

			// Функция для обновления стилей кнопки
			const updateButtonStyle = () => {
				// Проверка ширины экрана
				if (window.innerWidth >= 768) {
					if (visibleCount % 2 === 0) {
						// Добавляем класс для четного количества видимых блоков
						button.classList.add('seo-block__button--even');
					} else {
						// Удаляем класс для четного количества
						button.classList.remove('seo-block__button--even');
					}
				} else {
					// Удаляем класс, если ширина меньше 768px
					button.classList.remove('seo-block__button--even');
				}
			};

			// Проверяем стили кнопки сразу после загрузки
			updateButtonStyle();

			// Обработчик события для кнопки
			button.addEventListener('click', function () {
				if (visibleCount < blocks.length) {
					// Показываем следующие три блока
					for (let i = 0; i < blocksToShow; i++) {
						if (visibleCount < blocks.length) {
							// Показываем следующий блок
							blocks[visibleCount].classList.remove('hidden');
							// Увеличиваем счетчик видимых блоков
							visibleCount++;
						}
					}
					// Если все блоки показаны, меняем текст кнопки на "Свернуть"
					if (visibleCount === blocks.length) {
						// Меняем текст на "Свернуть"
						buttonText.textContent = 'Свернуть';
						// Добавляем класс для кнопки вращения
						button.classList.add('_rotate-button');
					}
				} else {
					// Если текст кнопки "Свернуть", возвращаем все блоки в исходное состояние
					blocks.forEach((block, index) => {
						if (index >= 5) {
							block.classList.add('hidden'); // Скрываем блоки снова
						}
					});
					// Сбрасываем видимое количество блоков
					visibleCount = 5;
					// Возвращаем текст кнопки обратно на "Читать ещё"
					buttonText.textContent = 'Читать ещё';
					// Удаляем класс для кнопки вращения
					button.classList.remove('_rotate-button');
				}

				// Обновляем стили кнопки после клика
				updateButtonStyle();
			});
		}
	});
}

// -----------------------------------------------------------------------------
export function returnToSavedPosition() {
	var savedScrollPosition = 0;

	// Функция для возврата к исходной позиции
	function returnToSavedPosition() {
		if ((window.scrollY || document.documentElement.scrollTop) !== 0) {
			// Если прокрутка не находится в самом верху, прокручиваем страницу вверх
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		} else if (savedScrollPosition !== 0) {
			// Если прокрутка находится в самом верху и есть сохраненная позиция, возвращаемся к сохраненной позиции
			window.scrollTo({
				top: savedScrollPosition,
				behavior: 'smooth'
			});
		}
	}
	// Добавляем обработчик события для кнопки
	const scrollButton = document.getElementById('scrollButton');
	scrollButton.addEventListener('click', function () {
		// Проверяем, находится ли страница не в самом верху
		if ((window.scrollY || document.documentElement.scrollTop) !== 0) {
			// Если да, сохраняем текущую позицию прокрутки
			savedScrollPosition = window.scrollY || document.documentElement.scrollTop;
		}
		// Вызываем функцию возврата к исходной позиции
		returnToSavedPosition();
	});

	// Отслеживаем событие прокрутки страницы
	window.addEventListener('scroll', function () {
		// Если прокрутка больше, чем половина высоты окна браузера, добавляем класс "_rotate" кнопке 
		if ((window.scrollY || document.documentElement.scrollTop) > window.innerHeight * 0.2) {
			scrollButton.classList.add('_rotate');
		} else {
			// Иначе удаляем класс _rotate у кнопки
			scrollButton.classList.remove('_rotate');
		}
	});
}
//* ----------------------------------------------------------------------------
export function tooltipHide() {
	const tooltip = document.querySelector('.tooltip__content');
	const tooltipButtons = document.querySelectorAll('.tooltip__button');

	tooltipButtons.forEach(tooltipButton => {
		tooltipButton.addEventListener('click', function () {

			const tooltip = tooltipButton.closest('.tooltip');
			tooltip.classList.toggle('visible');
			console.log(tooltip);
		});
	});
}