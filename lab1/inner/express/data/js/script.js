$(document).ready(function() {

	// animation for mouse
	var $circle = $('.circle');
	$(window).mousemove(function (e) { 
		TweenLite.to($circle, 0.3, {
			css: {
				left: e.pageX,
				top: e.pageY
			}
		});		
	});

	// other effects

	// scroll reveal
	ScrollReveal().reveal('p');

	// button to hide all the text in p tag
	$('#text_toogle').click(function() {
		$('p').slideToggle();
		$('#text_toogle i').toggleClass('fa-minus');
		$('#text_toogle i').toggleClass('fa-plus');
	});

	// event condition to change the size of a "button"
	var changed = false;
	$('#text_cloud').click(function() {
		if (!changed) {
			$(this).css('font-size', '3em');
			changed = true;
		}
		else {
			$(this).css('font-size', 'inherit');
			changed = false;
		}		
	});
});