const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    questions.forEach(item => {
      if(item !== question) {
        item.classList.remove('selected');
      }
    });

    question.classList.toggle('selected');
  });
});