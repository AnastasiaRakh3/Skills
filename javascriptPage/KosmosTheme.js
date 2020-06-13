let theme = document.querySelector('.theme');
let page = document.querySelector('.page');

theme.onclick = function () {
  page.classList.toggle('kosmos-theme');
  page.classList.toggle('rainbow');
};
