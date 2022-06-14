const listBtnEl = document.querySelectorAll('.faq-spoiler__btn');
listBtnEl.forEach((btn) => btn.addEventListener('click', onToggleClickBtn));
function onToggleClickBtn(e) {
   const currentItem = e.target.closest('.faq-spoiler__item');
   currentItem.classList.toggle('active');
}
