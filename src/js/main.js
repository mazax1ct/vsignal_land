//функция навешивания класса с тенью на шапку
var resize_scroll = function(e) {
  var offset = $(".slider");
  var header = $(".header");
  $(window).scrollTop() > offset.height()
    ? header.addClass("fixed")
    : header.removeClass("fixed");
};

$(document).ready(function () {
  //запуск функции навешивания класса с тенью на шапку
  resize_scroll();

  //слайдер "команда"
  if ($('.js-team-slider').length) {
    $('.js-team-slider').slick({
      focusOnSelect: true,
      centerMode: true,
      variableWidth: true,
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: false,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            focusOnSelect: true,
            edgeFriction: 0,
            centerMode: false,
            variableWidth: false,
            slidesToShow: 4,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-left"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-right"/></svg></button>',
            appendArrows: $('.team-slider-arrows'),
            appendDots: $('.team-slider-dots')
          }
        },
        {
          breakpoint: 767,
          settings: {
            focusOnSelect: true,
            edgeFriction: 0,
            centerMode: false,
            variableWidth: false,
            slidesToShow: 3,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-left"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-right"/></svg></button>',
            appendArrows: $('.team-slider-arrows'),
            appendDots: $('.team-slider-dots')
          }
        }
      ]
    });
  }

  //переключение активного слайда "команда"
  $('.team-slider__slide').click(function () {
    if($('body').width() > 767){
      $('.team-slider__slide').removeClass('slick-current');
      $(this).addClass('slick-current');
      return false;
    }
  });

  //слайдер картинок в кейсах
  if ($('.js-case-slider').length) {
    $('.js-case-slider').slick({
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
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-left"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-right"/></svg></button>',
            appendArrows: $('.case-slider-arrows'),
            appendDots: $('.case-slider-dots')
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
    $('body').toggleClass('overflow');
    $('.menu').toggleClass('is-open');
    return false;
  });

  //закрываем мобильное меню
  $('.js-menu-close').click(function () {
    $('body').toggleClass('overflow');
    $('.menu').toggleClass('is-open');
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
