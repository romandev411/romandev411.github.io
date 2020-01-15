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
    $(document).ready(function () {
    		jQuery("a").click(function() { 

var elementClick = jQuery(this).attr("href"); 
var destination = jQuery(elementClick).offset().top; 
jQuery("html, body").animate({ 
scrollTop: destination 
}, 500); 


return false; 


});
	

});
