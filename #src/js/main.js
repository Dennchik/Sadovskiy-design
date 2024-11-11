import loaded from './modules/preloader.js';
loaded('.preloader');
//* ----------------------------------------------------------------------------
import { dinamicAdaptive } from './assets/move-elements.js';
dinamicAdaptive();
//* ----------------------------------------------------------------------------
import { sidebarMenuHendle, addToBlock, returnToSavedPosition, maskPhone, answersHandler, tabsHandler, shadowScroll } from "./layouts/layouts.js";
sidebarMenuHendle();
returnToSavedPosition();
answersHandler();
tabsHandler();
shadowScroll();
document.addEventListener('DOMContentLoaded', () => {
	maskPhone('.phone');

	var buttons = document.querySelectorAll('.order-form__button');
	buttons.forEach(function(button) {
		button.addEventListener('click', function() {
			var action = this.getAttribute('data-name-goal');

			ym(YOUR_COUNTER_ID, 'reachGoal', action);

			var xhr = new XMLHttpRequest();
			xhr.open('POST', sd_ajax_object.ajax_url, true);
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xhr.onreadystatechange = function() {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status === 200) {
						console.log(xhr.responseText);
					} else {
						console.error('Error:', xhr.statusText);
					}
				}
			};
			xhr.send('action=send_telegram_message&message=' + encodeURIComponent('Yangi so\'rov: ' + action));

		});
	});

});
// -----------------------------------------------------------------------------
import { anchorsSmoothScrolling } from "./modules/anchors-smooth-scrolling.js";
anchorsSmoothScrolling();

addToBlock();

// -----------------------------------------------------------------------------
import { opacityForEachItems } from "./animations/layout-anime.js";
if (document.querySelector('.services-price__content')) {
	opacityForEachItems('.services-price__content', '.services-price__column');
}
if (document.querySelector('.answers__list')) {
	opacityForEachItems('.answers__list', '.answers__content');
}