$(document).ready(function() {

    //	LENG
    $('.leng-item').click(function() {
        $(this).closest('.leng-list__item').addClass('active').siblings().removeClass('active');
    });

    var leng = $('.leng-list__item.active .leng-item__text').text();

    $('.leng__active').text(leng);


    //	MAIN-BANNER
    $(".owl-carousel-1").slick({
        infinite: true,
        slidesToScroll: 1,
        centerMode: true,
        slidesToShow: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                infinite: true
            }
        }]
    });
    //	BRaND-SLIDER	
    $(".owl-carousel-2").slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 8,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: false,
                infinite: true
            }
        }]
    });

  
    //	ancor
    jQuery(".link-top").click(function() {
        var elementClick = jQuery(this).attr("href");
        var destination = jQuery(elementClick).offset().top;
        jQuery("html, body").animate({
            scrollTop: destination
        }, 300);


        return false;
    });

    //	MENU
    $('.header-page').on('click', '.open-menu-min', function() {
        $('.header-page').toggleClass('open-sub-menu');
        $('.header-page').removeClass('open-main-menu');
    });

    $('.header-page').on('click', '.open-menu-main', function() {
        $('.header-page').removeClass('open-sub-menu');
        $('.header-page').toggleClass('open-main-menu');
    });

    //	search
    $('.header-page').on('click', '.mobile-ico__search', function() {
        $('.header-page').removeClass('open-sub-menu');
        $('.header-page').toggleClass('open-search');
        $('.header-page').removeClass('open-main-menu');
    });

    $('.header-page').on('click', '.close-search', function() {
        $('.header-page').toggleClass('open-search');
    });

    //	footer
    $('.footer-page').on('click', '.h3-title', function() {
        $(this).closest('.foot-info-list__title').toggleClass('active');
    });
	
	
	

//	--------------CARD-PAGE--------------------
	
	//	product-card-SLIDER	
	$(".slick-slider-3").slick({
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 4,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				centerMode: false,
				infinite: true
			}
		}]
	});

    //	img
    $('.product-galery__pic').attr('src', $('.prod-slider__item:first-child  img').attr('src'));

    $('body').on('click', '.prod-slider__wp-img', function() {
        var src = $(this).find('img').attr('src');

        $('.product-galery__pic').attr('src', src);

    });
	

    //	counter card
    var counterCard = 1;
    $('.counter__item--plus').click(function() {
        counterCard = counterCard + 1;
        $('.counter__item-text').val(counterCard);
    });

    $('.counter__item--minus').click(function() {
		counterCard =   $('.counter__item-text').val();
        counterCard = counterCard - 1;
        $('.counter__item-text').val(counterCard);
		
		if( counterCard < 1 ){
			counterCard = 0;
			$('.counter__item-text').val(counterCard);
		}
    });

	$('body').on('change', '.counter__item-text', function(){
		counterCard =  + $('.counter__item-text').val();
		
		
	});


    //TAB	
    $(this).find('.tab-title').each(function(i) {
        $(this).click(function() {
            $(this).addClass('active').siblings().removeClass('active')
                .closest('.tab-wrap').find('.tab-desc').removeClass('active').eq(i).addClass('active');
        });
    });

    $(this).find('.main-desc-title__item').each(function(i) {
        $(this).click(function() {
            $(this).addClass('active').siblings().removeClass('active')
                .closest('.tab-wrap').find('.main-desc__item').removeClass('active').eq(i).addClass('active');
        });
    });
});