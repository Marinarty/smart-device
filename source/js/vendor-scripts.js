$('a[href^="#contact-form"], a[href^="#advantages"]').click(function () {
  var target = $(this).attr('href');
  $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
  return false;
});

$(document).ready(function() {
  $("#phone,#contact-form-phone",).mask("+7 (999) 99-99-999");
});
