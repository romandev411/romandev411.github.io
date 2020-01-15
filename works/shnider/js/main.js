jQuery(document).ready(function ($) {
	$('.timer-1').dsCountDown({
		endDate: new Date("December 24, 2017 23:59:00")
	});
	
	 $.fn.equivalent = function() {
        var $blocks = $(this),
        maxH = $blocks.eq(0).height();
        $blocks.each(function() {
            maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
        });

        $blocks.height(maxH);
    }

    $('.table-services__item>*>*:nth-child(1)').equivalent();
    $('.table-services__item>*>*:nth-child(2)').equivalent();
    $('.table-services__item>*>*:nth-child(3)').equivalent();
    $('.table-services__item>*>*:nth-child(4)').equivalent();
    $('.table-services__item>*>*:nth-child(5)').equivalent();
    $('.table-services__item>*>*:nth-child(6)').equivalent();
    $('.table-services__item>*>*:nth-child(7)').equivalent();
    $('.table-services__item>*>*:nth-child(8)').equivalent();
    $('.table-services__item>*>*:nth-child(9)').equivalent();
    $('.table-services__item>*>*:nth-child(10)').equivalent();
    $('.table-services__item>*>*:nth-child(11)').equivalent();
    $('.table-services__item>*>*:nth-child(12)').equivalent();
    $('.table-services__item>*>*:nth-child(13)').equivalent();
    $('.table-services__item>*>*:nth-child(14)').equivalent();
    $('.table-services__item>*>*:nth-child(15)').equivalent();
    $('.table-services__item>*>*:nth-child(16)').equivalent();
    $('.table-services__item>*>*:nth-child(17)').equivalent();
    $('.table-services__item>*>*:nth-child(18)').equivalent();
    $('.table-services__item>*>*:nth-child(19)').equivalent();
    $('.table-services__item>*>*:nth-child(20)').equivalent();
    $('.table-services__item>*>*:nth-child(21)').equivalent();
    $('.table-services__item>*>*:nth-child(21)').equivalent();
    $('.table-services__item>*>*:nth-child(22)').equivalent();
    $('.table-services__item>*>*:nth-child(23)').equivalent();
    $('.table-services__item>*>*:nth-child(24)').equivalent();
    
    $("#reviews-slider").owlCarousel({
        navigation : true,
        items : 3
    });
	
	$('.nav-header__item').hover(function(){
		$(this).find('.nav-header__submenu-list').slideToggle(300);
	});
	
	$('.burger').click(function(){
		$('.header-page__nav').slideToggle(300);
	});
	
	
	
	
		$(this).find('.tabs-blog__item').each(function (i) {
  		$(this).click(function () {
  			$(this).addClass('active').siblings().removeClass('active')
  				.closest('.tabs-blog').find('.tabs-blog__content').removeClass('active').eq(i).addClass('active');
  		});
  	});
});
















