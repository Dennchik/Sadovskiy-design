// -----------------------------------------------------------------------------
export function sidebarMenuHendle() {
	const sidebarMenu = document.querySelector('.sidebar-menu');
	const buttonItems = document.querySelector('.burger-button__items');
	buttonItems.addEventListener('click', () => {
		if (sidebarMenu.classList.contains('_open-menu')) {
			sidebarMenu.classList.add('_close-menu');
			buttonItems.classList.remove('_open-menu');

			setTimeout(() => {
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

			sidebarMenu.style.transition = 'transform 0.4s ease-in-out';
			sidebarMenu.addEventListener('transitionend', function transitionEndHandler() {
				sidebarMenu.style.transition = '';
				sidebarMenu.removeEventListener('transitionend', transitionEndHandler);
			}, { once: true });

		}
	});
}
// -----------------------------------------------------------------------------

