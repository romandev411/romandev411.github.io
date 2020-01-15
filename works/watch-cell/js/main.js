$(document).ready(function () {
	//LENG
	$('.leng').click(function () {
		$('.leng').toggleClass('active');
	});

	$('.leng__item--ru').click(function () {
		$('.leng__item--ru').addClass('active');
		$('.leng__item--en').removeClass('active');
	});

	$('.leng__item--en').click(function () {
		$('.leng__item--en').addClass('active');
		$('.leng__item--ru').removeClass('active');
	});
	//MENU 
	$('.open-menu').click(function () {
		$('.header-main__menu').toggleClass('active');
	});

	//SLIDER
	$(".slider").slick({
		infinite: true,
		slidesToScroll: 1,
		centerMode: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					infinite: true
				}
    }
	]
	});
	
	$(".product-pic").slick({
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 5
	});
//	FIXFORMTOP
		jQuery(window).scroll(function () {
			if (jQuery(window).scrollTop() >= 700) {
				jQuery('.header-page__form-wrap, .footer, .close-fix-form').addClass('fixed');
			} else jQuery('.header-page__form-wrap, .footer, .close-fix-form').removeClass('fixed');
		});

		jQuery(window).scroll(function () {
			if (jQuery(window).scrollTop() >= 701) {
				jQuery('.header-page__form-wrap').addClass('fixed-top');
			} else jQuery('.header-page__form-wrap').removeClass('fixed-top');
		});
   
	$('.close-fix-form').click(function () {
		$('.header-page__form-wrap, .footer, .empty-form').addClass('static');
	});

//IMGPRODUCT	
	$(document).on('click', '.product-pic__img>img', function(){
		$('.prod-galery__main-img > img').attr('src', $(this).attr('src'));
	});
	
//TAB	
	$(this).find('.tabs-title-list__item').each(function (i) {
  		$(this).click(function () {
  			$(this).addClass('active').siblings().removeClass('active')
  				.closest('.tabs-desc-wrap').find('.tabs-desc__item').removeClass('active').eq(i).addClass('active');
  		});
  	});


//FAQ
	$('.description-acord__title').click(function(){
		var block = $(this).closest('.faq-description__item');
		var btn = $(this);
		var submenu = $(block).find('.description-acord__text');
		
		if($(block).hasClass('active')){
			$(block).removeClass('active');
			$(submenu).slideUp(300);
		}
		else{
			$(block).addClass('active');
			$(submenu).slideDown(300);
		}
	  });
});



