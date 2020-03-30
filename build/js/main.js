var currentSlideSlick;
//функция навешивания класса с тенью на шапку
var resize_scroll = function(e) {

  var offset = $(".slider");
  var header = $(".header");
  $(window).scrollTop() > offset.height()
    ? header.addClass("fixed")
    : header.removeClass("fixed");

  $(window).scrollTop() > offset.height() - header.height()*2
    ? header.addClass("fixed2")
    : header.removeClass("fixed2");

  if($(window).scrollTop() == 0 && $('body').width() >= 1199)  {
    $('body').addClass('overflow');
    if (currentSlideSlick != undefined) {
      currentSlideSlick.slick('setPosition');
    }

    $('.js-slider').bind('mousewheel DOMMouseScroll', slider_scroll);
  }
};

var slider_scroll = function (event) {
  if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    $('.js-slider').slick('slickPrev');
  } else {
    $('.js-slider').slick('slickNext');
  }
}

$(document).ready(function () {
  //запуск функции навешивания класса с тенью на шапку
  resize_scroll();

  //главный баннер
  if ($('.js-slider').length) {
    if($('body').width() < 1199) {
      $('.js-slider').slick({
        auto: false,
        mobileFirst: true,
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        dots: true
      });
    } else {

      if($(window).scrollTop() == 0) {
        $('body').addClass('overflow');
      }

      currentSlideSlick = $('.js-slider').slick({
        fade: true,
        auto: false,
        mobileFirst: true,
        slidesToShow: 1,
        infinite: false,
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-up"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#slider-down"/></svg></button>',
        appendArrows: $('.slider-arrows'),
        appendDots: $('.slider-dots')
      });

      $('.js-slider').slick('slickAdd',"<div class='prostavka'></div>");

      $('.js-slider').bind('mousewheel DOMMouseScroll', slider_scroll);

      $('.js-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        if(nextSlide + 1 == slick.slideCount) {
          $('body').removeClass('overflow');
          $('.js-slider').unbind('mousewheel DOMMouseScroll');
          var sH = $('.slider').height() + 1;
          var lastSlide = slick.slideCount-1
          $('body,html').animate({
            scrollTop: sH
          }, 600, function () {
            $('.js-slider').slick('slickGoTo', '0');
          });
        }
      });
    }
  }

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
    $('.js-case-slider').each(function (index) {
      $('.js-case-slider').eq(index).slick({
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
              appendArrows: $(this).next('.case-slider-nav').find('.case-slider-arrows'),
              appendDots: $(this).next('.case-slider-nav').find('.case-slider-dots')
            }
          }
        ]
      });
    });
    /*$('.js-case-slider').slick({
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
            appendArrows: $(this).next('.case-slider-nav').find('.case-slider-arrows'),
            appendDots: $(this).next('.case-slider-nav').find('.case-slider-dots')
          }
        }
      ]
    });*/
  }
});

//перезапуск функции навешивания класса с тенью на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);
