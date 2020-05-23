let list = document.querySelector(".comment-list");
let form = document.querySelector(".comment-form");
let field = document.querySelector(".comment-field");
let commentLabel = document.querySelector(".comment-label");
let charCounter = document.querySelector(".char-counter");
let commentButton = document.querySelector(".comment-button");

form.onsubmit = function (evt) {
  evt.preventDefault();
  let item = document.createElement("li");
  item.classList.add("comment-user");

  item.textContent = field.value;
  field.value = "";

  list.append(item);

  charCounter.textContent = 0;
};
field.oninput = function (evt) {
  charCounter.textContent = field.value.length;
  if (field.value.length > 43) {
    commentLabel.classList.add("warning");
    field.classList.add("border-warning");
    field.classList.add("warning");
    charCounter.classList.add("warning");
    commentButton.disabled = true;
  } else {
    commentLabel.classList.remove("warning");
    field.classList.remove("border-warning");
    field.classList.remove("warning");
    charCounter.classList.remove("warning");
    commentButton.disabled = false;
  }
};
