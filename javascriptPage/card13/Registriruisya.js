let password = document.querySelector(".password");
let showPassword = document.querySelector(".show-password");

let securityBar = document.querySelector(".security-bar");

let btn = document.querySelector(".btn");

showPassword.onchange = function () {
  if (showPassword.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

password.oninput = function () {
  let passLength = password.value.length;
  securityBar.style.width = passLength * 10 + "%";
  if (passLength <= 5) {
    securityBar.style.backgroundColor = "red";
    btn.disabled = true;
    btn.classList.add("disabled");
  } else if (passLength > 5 && passLength < 10) {
    securityBar.style.backgroundColor = "gold";
    btn.disabled = false;
    btn.classList.remove("disabled");
  } else {
    securityBar.style.backgroundColor = "green";
    btn.disabled = false;
    btn.classList.remove("disabled");
  }
};

