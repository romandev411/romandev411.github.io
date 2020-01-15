function AjaxFormRequest(result_id, formMain, url) {
    jQuery.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: jQuery("#" + formMain).serialize(),
        success: function(response) {
            document.getElementById(result_id).innerHTML = response;
        },
        error: function(response) {
            document.getElementById(result_id).innerHTML = "<span>Возникла ошибка при отправке формы. Попробуйте еще раз</span>";
        }
    });

    $(':input', '#formMain')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
}
$(document).ready(function(){
	$('input[type="tel"]').mask('+79 (999) 999-99-99');
});
