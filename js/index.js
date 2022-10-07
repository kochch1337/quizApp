console.clear();

const bookmarkButton = document.querySelector('[data-js="card__bookmark"]');

bookmarkButton.addEventListener("click", (event) => {
  event.target.classList.toggle("bookmark--active");
});
