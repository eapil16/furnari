'use strict';

document.addEventListener('DOMContentLoaded', () => {

	$('.menu-toggle-cont').click(function (e) {
   e.preventDefault();
    if (!$(this).hasClass('menu-toggle-cont_active')) { 
      $(this).addClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideDown(300); 
      $('body').addClass('hidd'); 
    } else { 
      $(this).removeClass('menu-toggle-cont_active'); 
      $('.fixed-menu').slideUp(300);
      $('body').removeClass('hidd');
    } 
  }); 

	const swipermain = new Swiper(".main-slider", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 800,
    pagination: {
      el: ".main-slider-pagination",
      clickable: true,
    },
  });

  const swiperbrands = new Swiper(".brands-slider", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    speed: 800,
    pagination: {
      el: ".brands-slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".brands-slider-next",
      prevEl: ".brands-slider-prev",
    },
  });

  const swipernews = new Swiper(".news-slider", {
    loop: true,
    spaceBetween: 14,
    speed: 800,
    slidesPerView: 3,
    pagination: {
      el: ".main-news-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-news-next",
      prevEl: ".main-news-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
        slidesPerView: 'auto',
      },
    }
  });

  document.querySelector('body').addEventListener('click', e => {
    if (e.target.closest('.mobile-menu-button')) {
      const targetBlock = e.target.closest('.main-menu__item').querySelector('.main-menu__dropdown')
      const targeLink = e.target.closest('.main-menu__item')

      const coll = document.querySelectorAll('.main-menu__dropdown');
      coll.forEach(element => {if(element!=targetBlock) {element.classList.remove('show')}});
      const collLink = document.querySelectorAll('.main-menu__item');
      collLink.forEach(element => {if(element!=targeLink) {element.classList.remove('active')}});
      e.target.closest('.main-menu__item').classList.toggle('active');
      e.target.closest('.main-menu__item_dropdown').querySelector('.main-menu__dropdown').classList.toggle('show');
    }
    if (e.target.closest('.mobile-menu-button_sub')) {
      const targetBlock = e.target.closest('.main-menu__dropdown__item').querySelector('.main-menu__submenu')
      const targeLink = e.target.closest('.main-menu__dropdown__item')
      
      const coll = document.querySelectorAll('.main-menu__dropdown__item');
      coll.forEach(element => {if(element!=targeLink) {element.classList.remove('active')}});
      const collLink = document.querySelectorAll('.main-menu__submenu');
      collLink.forEach(element => {if(element!=targetBlock) {element.classList.remove('show')}});
      e.target.closest('.main-menu__dropdown__item').classList.toggle('active');
      e.target.closest('.main-menu__dropdown__item').querySelector('.main-menu__submenu').classList.toggle('show');
    }
    if (e.target.closest('.filter-item__button')) {
      e.preventDefault();
      const blocks = document.querySelectorAll('.filter-item__dropdown');
      blocks.forEach(el=> el.classList.remove('show'));
      const buttons = document.querySelectorAll('.filter-item__button');
      buttons.forEach(el=> el.classList.remove('active'));

      e.target.closest('.filter-item').querySelector('.filter-item__dropdown').classList.add('show');
      e.target.closest('.filter-item__button').classList.add('active');
    }
    if (!e.target.closest('.filter-item__button') && !e.target.closest('.filter-item__dropdown')) {
      const blocks = document.querySelectorAll('.filter-item__dropdown');
      blocks.forEach(el=> el.classList.remove('show'));
      const buttons = document.querySelectorAll('.filter-item__button');
      buttons.forEach(el=> el.classList.remove('active'));
    }
    if (e.target.closest('.button-filter')) {
      e.target.closest('.filter-item').querySelector('.filter-item__dropdown').classList.remove('show');
      e.target.closest('.filter-item').querySelector('.filter-item__button').classList.remove('active');
    }
    if (e.target.closest('.order-block__caption')) {
      const block = document.querySelectorAll('.order-block');
      block.forEach(el => el.classList.remove('active'));
      e.target.closest('.order-block').classList.toggle('active');
    }
    if (e.target.closest('.button-order')) {
      let ind;
      const block = document.querySelectorAll('.order-block');
      const target = e.target.closest('.order-block').getAttribute('data').slice(-1);
      block.forEach((el, index) => {
        el.classList.remove('active')
        
        if (index == target) {
          ind = index + 1;
        }
      });

      block.forEach((el, index)=> {
        if (index === ind) {
          el.classList.add('active');
        }
      })
    }
    if (e.target.closest('.header-button-search')) {
      e.preventDefault();
      document.querySelector('.search-dropdown').classList.toggle('show');
      document.querySelector('body').classList.toggle('search-hidden');
    }
    if (e.target.closest('.search-dropdown__close')) {
      e.preventDefault();
      document.querySelector('.search-dropdown').classList.remove('show');
      document.querySelector('body').classList.remove('search-hidden');
    }
    if (!e.target.closest('.header-button-search') && (!e.target.closest('.search-dropdown'))) { 
      document.querySelector('.search-dropdown').classList.remove('show');
      document.querySelector('body').classList.remove('search-hidden');
    }
    if (!e.target.closest('.menu-toggle-cont') && (!e.target.closest('.fixed-menu'))) { 
      if ( window.innerWidth < 992 ) {
        $('.menu-toggle-cont').removeClass('menu-toggle-cont_active'); 
        $('.fixed-menu').slideUp(300);
        $('body').removeClass('hidd');
      }
    }
  });

  setTimeout(function() {
    $('select').styler();
  }, 100)

  $('.catalog-item__favorites').click(function (e) {
    $(this).toggleClass('active'); 
  });

  $('.catalog-caption__filter_button').click(function (e) {
    $('.catalog-caption__filter_mobile').toggleClass('active'); 
  });

  $('.catalog-caption__filter_mobile_close').click(function (e) {
    $('.catalog-caption__filter_mobile').toggleClass('active'); 
  });

  
  $('.show-basket').click(function (e) {
    $(this).toggleClass('active'); 
    $('.basket-small_drop').slideToggle(); 
  });

  jQuery(function($){
    $(".phone").mask("+7 (999) 999 - 99 - 99");
  });
   
  $('[data-role=toggle-block]').each(function() {
		var $block = $(this);
		$block.on('click.toggle', '[data-role=toggle-btn]', function() {
			var $btn = $(this);
			var $data = $block.find('[data-role=toggle-data]');

			// toggle $btn
			$btn.toggleClass('shown');
			// show/hide $data
			$data.slideToggle(200);
		});
	});

  $(document).on('click', '.btn.decrease', function(){
    const $field = $(this).siblings('input');
    $field.val(parseInt($field.val()) + 1);
    $field.trigger('change');
})

$(document).on('click', '.btn.increase', function(){
    const $field = $(this).siblings('input');
    if ($field.val() - 1 >= 1) {
        $field.val($field.val() - 1);
    }
    $field.trigger('change');
})

  const swiperbasket = new Swiper(".basket-slider", {
    allowTouchMove: true,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 9,
    speed: 800,
    navigation: {
      nextEl: ".basket-slider-next ",
      prevEl: ".basket-slider-prev",
    },
    pagination: {
      el: ".basket-slider-pagination",
      clickable: true,
    },
    breakpoints: {
        1400: {
          slidesPerView: 4,
          spaceBetween: 11,
        },
        1200: {
          slidesPerView: 3,
        }
    }
  });

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    }
  });

  const swiperOther = new Swiper(".other-slider", {
    allowTouchMove: true,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 9,
    speed: 800,
    navigation: {
      nextEl: ".other-slider-next ",
      prevEl: ".other-slider-prev",
    },
    pagination: {
      el: ".other-slider-pagination",
      clickable: true,
    },
    breakpoints: {
        1400: {
          slidesPerView: 4,
          spaceBetween: 11,
        },
        992: {
          slidesPerView: 3,
        }
    }
  });

  const swiperViewed = new Swiper(".viewed-slider", {
    allowTouchMove: true,
    slidesPerView: 2,
    loop: true,
    spaceBetween: 9,
    speed: 800,
    navigation: {
      nextEl: ".viewed-slider-next ",
      prevEl: ".viewed-slider-prev",
    },
    pagination: {
      el: ".viewed-slider-pagination",
      clickable: true,
    },
    breakpoints: {
        1400: {
          slidesPerView: 4,
          spaceBetween: 11,
        },
        992: {
          slidesPerView: 3,
        }
    }
  });

  const swiperpopular = new Swiper(".popular-swiper", {
    loop: true,
    spaceBetween: 14,
    speed: 800,
    slidesPerView: 1,
    pagination: {
      el: ".popular-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".popular-next",
      prevEl: ".popular-prev",
    },
    breakpoints: {
      1400: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
    }
  });

  const swiperviewed = new Swiper(".viewed-swiper", {
    loop: true,
    spaceBetween: 14,
    speed: 800,
    slidesPerView: 1,
    pagination: {
      el: ".viewed-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".viewed-next",
      prevEl: ".viewed-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 2,
      },
    }
  });

  const swiperpopularmobile = new Swiper(".popular-mobile", {
    loop: true,
    spaceBetween: 14,
    speed: 800,
    slidesPerView: 2,
    pagination: {
      el: ".popular-mobile-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".popular-mobile-next",
      prevEl: ".popular-mobile-prev",
    },
  });
  
  const swiperproductmobile = new Swiper(".product-mobile", {
    loop: true,
    spaceBetween: 14,
    speed: 800,
    slidesPerView: 2,
    pagination: {
      el: ".product-mobile-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".product-mobile-next",
      prevEl: ".product-mobile-prev",
    },
  });

  const swiperresult = new Swiper(".result-swiper", {
    loop: false,
    spaceBetween: 14,
    speed: 800,
    slidesPerView: 2,
    pagination: {
      el: ".result-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".result-next",
      prevEl: ".result-prev",
    },
    breakpoints: {
      1400: {
        spaceBetween: 20,
        slidesPerView: 5,
      },
      1200: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
    }
  });

});
