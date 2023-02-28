'use strict'


const slider = new Swiper('#quality-slider', {
	loop: true,
	grabCursor: true,
	effect: 'fade',
	speed: 600,
	slidesPerView: 1,
	navigation: {
		prevEl: '#slider-prev',
		nextEl: '#slider-next',
	},
	pagination: {
		el: '#slider-pagination',
		type: 'bullets',
		clickable: false,
		dynamicBullets: true,
		dynamicMainBullets: 1,
		renderBullet: function(index, className) {
			if (index < 9) {
				return `<span class='${className}'> 0${index + 1}</span>`
			} else {
				return `<span class='${className}'> ${index + 1}</span>`
			}
		}
	 },
})


