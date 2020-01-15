$(document).ready(function(){
  $('.step-btn:not(".submit")').click(function() { 
    $('.form-sect__desc').addClass('active');
    $('.radio-message').removeClass('active');
    
    $(this).closest('.form-steps__step').removeClass('active').next().addClass('active');
    
    var color = $(this).closest('.form-steps__step').attr('data-color');
    var nextColor = $(this).closest('.form-steps__step').next().attr('data-color');
    $(this).closest('.form-sect').removeClass(color).addClass(nextColor);
  });
  
  $('.radio-sect  .input-check').click(function() { 
    var percent = $(this).attr('data-percent');
    var count = $(this).attr('data-count');
    
    $('.radio-message').addClass('active');
    
    $('.radio-message__percent').text(percent);
    $('.radio-message__count').text(count);
  });
  
  $('.radio-sect .input-check').click(function() {
    $(this).closest('.form-steps__step').find('.step-btn').addClass('active');
  });
  
//  valid
  $(function() {
    $('.required').change(function() {
      $(this).val( $(this).val().trim());
    });

    $('.form-item').each(function () {
      var form = $(this);
      var btn = form.find('.step-btn.submit');

      function valInput() {
        form.find('.text.required').each(function() {
          if ( $(this).val().length < 2 ) {
            $(this).addClass('no-valid');
            $(this).val('');
          }else {
            $(this).removeClass('no-valid');
          }
        });
      }
      
      function valPass() {
        form.find('.password.required').each(function() {
          if ( $(this).val().length < 4 ) {
            $(this).addClass('no-valid');
            $(this).val('');
          }else {
            $(this).removeClass('no-valid');
          }
        });
      }
      
      function valEmail() {
        form.find('.email.required').each(function() {
          if ( ($(this).val().match(/.+?\@.+/g) || []).length !== 1 ) {
            $(this).addClass('no-valid');
            $(this).val('');
          }else {
            $(this).removeClass('no-valid');
          }
        });
      }

      function valCheck() {
        form.find('.checkbox.required').each(function() {
          if ( $(this).prop('checked') ) {
            $(this).removeClass('no-valid');
          }else {
            $(this).addClass('no-valid');
          }
        });
      }

      function valRadio() {
        form.find('.radio.required').each(function() {
          if ( $(this).closest('.form-item').find('.radio.required:checked').length > 0 ) {
            $(this).removeClass('no-valid');
          }else {
            $(this).addClass('no-valid');
          }
        });
      }
      
      $('.required').focus(function() {
        $(this).removeClass('no-valid');
      });

      $(btn).click(function() {
        valInput();
        valCheck();
        valRadio();
        valPass();
        valEmail();
        var emptyInput = $(this).closest('.form-item').find('.no-valid').length;

        if ( emptyInput == 0 ) {
          $(this).addClass('active');
          alert( 'valid' );
        }else{
          $(this).removeClass('active');
        }
      });
    });
  });
});




