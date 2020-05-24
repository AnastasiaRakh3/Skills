let keyButtons = document.querySelectorAll(".key-button");
let display = document.querySelector(".display");
let clearButton = document.querySelector(".clear-button");

for (let keyButton of keyButtons) {
  keyButton.onclick = function () {
    display.textContent = display.textContent + keyButton.textContent;
  };
}

clearButton.onclick = function () {
  display.textContent = "";
};
