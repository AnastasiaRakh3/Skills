let message = document.querySelector(".subscription-message");
let email = document.querySelector(".subcription-email");
let form = document.querySelector(".subscription");

form.onsubmit = function (evt) {
  evt.preventDefault();
  message.textContent =
    "Адрес " +
    email.value +
    " добавлен в список получателей рассылки! Шучу, не добавлен:)";
    email.value = '';
    
};
