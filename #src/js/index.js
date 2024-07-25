import { tabsHandler } from "./layouts/layouts";
tabsHandler();

// -----------------------------------------------------------------------------
const tabsButton = document.querySelector('.tabs-buton__button');
tabsButton.addEventListener('click', () => {
	tabsButton.classList.toggle('_open-menu');
});