const main = document.querySelector('[data-js="main"]');
const form = document.querySelector('[data-js="form"]');
const submitButton = document.querySelector('[data-js="submit"]');
const cardList = document.querySelector('[data-js="card-list"]');

const questionNew = document.querySelector('[data-js="question_new"]');
const answerNew = document.querySelector('[data-js="answer_new"]');
const questionLeft = document.querySelector('[data-js="question_left"]');
const answerLeft = document.querySelector('[data-js="answer_left"]');

questionNew.addEventListener("input", (event) => {
  const inputLength = event.target.value.length;
  const charsLeft = 150 - inputLength;
  questionLeft.textContent = `${charsLeft} characters left`;
});

answerNew.addEventListener("input", (event) => {
  const inputLength = event.target.value.length;
  const charsLeft = 150 - inputLength;
  answerLeft.textContent = `${charsLeft} characters left`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target);

  const question = event.target.elements.question_new.value;
  const answer = event.target.elements.answer_new.value;
  const tag = event.target.elements.tag_new.value;

  console.log(question);
  console.log(answer);
  console.log(tag);

  addNewCard(question, answer, tag);
});

function addNewCard(question, answer, tag) {
  const cardListItem = document.createElement("li");
  cardListItem.classList.add("card-list__item");

  const articleItem = document.createElement("article");
  articleItem.classList.add("card");

  const headlineItem = document.createElement("h2");
  headlineItem.classList.add("card__question");
  headlineItem.textContent = question;

  const buttonItem = document.createElement("button");
  buttonItem.classList.add("card__button-answer");
  buttonItem.setAttribute("type", "button");
  buttonItem.setAttribute("data-js", "card__button-answer");
  buttonItem.textContent = "Show answer";

  const answerItem = document.createElement("p");
  answerItem.classList.add("card__answer");
  answerItem.setAttribute("data-js", "card__answer");
  answerItem.textContent = answer;

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");

  const tagListItem = document.createElement("li");
  tagListItem.classList.add("card__tag-list-item");
  tagListItem.textContent = `#${tag}`;

  const bookmarkDiv = document.createElement("div");
  bookmarkDiv.classList.add("card__button-bookmark");

  const bookmarkItem = document.createElement("button");
  bookmarkItem.classList.add("bookmark");
  bookmarkItem.setAttribute("aria-label", "bookmark");
  bookmarkItem.setAttribute("type", "button");
  bookmarkItem.setAttribute("data-js", "data-js");

  const svgItem = document.createElement("svg");
  svgItem.classList.add("bookmark__icon");
  svgItem.classList.add("bookmark--active");
  svgItem.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgItem.setAttribute("viewbox", "0 0 24 24");

  const svgPath = document.createElement("path");
  svgPath.setAttribute(
    "d",
    "M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
  );

  cardListItem.append(articleItem);
  articleItem.append(headlineItem);
  articleItem.append(buttonItem);
  articleItem.append(answerItem);
  articleItem.append(tagList);
  tagList.append(tagListItem);

  bookmarkItem.append(svgItem);
  svgItem.append(svgPath);
  bookmarkDiv.append(bookmarkItem);
  articleItem.append(bookmarkDiv);

  cardList.append(cardListItem);
}

/*
 */

/*
  <li class="card-list__item">
          <article class="card">
            <h2 class="card__question">
              In the Kingdom Heart series who provides the english voice for
              Master Eraqus?
            </h2>
            <button
              class="card__button-answer"
              type="button"
              data-js="card__button-answer"
            >
              Show answer
            </button>
            <p class="card__answer" data-js="card__answer-q1">Mark Hamill</p>
            <ul class="card__tag-list">
              <li class="card__tag-list-item">#kingdomheart</li>
              <li class="card__tag-list-item">#mastereraqus</li>
              <li class="card__tag-list-item">#english voices</li>
            </ul>
            <div class="card__button-bookmark">
              <button
                class="bookmark"
                aria-label="bookmark"
                type="button"
                data-js="data-js"
              >
                <svg
                  class="bookmark__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewbox="0 0 24 24"
                >
                  <path
                    d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
              </button>
            </div>
          </article>
        </li>
*/
