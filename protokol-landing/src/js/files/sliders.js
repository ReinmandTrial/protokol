/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
// Полный набор стилей из scss/libs/swiper.scss
import '../../scss/libs/swiper.scss';
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
   // Перечень слайдеров
   // Проверяем, есть ли слайдер на стронице
   if (document.querySelector('.examples__slider')) {
      // Указываем скласс нужного слайдера
      // Создаем слайдер
      new Swiper('.examples__slider', {
         // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 50,
         autoHeight: true,
         speed: 800,
         //touchRatio: 0,
         simulateTouch: false,
         //loop: true,
         // preloadImages: false,
         //lazy: true,

         // Кнопки "влево/вправо"
         navigation: {
            prevEl: '.examples__slider-button-prev',
            nextEl: '.examples__slider-button-next',
         },

         // Брейкпоинты
         /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},


			},
			*/
         // События
         on: {},
      });
   }
   if (document.querySelector('.documents__slider')) {
      // Указываем скласс нужного слайдера
      // Создаем слайдер
      const docSLider = new Swiper('.documents__slider', {
         // Указываем скласс нужного слайдера
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination],
         observer: true,
         observeParents: true,
         spaceBetween: 15,
         autoHeight: true,
         speed: 800,
         //touchRatio: 0,
         simulateTouch: false,
         // freeMode: true,
         //loop: true,
         // preloadImages: false,
         // lazy: true,
         centeredSlides: true,

         pagination: {
            el: '.documents__slider-progressbar',
            type: 'progressbar',
         },

         // Брейкпоинты

         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: -90,
            },
            350: {
               slidesPerView: 1,
               spaceBetween: -130,
            },
            400: {
               slidesPerView: 1,
               spaceBetween: -160,
            },
            500: {
               slidesPerView: 2,
               spaceBetween: 0,
            },
            730: {
               slidesPerView: 3,
               spaceBetween: 20,
            },
         },

         // События
         on: {},
      });
      const docTotalSlides = document.querySelector('.documents__slider-total');
      const docCurSlides = document.querySelector('.documents__slider-current');
      docTotalSlides.innerHTML = docSLider.slides.length;
      docSLider.on('slideChange', () => {
         const curSlide = ++docSLider.realIndex;
         docCurSlides.innerHTML = curSlide;
      });
   }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false,
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}

window.addEventListener('load', function (e) {
   // Запуск инициализации слайдеров
   initSliders();
   // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
   //initSlidersScroll();
});
