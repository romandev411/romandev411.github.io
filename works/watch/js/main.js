$(document).ready(function(){
//LENG
	$('.leng').click(function(){
		$('.leng').toggleClass('active');
	});
	
	$('.leng__item--ru').click(function(){
		$('.leng__item--ru').addClass('active');
		$('.leng__item--en').removeClass('active');
	});
	
	$('.leng__item--en').click(function(){
		$('.leng__item--en').addClass('active');
		$('.leng__item--ru').removeClass('active');
	});
	
//ANCHOR
	jQuery("a[href^='#']").click(function() {

		var elementClick = jQuery(this).attr("href");
		var destination = jQuery(elementClick).offset().top;
		jQuery("html, body").animate({
			scrollTop: destination
		}, 500);
		return false;
	});
//OPEN BLOCK
	$('.clock').click(function(){
		$('.application__form.application__form--clock').addClass('active');
		$('.application__form.application__form--jev').removeClass('active');
	});

	$('.jewelry').click(function(){
		$('.application__form.application__form--jev').addClass('active');
		$('.application__form.application__form--clock').removeClass('active');
	});
});