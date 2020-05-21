let list = document.querySelector(".comment-list");
let form = document.querySelector(".comment-form");
let field = document.querySelector(".comment-field");

form.onsubmit = function(evt) {
    evt.preventDefault();
    let item = document.createElement("li");
    item.classList.add("comment-user");

    item.textContent = field.value;
    field.value = "";

    list.append(item);
};