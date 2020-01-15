jQuery(document).ready(function() {


    jQuery("a").click(function() {

        var elementClick = jQuery(this).attr("href");
        var destination = jQuery(elementClick).offset().top;
        jQuery("html, body").animate({
            scrollTop: destination
        }, 500);


        return false;


    });
    
    
//---<<modal

        $(".phone_modal, .modal").click(function(){
            $('.pop').addClass('roma')
        });
        $(".pop_off").click(function(){
            $('.pop').removeClass('roma')
        });
//---^^modal
    
//    ---menu<<
    $(".burger").click(function(){
        $('.burger').toggleClass('d_block')
    });
    $(".header ~ *").click(function(){
        $('.burger').removeClass('d_block')
    });
    
//    ---menu^^
    });
