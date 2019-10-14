//функция навешивания класса с тенью на шапку
var resize_scroll = function(e) {
  var h = $(".header");
  $(window).scrollTop() > h.height()
    ? h.addClass("scrolled")
    : h.removeClass("scrolled");
};

$(document).ready(function () {
  //запуск функции навешивания класса с тенью на шапку
  resize_scroll();

  //слайдер картинок
  if ($('.js-main-slider').length) {
    $('.js-main-slider').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      appendArrows: $('.main-slider-nav'),
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#main-slider-prev"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#main-slider-next"/></svg></button>',
      dots: true,
      responsive: [
        {
          breakpoint: 1349,
          settings: {
            arrows: true
          }
        }
      ]
    });
  }

  //слайдер картинок
  if ($('.js-slider').length) {
    $('.js-slider').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-arrow-left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-arrow-right"/></svg></button>',
      dots: true,
      responsive: [
        {
          breakpoint: 849,
          settings: {
            dots: false,
            arrows: true
          }
        }
      ]
    });
  }

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
    $(this).toggleClass('is-active');
    $('.header').toggleClass('header--menu_open');
    $('body').toggleClass('overflow');
    $('.menu-block').toggleClass('is-open');
    return false;
  });

  //попап
  $('[data-fancybox]').fancybox({
    smallBtn: false,
    toolbar: false
  });
});

//перезапуск функции навешивания класса с тенью на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);
