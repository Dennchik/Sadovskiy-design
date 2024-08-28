export function sidebarMenuHendle() {
	const sidebarMenu = document.querySelector('.sidebar-menu');
	const buttonItem = document.querySelector('.burger-button');

	// buttonItems.forEach(buttonItem => {
	buttonItem.addEventListener('click', () => {
		if (sidebarMenu.classList.contains('_open-menu')) {
			sidebarMenu.classList.add('_close-menu');
			buttonItem.classList.remove('_open-menu');
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
			buttonItem.classList.add('_open-menu');
			document.body.classList.add('no-scroll');

			sidebarMenu.style.transition = 'transform 0.4s ease-in-out';
			sidebarMenu.addEventListener('transitionend', function transitionEndHandler() {
				sidebarMenu.style.transition = '';
				sidebarMenu.removeEventListener('transitionend', transitionEndHandler);
			}, { once: true });
		}
	});


	// });


}