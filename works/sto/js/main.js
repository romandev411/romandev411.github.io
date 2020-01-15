//OWL

$(document).ready(function () {
	var owl = $('.owl-carousel-2');
	owl.owlCarousel({
		items: 12,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 3000
	});


	var owl = $('.owl-carousel-1');
	owl.owlCarousel({
		items: 1,
		loop: true,
		margin: 10,
		autoplay: true,
		animateOut: 'fadeOut',
		autoplayTimeout: 3000
	});

	$("#recom-slider").owlCarousel({
		items: 3,
		loop: !0,
		dots: !0
	})
});

//FIXMENU
jQuery(document).ready(function () {

	jQuery(window).scroll(function () {
		if (jQuery(window).scrollTop() >= 43) {
			jQuery('body').addClass('fixed');
		} else jQuery('body').removeClass('fixed');
	});


});


//SUBMENU
$(document).ready(function () {
	$('.submenu__open').click(function () {
		var block = $(this).closest('.menu-aside__item');
		var btn = $(this);
		var submenu = $(block).find('.aside-submenu');

		if ($(block).hasClass('active')) {
			$(block).removeClass('active');
			$(submenu).slideUp(300);
		} else {
			$(block).addClass('active');
			$(submenu).slideDown(300);
		}
	});
	
//TAB
  	$(this).find('.galery-tabs__item').each(function (i) {
  		$(this).click(function () {
  			$(this).addClass('active').siblings().removeClass('active')
  				.closest('.galery-tabs').find('.galery-tabs__pic').removeClass('active').eq(i).addClass('active');
  		});
  	});
	
	$('.galery-tabs__all').click(function(){
		$('.galery-tabs__pic').addClass('open');
	});
	
	$('.galery-tabs__all').click(function(){
		$('.galery-tabs__all').addClass('active');
	});
	
	$('.galery-tabs__all').click(function(){
		$('.galery-tabs__item, .galery-tabs__pic').removeClass('active');
	});
	
	$('.galery-tabs__item').click(function(){
		$('.galery-tabs__pic').removeClass('open');
	});
});


 $(document).ready(function(){
                $('.galery-tabs__img').masonry({
                    itemSelector: '.galery-tabs__pic'
                });
            });




//FB
$(document).ready(function () {
	/*
	 *  Simple image gallery. Uses default settings
	 */
	$('.fancybox_a').fancybox();
	$('.fancybox_b').fancybox();
	
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






