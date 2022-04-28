document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll('.js-view-answer').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.target.closest('.js-comment-content').querySelector('.js-body').classList.add('active')
        e.target.closest('.js-view-answer').classList.remove('active')
        e.target.closest('.article-hero__comment-interaction').querySelector('.js-hide-answer').classList.add('active')

      })
    })
    document.querySelectorAll('.js-hide-answer').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.target.closest('.js-comment-content').querySelector('.js-body').classList.remove('active')
        e.target.closest('.js-hide-answer').classList.remove('active')
        e.target.closest('.article-hero__comment-interaction').querySelector('.js-view-answer').classList.add('active')
      })
    })
  }, 1000);
  document.querySelectorAll('.js-write-answer').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (document.querySelector('.js-review-form')) {
        document.querySelector('.js-review-form').remove()
      }
      const form = document.createElement('form')
      form.className = "article-hero__comment-review js-review-form";
      form.innerHTML = '<label class="visually-hidden" for="article-review-textarea">Ведите текст</label> <textarea id="article-review-textarea" class="article-hero__comment-rewiev-textarea" rows="2" placeholder="Ведите текст"></textarea> <div class="article-hero__comment-review-btn-wrap"> <button class="article-hero__comment-review-cancel btn-temp btn-red js-review-cancel" type="button">отменить</button> <button class="article-hero__comment-review-submit btn-temp btn-red js-review-submit" type="button">Ответить</button> </div>'
      e.target.closest('.js-comment-head').append(form)
      document.querySelectorAll('.js-review-cancel').forEach((btnCancel) => {
        btnCancel.addEventListener('click', (e) => {
          e.target.closest('.js-review-form').remove()
        })
      })
    })
  })

  $('.search-by-adaptive-lawyer__title-wrap').on('click', function () {
    $(this).closest('.search-by-adaptive-lawyer').toggleClass('active')
    $(this).closest('.lawyer__main').toggleClass('lawyer-hide')
  })
  $('.search-by-lawyer__btn').on('click', function () {
    $(this).closest('.search-by-lawyer__item').toggleClass('active')
    // $(this).closest('.lawyer__main').toggleClass('hide')
  })
  $('.search-lawyer__input').on('focusin', function () {
    $(this).closest('.search-lawyer__input-wrap').addClass('active')
  })
  $(document).on('click', function (e) {
    if (!e.target.closest('.search-lawyer__input-wrap')) {
      $('.search-lawyer__input-wrap').removeClass('active')
    }
  })

});

