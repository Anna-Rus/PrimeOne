//BildSlider
let sliders = document.querySelectorAll('._swiper');

if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }


if (document.querySelector('.dishes__body')) {
	let mainslide = new Swiper('.dishes__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 2,
		autoHeight: true,
		speed: 800,
		mousewheel: true,
		//loop: true,
		keyboard: {
			enabled: true,
			onlyInViewport: true,
			pageUpDown: true,
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
				autoHeight: true,
			},
			360: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
			},
			600: {
				slidesPerView: 3,
			},
			700: {
				slidesPerView: 3,
			},
			850: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 4,
			},
		},
		on: {
			lazyImageReady: function () {
				ibg();
			},
		}
	});
}

let headerBurger = document.querySelector('.menu__icon');
let headerMenu = document.querySelector('.menu__body');
if (headerBurger) {
	headerBurger.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
	});
}





