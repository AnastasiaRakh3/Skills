let tooltip = document.querySelector(".tooltip");
let tooltipText = document.querySelector(".tooltip-text");
let tooltipCloseButton = document.querySelector(".tooltip-close-button");
let tooltipButtons = document.querySelectorAll(".tooltip-button");

for (let tooltipButton of tooltipButtons) {
  tooltipButton.onclick = function () {
    tooltip.classList.add("opened");
    tooltipText.textContent = tooltipButton.dataset.tooltipText;
  };
};
tooltipCloseButton.onclick = function () {
  tooltip.classList.remove("opened");
};
