$(document).ready(function() {
	if ($(window).scrollTop() > $('nav').outerHeight()) {
		$('nav').toggleClass('header__light__visible');
		$('.header_button').toggleClass('header_button__dark');
	}

	// scroll event to change the header after scrolling
	$(window).scroll(function() {
		if ($(window).scrollTop() > $('nav').outerHeight()) {
			if (mode % 2 == 1) {
				$('nav').addClass('header__dark__visible');
				if ($('.header_button').hasClass('header_button__dark')) {
					$('.header_button').removeClass('header_button__dark');
				}
			} else {
				$('nav').addClass('header__light__visible');
				if (!$('.header_button').hasClass('header_button__dark')) {
					$('.header_button').addClass('header_button__dark');
				}
			}
		} else {
			if (mode % 2 == 1) {
				$('nav').removeClass('header__dark__visible');
				if (!$('.header_button').hasClass('header_button__dark')) {
					$('.header_button').addClass('header_button__dark');
				}
			} else {
				$('nav').removeClass('header__light__visible');
				if ($('.header_button').hasClass('header_button__dark')) {
					$('.header_button').removeClass('header_button__dark');
				}
			}
		}
	});

	// click events

	// button to switch color mode
	let mode = 0;
	$('.header_button:nth-child(1)').click(function() {
		$('.header_button:nth-child(1) i').toggleClass('bi-sun');
		$('.header_button:nth-child(1) i').toggleClass('bi-moon');
		$('.header_button').toggleClass('header_button__dark');
		$('.page').toggleClass('page__light');
		$('body').toggleClass('body__light');
		$('.content').toggleClass('content__light');
		if ($(window).scrollTop() > 0) {
			$('nav').toggleClass('header__light__visible');
			$('nav').toggleClass('header__dark__visible');
			if (mode % 2 == 1) {
				$('.header_button').addClass('header_button__dark');
			} else {
				$('.header_button').removeClass('header_button__dark');
			}
		}
		mode++;
	});

	// button to hide all the text except headlings
	$('.header_button:nth-child(2)').click(function() {
		$('p').slideToggle();
		$('.content i').slideToggle();
		$('span').slideToggle();
		$('.content div').slideToggle();
		$('ul').slideToggle();
		$('.header_button:nth-child(2) i').toggleClass('bi-arrows-collapse');
		$('.header_button:nth-child(2) i').toggleClass('bi-arrows-expand');
	});

	// button to go up
	$('.header_button:nth-child(3)').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow');
	});

	// button to switch position of buttons in header
	let orientation_clicked = false;
	$('.header_button:nth-child(4)').click(function() {
		if (!orientation_clicked) {
			$('.header_button').animate({
				left: '40vw'
			}, {
				duration: 'slow',
				easing: 'linear'
			});
			orientation_clicked = true;
		} else {
			$('.header_button').animate({
				left: 0
			}, {
				duration: 'slow',
				easing: 'linear'
			});
			orientation_clicked = false;
		}
		$('.header_button:nth-child(4) i').toggleClass('bi-arrow-right');
		$('.header_button:nth-child(4) i').toggleClass('bi-arrow-left');
	});
});