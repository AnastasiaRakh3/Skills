let theme = document.querySelector('.theme');

let header = document.querySelector('.header');
let mainGradient = document.querySelector('.main-gradient');
let footer = document.querySelector('.footer');
let navigationItem3 = document.querySelector('.navigation-item:nth-child(3)');
let mainHeader = document.querySelector('.main-header');
let cardsItems = document.querySelectorAll('.cards-item');
let cardsSkill1 = document.querySelector('.cards-skill-1');

theme.onclick = function () {
  header.classList.toggle('kosmos-theme');
  mainGradient.classList.toggle('kosmos-theme');
  footer.classList.toggle('kosmos-theme');
  navigationItem3.classList.toggle('kosmos-theme');
  mainHeader.classList.toggle('kosmos-theme');
  cardsItems.classList.toggle('kosmos-theme');
  cardsSkill1.classList.toggle('kosmos-theme');
};
