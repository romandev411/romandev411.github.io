jQuery(document).ready(function ($) {

	
	$('.open-mobile-menu').click(function(){
		$('.main-menu').slideToggle(300);
	});
	
	$('.open-form-reviews').click(function(){
		$('.reviews-form-wrap__form').slideToggle(300);
	});
	
	
	$('.page-contact__btn>.header-btn').click(function(){
		$('.header-page__pop-up-form').addClass('active');
	});
	
	$('.pop-up-form__close, .close-button-pop').click(function(){
		$('.header-page__pop-up-form').removeClass('active');
	});
	
});

jQuery(document).ready(function ($) {
	$("#popular-carousel").owlCarousel({
		items: 3,
		navigation: true,
		slideSpeed: 700,
		paginationSpeed: 400
//		singleItem: true,
//		animateOut: 'slideOutDown',
//		animateIn: 'flipInX'
	});
});

jQuery(document).ready(function ($) {
	$("#new-item-carousel").owlCarousel({
		items: 3,
		navigation: true,
		slideSpeed: 700,
		paginationSpeed: 400,
//		singleItem: true,
//		animateOut: 'slideOutDown',
		animateIn: 'flipInX'
	});
});



jQuery(document).ready(function ($) {
	$("#comment-carousel").owlCarousel({
		items: 3,
		navigation: true,
		slideSpeed: 700,
		paginationSpeed: 400
//		singleItem: true,
//		animateOut: 'slideOutDown',
//		animateIn: 'flipInX'
	});
});




$(document).ready(function () {
	/*
	 *  Simple image gallery. Uses default settings
	 */

	$('.fancybox').fancybox();

	/*
	 *  Different effects
	 */

	// Change title type, overlay closing speed
	$(".fancybox-effects-a").fancybox({
		helpers: {
			title: {
				type: 'outside'
			},
			overlay: {
				speedOut: 0
			}
		}
	});
	

});








