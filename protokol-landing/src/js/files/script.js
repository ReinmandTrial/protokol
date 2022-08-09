// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

// statistics========================================================================================================================================================
{
   const introArrEl = document.querySelector('.introduce__lawyer-arrow');
   const statisticBlockEl = document.querySelector('.statistics ');
   const closeArrEl = document.querySelector('.statistics__icon-close');

   introArrEl.addEventListener('click', openStatistics);
   closeArrEl.addEventListener('click', closeStatistics);

   let closeTimeOut;
   function openStatistics() {
      statisticBlockEl.classList.add('open');
      setTimeClose();
   }
   function closeStatistics() {
      statisticBlockEl.classList.remove('open');
      clearTimeout(closeTimeOut);
   }
   function setTimeClose() {
      closeTimeOut = setTimeout(() => {
         closeStatistics();
      }, 5000);
   }
}
//documents========================================================================================================================================================

{
   const docArrImgEL = document.querySelectorAll('.documents__image');
   const docMoreBtn = document.querySelector('.documents__show-more');
   const cueAmountDoc = docArrImgEL.length;
   const counterDocAll = document.querySelector('.documents__all');
   const counterDocCur = document.querySelector('.documents__current');

   docMoreBtn.addEventListener('click', openAllDocList);

   initDocumenent();

   function initDocumenent() {
      if (cueAmountDoc <= 5) {
         hiddenDocBtn();
      }
      replaceAllDocNum();
      nowSeeDocEl();
      renderInit();
   }

   function openAllDocList() {
      const nowSee = nowSeeDocEl();
      const needRender = cueAmountDoc - nowSee;
      if (needRender !== 0) {
         for (let i = 5; i !== needRender + 5; i++) {
            const el = docArrImgEL[i];
            el.classList.add('_active');
         }
         nowSeeDocEl();
         renameBtn(2);
      }
      if (needRender === 0) {
         for (let i = 0; i < docArrImgEL.length; i++) {
            const el = docArrImgEL[i];
            el.classList.remove('_active');
         }
         renderInit();
         renameBtn(1);
      }
   }

   function hiddenDocBtn() {
      docMoreBtn.classList.add('_hidden');
   }

   function replaceAllDocNum() {
      if (cueAmountDoc !== 0) {
         counterDocAll.textContent = cueAmountDoc;
      }
   }

   function renderInit() {
      if (cueAmountDoc >= 5) {
         for (let i = 0; i !== 5; i++) {
            const el = docArrImgEL[i];
            el.classList.add('_active');
         }
      }
      if (cueAmountDoc < 5) {
         for (let i = 0; i !== cueAmountDoc; i++) {
            const el = docArrImgEL[i];
            el.classList.add('_active');
         }
      }
      nowSeeDocEl();
   }

   function nowSeeDocEl() {
      const nowVal = document.querySelectorAll('.documents__image._active').length;
      counterDocCur.textContent = nowVal;
      return nowVal;
   }

   function renameBtn(val) {
      if (val === 1) {
         docMoreBtn.textContent = 'Дивитися всі документи';
      }
      if (val === 2) {
         docMoreBtn.textContent = 'Закрыть список';
      }
   }
}

// publications========================================================================================================================================================

{
   const publicAllItemEl = document.querySelectorAll('.publications__item');
   const publicMoreBtn = document.querySelector('.publications__btn');
   const publicItemElLength = publicAllItemEl.length;
   const counterPublicTotal = document.querySelector('.publications__total');
   const counterPuplicCur = document.querySelector('.publications__cur');

   initPublic();

   publicMoreBtn.addEventListener('click', openNextStep);

   function initPublic() {
      if (publicItemElLength <= 6) {
         hidenPublicBtn();
      }
      renderStartPublic();
      totalPublicEl();
      nowSeePublEl();
   }

   function renderStartPublic() {
      if (publicItemElLength >= 6) {
         for (let i = 0; i !== 6; i++) {
            const el = publicAllItemEl[i];
            el.classList.add('_active');
         }
      }
      if (publicItemElLength < 6) {
         for (let i = 0; i !== publicItemElLength; i++) {
            const el = publicAllItemEl[i];
            el.classList.add('_active');
         }
      }
   }

   function openNextStep() {
      const nowSee = nowSeePublEl();
      const needRender = nowSee + 6;
      if (needRender < publicItemElLength) {
         for (let i = nowSee; i !== needRender; i++) {
            const el = publicAllItemEl[i];
            el.classList.add('_active');
         }
         nowSeePublEl();
      }
      if (needRender === publicItemElLength) {
         for (let i = nowSee; i !== needRender; i++) {
            const el = publicAllItemEl[i];
            el.classList.add('_active');
         }
         nowSeePublEl();
         hidenPublicBtn();
      }
      if (needRender > publicItemElLength) {
         const lastRender = publicItemElLength - nowSee;
         for (let i = nowSee; i !== nowSee + lastRender; i++) {
            const el = publicAllItemEl[i];
            el.classList.add('_active');
         }
         hidenPublicBtn();
         nowSeePublEl();
      }
   }

   function nowSeePublEl() {
      const nowVal = document.querySelectorAll('.publications__item._active').length;
      counterPuplicCur.textContent = nowVal;
      return nowVal;
   }

   function totalPublicEl() {
      if (publicItemElLength !== 0) {
         counterPublicTotal.textContent = publicItemElLength;
      }
   }

   function hidenPublicBtn() {
      publicMoreBtn.classList.add('_hidden');
   }
}

//rewiews========================================================================================================================================================

{
   const rewiewAllItemEl = document.querySelectorAll('.reviews__item');
   const rewiewMoreBtn = document.querySelector('.reviews__btn');
   const rewiewItemElLength = rewiewAllItemEl.length;

   initRewiew();

   rewiewMoreBtn.addEventListener('click', openNextRewiewStep);

   function initRewiew() {
      if (rewiewItemElLength <= 4) {
         hidenReviewBtn();
      }
      renderStartReview();
   }

   function renderStartReview() {
      if (rewiewItemElLength >= 4) {
         for (let i = 0; i !== 4; i++) {
            const el = rewiewAllItemEl[i];
            el.classList.add('_active');
         }
      }
      if (rewiewItemElLength < 4) {
         for (let i = 0; i !== rewiewItemElLength; i++) {
            const el = rewiewAllItemEl[i];
            el.classList.add('_active');
         }
      }
   }

   function openNextRewiewStep() {
      const nowSee = nowSeeReviewlEl();
      const needRender = nowSee + 4;
      if (needRender < rewiewItemElLength) {
         for (let i = nowSee; i !== needRender; i++) {
            console.log('dsfdsf');
            const el = rewiewAllItemEl[i];
            el.classList.add('_active');
         }
      }
      if (needRender === rewiewItemElLength) {
         for (let i = nowSee; i !== needRender; i++) {
            console.log('dsfdsf');
            const el = rewiewAllItemEl[i];
            el.classList.add('_active');
         }
         hidenReviewBtn();
      }
      if (needRender > rewiewItemElLength) {
         const lastRender = rewiewItemElLength - nowSee;
         for (let i = nowSee; i !== nowSee + lastRender; i++) {
            const el = rewiewAllItemEl[i];
            el.classList.add('_active');
         }
         hidenReviewBtn();
      }
   }

   function nowSeeReviewlEl() {
      const nowVal = document.querySelectorAll('.reviews__item._active').length;
      return nowVal;
   }

   function hidenReviewBtn() {
      rewiewMoreBtn.classList.add('_hidden');
   }
}

//Open Price ========================================================================================================================================================
{
   const priceHeaderBtn = document.querySelector('#goPrice');
   const showPriceBtn = document.querySelector('.services__price-btn');

   priceHeaderBtn.addEventListener('click', () => {
      showPriceBtn.click();
   });
}
