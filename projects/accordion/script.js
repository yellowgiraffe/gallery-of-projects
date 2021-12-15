const questions = document.querySelectorAll('.questions__item');

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    questions.forEach(el => {
      if (el.classList.contains('open')) {
        el.classList.remove('open');
      } else if (question === el) {
        el.classList.add('open')
      }
    })
  });
});
