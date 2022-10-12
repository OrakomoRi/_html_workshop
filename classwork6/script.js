$(document).ready(function() {
	if ($(window).scrollTop() > 0) {
		$('#header').toggleClass('header__light__visible');
		$('.header_button').toggleClass('header_button__dark');
	}

	// 
	$(window).scroll(function() {
		if ($(window).scrollTop() > 0) {
			if (mode % 2 == 1) {
				$('#header').addClass('header__dark__visible');
				if ($('.header_button').hasClass('header_button__dark')) {
					$('.header_button').removeClass('header_button__dark');
				}
			} else {
				$('#header').addClass('header__light__visible');
				if (!$('.header_button').hasClass('header_button__dark')) {
					$('.header_button').addClass('header_button__dark');
				}
			}
		} else {
			if (mode % 2 == 1) {
				$('#header').removeClass('header__dark__visible');
				if (!$('.header_button').hasClass('header_button__dark')) {
					$('.header_button').addClass('header_button__dark');
				}
			} else {
				$('#header').removeClass('header__light__visible');
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
		$('#button_mode i').toggleClass('fa-sun-o');
		$('#button_mode i').toggleClass('fa-moon-o');
		$('.header_button').toggleClass('header_button__dark');
		$('.page').toggleClass('page__light');
		$('body').toggleClass('body__light');
		if ($(window).scrollTop() > 0) {
			$('#header').toggleClass('header__light__visible');
			$('#header').toggleClass('header__dark__visible');
			if (mode % 2 == 1) {
				$('.header_button').addClass('header_button__dark');
			} else {
				$('.header_button').removeClass('header_button__dark');
			}
		}
		mode++;
	});

	$('.header_button:nth-child(2)').click(function() {
		$('p').slideToggle();
		$('.page i').slideToggle();
		$('span').slideToggle();
		$('.page div').slideToggle();
		$('ul').slideToggle();
		$('.header_button:nth-child(2) i').toggleClass('fa-minus');
		$('.header_button:nth-child(2) i').toggleClass('fa-plus');
	});

	$('.header_button:nth-child(3)').click(function() {
		$("html, body").animate({scrollTop: 0}, 1000);
	});

	// button to switch position of buttons in header
	let orientation_clicked = false;
	let move_length = 250;
	$('.header_button:nth-child(4)').click(function() {
		if (!orientation_clicked) {
			$('.header_button').animate({
				left: `+=${move_length}px`
			}, move_length * 2);
			orientation_clicked = true;
		} else {
			$('.header_button').animate({
				left: `-=${move_length}px`
			}, move_length * 2);
			orientation_clicked = false;
		}
		$('.header_button:nth-child(4) i').toggleClass('fa-arrow-right');
		$('.header_button:nth-child(4) i').toggleClass('fa-arrow-left');
	});
});