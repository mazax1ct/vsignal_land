// Укажите путь к папке со скриптом, по умолчанию корень сайта
var path = '';

$(document).on("submit", "#form", function() {
  var _this = $(this);

  var errors = 0;
  $(".error").removeClass("error");

  var userName = $("#user_name");
  if ($(userName).val().length < 1) {
    $(userName).addClass("error");
    errors++;
  }

  var userPhone = $("#user_phone");
  if ($(userPhone).val().length < 1) {
    $(userPhone).addClass("error");
    errors++;
  }

  var userComment = $("#user_comment");
  if ($(userComment).val().length < 1) {
    $(userComment).addClass("error");
    errors++;
  }

  var terms = $("#terms");
  if ($(terms).not(':checked').length) {
    $(terms).addClass("error");
    errors++;
  }

  if (errors > 0) {
    return false;
  }

  $.post(path + "/forms_send/send.php", {
    name: $(userName).val(),
    phone: $(userPhone).val(),
    comment: $(userComment).val()
  }, function(i) {
    $('#popup-inner').html();
    $('body').addClass('overflow');
    $('.popup-shade').fadeIn();
    $('#popup-inner').html(i.message);
    $(userName).val('');
    $(userPhone).val('');
    $(userComment).val('');
  }, 'json');
  return false;
});

$(document).on("submit", "#form_2", function() {
  var _this = $(this);

  var errors = 0;
  $(".error").removeClass("error");

  var userName = $("#name_");
  if ($(userName).val().length < 1) {
    $(userName).addClass("error");
    errors++;
  }

  var userPhone = $("#phone_");
  if ($(userPhone).val().length < 1) {
    $(userPhone).addClass("error");
    errors++;
  }

  if (errors > 0) {
    return false;
  }

  $.post(path + "/forms_send/send2.php", {
    name_: $(userName).val(),
    phone_: $(userPhone).val()
  }, function(i) {
    $('#popup-inner').html();
    $('body').addClass('overflow');
    $('.popup-shade').fadeIn();
    $('#popup-inner').html(i.message);
  }, 'json');
  return false;
});

//открываем попап
$('.js-popup').click(function() {
  $.get(path + '/forms_send/form.php', function(html) {
    $('#popup-inner').html(html);
    $('body').addClass('overflow');
    $('.popup-shade').fadeIn();
    $(".js-phone-mask").inputmask("+7(999)999-99-99", {
      "clearIncomplete": true,
      showMaskOnHover: false
    });
  });
  return false;
});

// Add close popup on "Esc" key
$(document).keyup(function(a) {
  if (a.keyCode == 27) {
    $('.popup-shade').fadeOut('300', function() {
      if (!$('.menu').is(':visible')) {
        $('body').removeClass('overflow');
      }
    });
  }
});
