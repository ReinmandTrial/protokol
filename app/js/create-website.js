'use strict';
//UNTIL CONST========================================================================================================================================================
const MAIN_FORM = document.querySelector('.create-website__form');

//========================================================================================================================================================

//INPUT START========================================================================================================================================================
const allInputEl = document.querySelectorAll('.temp-input');

allInputEl.forEach((input) => {
   input.addEventListener('input', onInput);
});

function onInput(e) {
   const currentInput = e.target;
   const curretnInputWrap = currentInput.closest('.temp-input__input-wrap');
   const cross = curretnInputWrap.querySelector('.temp-input__cross');
   if (e.target.value !== '') {
      cross.classList.add('active');
   } else {
      cross.classList.remove('active');
   }
   cross.addEventListener('click', (e) => {
      currentInput.value = '';
      cross.classList.remove('active');
      if (cross.classList.contains('copyright-cross')) {
         copurightStaticTextEl.classList.remove('active');
         copurightDynamicTextEl.textContent = e.target.value;
      }
   });
}

//INPUT END========================================================================================================================================================

//SELECT START========================================================================================================================================================

MAIN_FORM.addEventListener('click', (e) => {
   if (e.target.classList.contains('temp-select__head')) {
      e.preventDefault();
      onOpenSelect(e.target);
   }
   if (e.target.classList.contains('temp-select__item')) {
      e.preventDefault();
      onAddOption(e.target);
   }
});

function onOpenSelect(select) {
   const temp = select.closest('.temp-select');
   if (temp.classList.contains('active')) {
      temp.classList.remove('active');
   } else {
      closeAllSelect();
      temp.classList.add('active');
   }
}
function onAddOption(item) {
   if (item.classList.contains('temp-select__item')) {
      const val = item.textContent;
      const select = item.closest('.temp-select__content');
      const selectHeadText = select.querySelector('.temp-select__text');
      selectHeadText.textContent = val;
      closeAllSelect();
   }
}

function closeAllSelect() {
   MAIN_FORM.querySelectorAll('.temp-select').forEach((select) => select.classList.remove('active'));
}

//SELECT END========================================================================================================================================================

//CHECKBOX START========================================================================================================================================================

const listInputEl = document.querySelectorAll('.schedule__list input');
const alwaysInputEl = document.getElementById('alwaysInput');

alwaysInputEl.addEventListener('change', onChangeAlwaysInput);

function onChangeAlwaysInput(e) {
   e.preventDefault();
   listInputEl.forEach((input) => (input.disabled = !input.disabled));
}

//CHECKBOX END========================================================================================================================================================

//input one file START ========================================================================================================================================================

MAIN_FORM.addEventListener('change', (e) => {
   if (e.target.classList.contains('temp-input-file__input')) {
      e.preventDefault();
      onChangeFileInput(e.target.closest('.temp-input-file'), e);
   }
});

function onChangeFileInput(curTemp, e) {
   const img = curTemp.querySelector('.temp-input-file__previous-img');
   const trash = curTemp.querySelector('.temp-input-file__previous-trash');
   const label = curTemp.querySelector('.temp-input-file__label');
   const previous = curTemp.querySelector('.temp-input-file__previous');
   let file = e.target.files[0];

   trash.addEventListener('click', deletePhoto);

   if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', setPhoto);
      reader.readAsDataURL(file);
   }
   function setPhoto(e) {
      label.style.display = 'none';
      previous.style.display = 'block';
      img.setAttribute('src', e.target.result);
   }

   function deletePhoto(e) {
      e.preventDefault();
      label.style.display = 'block';
      previous.style.display = 'none';
      img.setAttribute('src', '');
   }
}

//input one file END========================================================================================================================================================

//input list file START========================================================================================================================================================
const IMAGE_ITEM_TEMP = document.getElementById('ImageTemp').innerHTML;
const allFileList = document.querySelectorAll('.temp-input-list-file__input');

allFileList.forEach((input) => input.addEventListener('change', onChangeListFileInput));

function onChangeListFileInput(e) {
   e.preventDefault();
   readURL(this);
}

function readURL(input) {
   if (input.files && input.files[0]) {
      for (let i = 0; i < input.files.length; i++) {
         const reader = new FileReader();
         reader.onload = function (e) {
            const createHtml = IMAGE_ITEM_TEMP.replace('{{src}}', e.target.result);

            if (input.id === 'documentInput') {
               const documentListEl = document.getElementById('documentsList');
               documentListEl.insertAdjacentHTML('afterbegin', createHtml);
            }
            if (input.id === 'galleryPhotoInput') {
               const galleryPhotoListEL = document.getElementById('galleryPhotoList');
               galleryPhotoListEL.insertAdjacentHTML('afterbegin', createHtml);
            }
         };
         reader.readAsDataURL(input.files[i]);
      }
   }
}
MAIN_FORM.addEventListener('click', (e) => {
   if (e.target.classList.contains('temp-input-list-file__trash')) {
      e.preventDefault();
      const curItem = e.target.closest('.temp-input-list-file__item');
      curItem.remove();
   }
});

//input list file END========================================================================================================================================================

//Copyright START========================================================================================================================================================

const copurightEl = document.querySelector('.first-step__copyright');
const copurightInputEl = copurightEl.querySelector('.temp-input__input');
const copurightStaticTextEl = copurightEl.querySelector('.temp-input__static-text');
const copurightDynamicTextEl = copurightEl.querySelector('.temp-input__dynamic-text');

copurightInputEl.addEventListener('input', onInputText);

function onInputText(e) {
   e.preventDefault();
   if (copurightInputEl.value.lenght !== 0) {
      copurightStaticTextEl.classList.add('active');
      copurightDynamicTextEl.textContent = e.target.value;
   } else {
      copurightStaticTextEl.classList.remove('active');
   }
}

//Copyright END========================================================================================================================================================

//auto-heigh-textarea START========================================================================================================================================================
const allTextareaEl = document.querySelectorAll('.auto-height');

allTextareaEl.forEach((area) =>
   area.addEventListener('input', function (e) {
      if (this.scrollTop > 0) {
         e.preventDefault();
         this.style.height = this.scrollHeight + 'px';
      }
   })
);
//auto-heigh-textarea END========================================================================================================================================================

//step second START========================================================================================================================================================
const SERVICE_TEMP = document.getElementById('secondStepServiceItemTemplate').innerHTML;
const servicesListEl = document.querySelector('.second-step__list-services');
const allServiceEl = document.getElementsByClassName('second-step__service');

const addServiceBtnEl = document.querySelector('.second-step__add-button');

addServiceBtnEl.addEventListener('click', onClickSecondStepAddBtn);
servicesListEl.addEventListener('change', onChangeState);

function onChangeState(e) {
   if (e.target.classList.contains('show-price-checkbox')) {
      e.preventDefault();
      const curService = e.target.closest('.second-step__service');
      const curInputPrice = curService.querySelector('.second-step__price');
      curInputPrice.classList.toggle('active');
   }
   if (e.target.classList.contains('service-missing-checkbox')) {
      e.preventDefault();
      const curSerivce = e.target.closest('.second-step__service');
      const curInputMissingService = curSerivce.querySelector('.second-step__add-service');
      curInputMissingService.classList.toggle('active');
   }
}

function onClickSecondStepAddBtn(e) {
   e.preventDefault();
   if (servicesListEl.children.length <= 14) {
      servicesListEl.insertAdjacentHTML('beforeend', SERVICE_TEMP);
   }
}
//step second END========================================================================================================================================================

//step third START========================================================================================================================================================
const EXAMPLE_TEMP = document.getElementById('thirsStepExamplesItemTemplate').innerHTML;
const listExamplesEL = document.querySelector('.third-step__list-examples');
const addButton = document.querySelector('.third-step__add-button');

addButton.addEventListener('click', onClickThirdStepAddBtn);

function onClickThirdStepAddBtn(e) {
   e.preventDefault();
   listExamplesEL.insertAdjacentHTML('beforeend', EXAMPLE_TEMP);
}

//step third END========================================================================================================================================================

//step fifth START========================================================================================================================================================
const fifthStepEL = document.querySelector('.fifth-step');
const PUBLICATION_TEMP = document.getElementById('publicationTemp').innerHTML;
const addBtnPublicationEl = document.querySelector('.fifth-step__add-button');
const publicationsListEl = document.querySelector('.fifth-step__list-publications');

addBtnPublicationEl.addEventListener('click', onAddPublication);

function onAddPublication(e) {
   e.preventDefault();
   const interpolateHtml = PUBLICATION_TEMP.replaceAll('{{val}}', Date.now());
   publicationsListEl.insertAdjacentHTML('beforeend', interpolateHtml);
}

fifthStepEL.addEventListener('change', (e) => {
   if (e.target.classList.contains('temp-radio__input')) {
      e.preventDefault();
      const curPublic = e.target.closest('.fifth-step__publication');
      onChangeRadio(curPublic);
   }
});

function onChangeRadio(curPublic) {
   const linkRadio = curPublic.querySelector('.radio-link');
   const manuallyRadio = curPublic.querySelector('.radio-manually');
   const linkBLock = curPublic.querySelector('.fifth-step__block-if-link');
   const manuallyBLock = curPublic.querySelector('.fifth-step__block-if-manually');
   if (linkRadio.checked) {
      linkBLock.style.display = 'block';
      manuallyBLock.style.display = 'none';
   }
   if (manuallyRadio.checked) {
      linkBLock.style.display = 'none';
      manuallyBLock.style.display = 'block';
   }
}
//step fifth END========================================================================================================================================================

//step seventh START========================================================================================================================================================
const TEMP_REWIEV = document.getElementById('reviewItemTemp').innerHTML;
const addBtnRewiev = document.querySelector('.seventh-step__add-button');
const listRewievs = document.querySelector('.seventh-step__list-reviews');

addBtnRewiev.addEventListener('click', onAddRewiew);

function onAddRewiew(e) {
   e.preventDefault();
   listRewievs.insertAdjacentHTML('beforeend', TEMP_REWIEV);
}

//step seventh END========================================================================================================================================================

//step eight START========================================================================================================================================================
const TEMP_FAQ = document.getElementById('faqItemTemp').innerHTML;
const addBtnFaq = document.querySelector('.eighth-step__add-button');
const listFaq = document.querySelector('.eighth-step__list-faq');

addBtnFaq.addEventListener('click', onAddFaq);

function onAddFaq(e) {
   e.preventDefault();
   listFaq.insertAdjacentHTML('beforeend', TEMP_FAQ);
}
//step eight END========================================================================================================================================================

//delete-item START ========================================================================================================================================================

MAIN_FORM.addEventListener('click', (e) => {
   if (e.target.classList.contains('temp-delete-btn')) {
      e.preventDefault();
      e.target.parentElement.remove();
   }
});

//delete-item END========================================================================================================================================================
