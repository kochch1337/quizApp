console.clear();

const bookmarkButton = document.querySelector('[data-js="card__bookmark"]');
const answerButton = document.querySelector('[data-js="card__button-answer"]');
const answerCard = document.querySelector('[data-js="card__answer-q1"]');

const showAnswer = "show answer";
const hideAnswer = "hide answer";

bookmarkButton.addEventListener("click", (event) => {
  event.target.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", (event) => {
  answerCard.classList.toggle("card__answer--active");

  console.log(answerButton.value);

  if (answerButton.textContent.toUpperCase() === hideAnswer.toUpperCase()) {
    answerButton.textContent = showAnswer;
  } else {
    answerButton.textContent = hideAnswer;
  }
});
