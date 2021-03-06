const openSlolutionEl = document.querySelector('.open-solution');
const bodyCommentEl = document.querySelector('.solution-action-bar__body-comments');
const scrollEl = document.querySelector('.solution-action-bar__content');

openSlolutionEl.addEventListener('click', (e) => {
   if (
      e.target.classList.contains('sticky-label__text') ||
      e.target.classList.contains('comments-bar') ||
      e.target.classList.contains('sticky-label__img')
   ) {
      scrollTo();
      openContainer();
   }
});

function openContainer() {
   bodyCommentEl.classList.add('active');
}

function scrollTo() {
   scrollEl.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

new Swiper('.slider-news__container', {
   navigation: {
      nextEl: '.slider-news__next',
      prevEl: '.slider-news__prev',
   },
   loop: true,
   spaceBetween: 30,
});
