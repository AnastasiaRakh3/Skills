let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 400) {
    upButton.classList.remove('hidden');
  } else {
    upButton.classList.add('hidden');
  }
};
upButton.onclick = function () {
  window.scrollTo(0, 0);
};
