//SWIPER HEAD list-of-judgments========================================================================================================================================================

new Swiper('.list-of-judgments__slider', {
   navigation: {
      nextEl: '.list-of-judgments__arrow-next',
      prevEl: '.list-of-judgments__arrow-prew',
   },
   pagination: {
      el: '.pag-el',
      type: 'fraction',
   },

   speed: 700,
   centeredSlides: true,

   loop: true,
   loopedSlides: 4,

   effect: 'coverflow',
   slidesPerView: 1,
   centeredSlides: true,
   coverflowEffect: {
      speed: 4000,
      rotate: 0,
      stretch: 40,
      depth: 142,
      modifier: 5,
      slideShadows: false,
   },
   breakpoints: {
      320: {
         effect: 'slide',
         spaceBetween: 50,
      },
      767: {
         loopedSlides: 0,
         effect: 'slide',
         spaceBetween: 50,
      },
      991: {
         spaceBetween: -700,
      },
      1200: {
         spaceBetween: -1000,
      },
   },
});

//Filter========================================================================================================================================================

//Filter open start========================================================================================================================================================

const ARR_CLASS = 'solution-filter__list-arr';
const LIST_SELECTOR = '.solution-filter__type-list';
const CLOSING_CLASS = 'closed-filter';

const typeListArr = document.querySelectorAll('.solution-filter__list-arr');

typeListArr.forEach((arr) => {
   arr.addEventListener('click', onClickArrEl);
});

function onClickArrEl(el) {
   if (el.target.closest('.' + ARR_CLASS).classList.contains(ARR_CLASS)) {
      el.target.closest(LIST_SELECTOR).classList.toggle(CLOSING_CLASS);
   }
}
//Filter open end========================================================================================================================================================

//FILTER MOBILE========================================================================================================================================================

const mobTitleEl = document.querySelector('.list-of-judgments__filter_mobile');
const mainContentEl = document.querySelector('.judg-main-content__resolution-list');

mobTitleEl.addEventListener('click', (e) => {
   if (e.target.classList.contains('solution-filter__title')) {
      mobTitleEl.classList.toggle('close-mobile');
      mainContentEl.classList.toggle('reload');
   }
});

mainContentEl.addEventListener('click', (e) => {
   if (e.target.classList.contains('judg-main-content__resolution-list')) {
      mainContentEl.classList.remove('reload');
      mobTitleEl.classList.add('close-mobile');
   }
});

//FILTER MOBILE========================================================================================================================================================

//Filter checkbox start========================================================================================================================================================

const TEMP_INPUT = document.getElementById('tempFilterItem').innerHTML;
const CLASS_ACTIVE = 'active';

const inputListEl = document.querySelectorAll('.solution-filter__input');
const filterInfoListEl = document.querySelector('.filter-info__list');
const resetItem = document.querySelector('.filter-info__reset');

let arrCheckedInp = [];

inputListEl.forEach((inp) => inp.addEventListener('click', onClickInput));
resetItem.addEventListener('click', onClickResetBtn);
filterInfoListEl.addEventListener('click', onClickDeleteEl);

function onClickInput(e) {
   addCheck(e);
   deleteCheck(e);
   renderList();
}

function onClickResetBtn() {
   resetAll();
   renderList();
}

function onClickDeleteEl(e) {
   deleteItem(e);
   renderList();
}

function addCheck(e) {
   if (e.target.checked) {
      arrCheckedInp.push(e.target);
   }
}

function deleteCheck(e) {
   if (!e.target.checked) {
      const currentName = e.target.name;
      arrCheckedInp = arrCheckedInp.filter((inp) => inp.name !== currentName);
   }
}

function resetAll() {
   inputListEl.forEach((inp) => (inp.checked = false));
   arrCheckedInp = [];
}
function renderList() {
   const newHtml = createdHtml();
   filterInfoListEl.innerHTML = newHtml;
   conditionResetBtn();
}

function createdHtml() {
   return arrCheckedInp.map(interpolation).join('');
}

function interpolation(inp) {
   return TEMP_INPUT.replace('{{name}}', inp.name);
}

function deleteItem(e) {
   const itemText = e.target.textContent;
   arrCheckedInp = arrCheckedInp.filter((inp) => inp.name !== itemText);
   inputListEl.forEach((inp) => {
      if (inp.name === itemText) {
         inp.checked = false;
      }
   });
}

function conditionResetBtn() {
   if (arrCheckedInp.length > 0) {
      resetItem.classList.add(CLASS_ACTIVE);
   } else {
      resetItem.classList.remove(CLASS_ACTIVE);
   }
}

//Filter checkbox end========================================================================================================================================================

//SWIPER ASIDE ========================================================================================================================================================

new Swiper('.slider-news__container', {
   navigation: {
      nextEl: '.slider-news__next',
      prevEl: '.slider-news__prev',
   },
   loop: true,
   spaceBetween: 30,
   effect: 'cube',
});

//JUDG TABS========================================================================================================================================================

const ACTIVE_TABS_CLASS = 'active';
const tabsTitleListEL = document.querySelectorAll('.jurisdiction-tabs__title');
const tabsBodyListEL = document.querySelectorAll('.jurisdiction-tabs__body');

tabsTitleListEL.forEach((titleTab) => titleTab.addEventListener('click', onClickTitleEl));

function onClickTitleEl(e) {
   const titleTab = e.target;
   const curentBodyTab = document.querySelector(titleTab.dataset.tab);

   if (!titleTab.classList.contains(ACTIVE_TABS_CLASS)) {
      tabsTitleListEL.forEach((el) => el.classList.remove(ACTIVE_TABS_CLASS));
      titleTab.classList.add(ACTIVE_TABS_CLASS);

      tabsBodyListEL.forEach((el) => el.classList.remove(ACTIVE_TABS_CLASS));
      curentBodyTab.classList.add(ACTIVE_TABS_CLASS);
   }
}
tabsTitleListEL[0].click();

//SELECT START========================================================================================================================================================

const containerSelectEl = document.querySelector('.select-sorting__container');
const headSelectEl = document.querySelector('.select-sorting__head');
const itemSelectEl = document.querySelectorAll('.select-sorting__item');
const currentSelectEl = document.querySelector('.select-sorting__current');

headSelectEl.addEventListener('click', onClickSelect);
itemSelectEl.forEach((item) => item.addEventListener('click', onClickItem));

function onClickSelect() {
   containerSelectEl.classList.toggle('active');
}

function onClickItem(e) {
   const selected = e.target.textContent;
   currentSelectEl.textContent = selected;
   containerSelectEl.classList.remove('active');
}

//SELECT END========================================================================================================================================================
