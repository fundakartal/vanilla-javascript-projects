// method 1

const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');

btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.closest('.question');
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  })
);

// method 2

/* const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle('show-text');
  });
});
 */