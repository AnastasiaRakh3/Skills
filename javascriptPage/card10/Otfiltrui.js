let btnRow = document.querySelector(".btn-row-view");
let btnTile = document.querySelector(".btn-tile-view");
let newsList = document.querySelector(".news-list");

let filter = document.querySelector(".filter");
let articles = document.querySelectorAll(".news-block");

btnTile.onclick = function () {
  btnTile.classList.add("view-checked");
  btnRow.classList.remove("view-checked");
  newsList.classList.add("list-tiles-view");
};
btnRow.onclick = function () {
  btnRow.classList.add("view-checked");
  btnTile.classList.remove("view-checked");
  newsList.classList.remove("list-tiles-view");
};

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== "all") {
      article.classList.add("hidden");
    } else {
      article.classList.remove("hidden");
    }
  }
};
