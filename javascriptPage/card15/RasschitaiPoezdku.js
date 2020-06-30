let cityItems = document.querySelectorAll(".city-item");
let transportItems = document.querySelectorAll(".transport-item");
let answerResult = document.querySelector(".answer-result");

var cityDistance;
var transportSpeed;

for (let cityItem of cityItems) {
  cityItem.onclick = function () {
    cityDistance = cityItem.dataset.distance;
    if (transportSpeed && cityDistance) {
      answerResult.textContent = Math.round(cityDistance / transportSpeed);
    }
    cityItem.classList.add("active");
    cityItem.classList.remove("opacity");

    for (let notActiveCityItems of cityItems) {
      if (notActiveCityItems !== cityItem) {
        notActiveCityItems.classList.remove("active");
        notActiveCityItems.classList.add("opacity");
      }
    }
  };
}
for (let transportItem of transportItems) {
  transportItem.onclick = function () {
    transportSpeed = transportItem.dataset.speed;
    if (transportSpeed && cityDistance) {
        answerResult.textContent = Math.round(cityDistance / transportSpeed);
    }
    transportItem.classList.add("active");
    transportItem.classList.remove("opacity");

    for (let notActiveTransportItems of transportItems) {
      if (notActiveTransportItems !== transportItem) {
        notActiveTransportItems.classList.remove("active");
        notActiveTransportItems.classList.add("opacity");
      }
    }
  };
}
