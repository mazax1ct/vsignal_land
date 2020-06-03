$(document).ready(function () {
  //проверка на пустоту поля ввода при загрузке страницы
  $('.js-input').each(function() {
    if($(this).val()) {
      $(this).parent('.input-label').addClass('filled');
    }
  });

  //проверка на пустоту поля ввода
  $('.js-input').blur(function () {
    if($(this).val()) {
      $(this).parent('.input-label').addClass('filled');
    } else {
      $(this).parent('.input-label').removeClass('filled');
    }
  });

  //открваем мобильное меню
  $('.js-menu-open').click(function () {
    $('body').addClass('overflow');

    $('.menu').fadeIn('300', function () {
      $('.menu__inner').animate({
          left: "0"
        }, 400
      );
    });
    return false;
  });

  //закрываем мобильное меню
  $('.js-menu-close').click(function () {
    $('.menu__inner').animate({
        left: "-100%"
      }, 400, function() {
        $('.menu').fadeOut('300', function () {
          if (!$('body').hasClass('inner-page')) {
            if($('body').width() < 1200) {
              $('body').removeClass('overflow');
            } else if ($('body').width() >= 1200 && $(window).scrollTop() == 0) {
              $('body').addClass('overflow');
            } else {
              $('body').removeClass('overflow');
            }
          } else {
            $('body').removeClass('overflow');
          }
        });
    });
    return false;
  });

  //навигация по ссылкам меню
  $(".menu-list").on("click", "a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;

    $('.js-slider').unbind('mousewheel DOMMouseScroll');

    $('.menu__inner').animate({
        left: "-100%"
      }, 400, function() {
        $('.menu').fadeOut('300', function () {
          $('body').removeClass('overflow');
          $('body,html').animate({
            scrollTop: top
          }, 500, 'linear');
        });
    });
  });

  //скролл наверх по клику на лого
  /*$('.logo').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500, 'linear');
    return false;
  });*/

  //открываем попап
  $('.js-popup').click(function () {
    $('body').addClass('overflow');
    $('.popup-shade').fadeIn();
    return false;
  });

  //закрываем попап
  $('.js-popup-close').click(function () {
    $('.popup-shade').fadeOut('300', function () {
      if(!$('.menu').is(':visible')){
        $('body').removeClass('overflow');
      }
    });
    return false;
  });

  if ($('.js-cases-slider2').length) {
    $('.js-cases-slider2').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
  }
});
