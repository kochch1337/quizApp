console.clear();

const bookmarkButton = document.querySelector('[data-js="card__bookmark"]');
const answerButton = document.querySelector('[data-js="card__button-answer"]');
const answerCard = document.querySelector('[data-js="card__answer-q1"]');

const showAnswer = "Show answer";
const hideAnswer = "Hide answer";

bookmarkButton.addEventListener("click", (event) => {
  event.target.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", (event) => {
  if (answerButton.textContent.toLowerCase() === hideAnswer.toLowerCase()) {
    answerButton.textContent = showAnswer;
    answerCard.classList.remove("card__answer--active");
  } else {
    answerButton.textContent = hideAnswer;
    answerCard.classList.add("card__answer--active");
  }
});
