let colorSetting = document.querySelector(".color-setting");
let backgroundSetting = document.querySelector(".background-setting");
let sizeSetting = document.querySelector(".size-setting");
let pixels = document.querySelector(".pixels");
let longread = document.querySelector(".longread");

colorSetting.onchange = function () {
  longread.style.color = colorSetting.value;
};
backgroundSetting.onchange = function () {
  longread.style.backgroundColor = backgroundSetting.value;
};

sizeSetting.oninput = function () {
  longread.style.fontSize = sizeSetting.value + "px";
  pixels.textContent = sizeSetting.value;
};
