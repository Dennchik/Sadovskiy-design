import loaded from './modules/preloader.js';
loaded('.preloader');
//* ----------------------------------------------------------------------------
import { sidebarMenuHendle, scalingFunction } from "./layouts/layouts.js";
sidebarMenuHendle();
// -----------------------------------------------------------------------------
import { anchorsSmoothScrolling } from "./modules/anchors-smooth-scrolling.js";
anchorsSmoothScrolling();
// scalingFunction();






// function resetZoom() {
// 	const scale = 1 / (window.devicePixelRatio || 1);
// 	document.body.style.transform = `scale(${scale})`;
// 	document.body.style.transformOrigin = '0 0';
// 	document.body.style.width = `${(100 / scale)}%`;
// }

// window.addEventListener('resize', resetZoom);
// resetZoom(); // Dastlabki chaqirish