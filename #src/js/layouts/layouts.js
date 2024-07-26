// -----------------------------------------------------------------------------
export function sidebarMenuHendle() {
	const sidebarMenu = document.querySelector('.sidebar-menu');
	const buttonItems = document.querySelector('.burger-button');
	buttonItems.addEventListener('click', () => {
		if (sidebarMenu.classList.contains('_open-menu')) {
			// document.body.classList.remove('no-scroll');
		} else {
			// document.body.classList.add('no-scroll');
		}


		if (sidebarMenu.classList.contains('_open-menu')) {
			sidebarMenu.classList.add('_close-menu');
			buttonItems.classList.remove('_open-menu');

			setTimeout(() => {

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
			sidebarMenu.classList.add('_open-menu');
			buttonItems.classList.add('_open-menu');
			document.body.classList.add('no-scroll');

			sidebarMenu.style.transition = 'transform 0.4s ease-in-out';
			sidebarMenu.addEventListener('transitionend', function transitionEndHandler() {
				sidebarMenu.style.transition = '';
				sidebarMenu.removeEventListener('transitionend', transitionEndHandler);
			}, { once: true });

		}

	});
}
// -----------------------------------------------------------------------------
// import { timeLineHeaderItem } from '../modules/anime-js.js';
// export function tabsHandler() {
// 	const tablinks = document.querySelectorAll('.tabs-buton__item');
// 	const tabcontents = document.querySelectorAll('.tab-content');
// 	for (const i in tablinks) {
// 		const tablink = tablinks[i];
// 		const tabcontent = tabcontents[i];
// 		if (Object.hasOwnProperty.call(tabcontents, i)) {
// 			tablink.addEventListener('click', () => {

// 				if (tabcontent.classList.contains('active')) {
// 					// timeLineHeaderItem();
// 					console.log('el');
// 				}


// 				const view_tablink = document.querySelector('.tabs-buton__item.active');
// 				const view_content = document.querySelector('.tab-content.active');
// 				// tabButton.classList.remove('_responsive');
// 				// tabIcon.classList.remove('_active');
// 				_toggleLink(view_tablink);
// 				if (view_tablink && view_tablink !== tabcontent) {
// 					_toggleLink(tablink);
// 				}
// 				_toggleLink(view_content);
// 				if (view_content && view_content !== tablink) {
// 					_toggleLink(tabcontent);
// 				}
// 			});
// 		}
// 	}

// 	const _toggleLink = (el) => {
// 		if (el.classList.contains('active')) {
// 			el.classList.remove('active');
// 		} else {
// 			el.classList.add('active');

// 		}
// 	};

// }
// -----------------------------------------------------------------------------
import { timeLineHeaderItem, timeLineHeaderItemRevers } from '../modules/anime-js.js';

export function tabsHandler() {
	const tablinks = document.querySelectorAll('.tabs-buton__item');
	const tabcontents = document.querySelectorAll('.tab-content__item');

	tablinks.forEach((tablink, i) => {
		tablink.addEventListener('click', () => {
			const tabcontent = tabcontents[i];

			// Удаляем класс active у всех табов и контентов
			tablinks.forEach(link => link.classList.remove('active'));
			tabcontents.forEach(content => content.classList.remove('active'));

			// Добавляем класс active к текущей кнопке и контенту
			tablink.classList.add('active');
			tabcontent.classList.add('active');

			// Применяем анимацию только к активному контенту
			timeLineHeaderItem(tabcontent);

			if (!tabcontent.classList.contains('.active')) {
				// timeLineHeaderItemRevers(tabcontent);
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