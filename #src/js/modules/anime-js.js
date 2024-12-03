import anime from 'animejs';

// -----------------------------------------------------------------------------

export function timeLineHeaderItem(element) {
	let timeline = anime.timeline({
		duration: 750,
	});
	timeline.add({
		targets: element,
		opacity: [0, 1],
		translateY: [10, 0],
		// rotate: [-90, 0],
		duration: 500,
		easing: 'easeInOutSine',
		begin: function (anim) {
			anim.animatables.forEach(function (animatable) {
				animatable.target.style.transition = 'opacity 0.9s ease-out';
			});
		}
	}, 50);
}

