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
};

var apiFullPage;

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
      var indexForNormalScroll = 2;

      var apiFullPage = new fullpage('#fullpage', {
        menu: "#slider_menu",
        lockAnchors: true,
        scrollBar: true,
        fitToSection: false,


        afterLoad: function(origin, destination, direction) {
          if (destination.index === indexForNormalScroll) {
            $('html').toggleClass('fp-scroll-free');
            fullpage_api.setAutoScrolling(false);
          }
        },
      });

      window.addEventListener('scroll', scrollHandler);

      function scrollHandler() {
        var normalSection = document.querySelectorAll(".section")[indexForNormalScroll];
        var offset = normalSection.offsetTop;

        if (getScrollTop() < offset && !fullpage_api.getFullpageData().autoScrolling) {
          $('html').toggleClass('fp-scroll-free');
          fullpage_api.setAutoScrolling(true);
        } else if (getScrollTop() > offset && fullpage_api.getFullpageData().autoScrolling) {
          $('html').toggleClass('fp-scroll-free');
          fullpage_api.setAutoScrolling(false);
        }
      }

      function getScrollTop() {
        var doc = document.documentElement;
        return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      }
    }
  }

  //переключение слайда в главном баннере
  $('.js-slide').click(function () {
    var href = $(this).attr('href');
    console.log(href);
    apiFullPage.moveTo(href);
  });

  //переключение слайда в главном баннере вверх
  $('.js-slide-up').click(function () {
    apiFullPage.moveSectionUp();
  });

  //переключение слайда в главном баннере вниз
  $('.js-slide-down').click(function () {
    apiFullPage.moveSectionDown();
  });

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
    if($('body').width() > 1199) {
      apiFullPage.setAllowScrolling(false);
    }
    $('body').toggleClass('overflow');
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
          $('body').toggleClass('overflow');
          if($('body').width() > 1199) {
            apiFullPage.setAllowScrolling(true);
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

    $('.menu__inner').animate({
        left: "-100%"
      }, 400, function() {
        $('.menu').fadeOut('300', function () {
          if($('body').width() > 1199) {
            apiFullPage.setAllowScrolling(true);
          }
          $('body').toggleClass('overflow');
          $('body,html').animate({
            scrollTop: top
          }, 500, 'linear');
        });
    });
	});

  //скролл наверх по клику на лого
  $('.logo').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500, 'linear');
    return false;
  });

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
});

//перезапуск функции навешивания класса с тенью на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);
