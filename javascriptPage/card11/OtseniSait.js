let reviews = document.querySelectorAll('.review');
let error = document.querySelector('.error');
let submitButton = document.querySelector('.submit-button');

for (let review of reviews) {
    review.onchange = function () {
        if (review.dataset.evaluation === 'bad') {
            submitButton.disabled = true;
            submitButton.classList.add('disabled');
            error.classList.remove('hidden');
        } else {
            submitButton.disabled = false;
            submitButton.classList.remove('disabled');
            error.classList.add('hidden');
        }
    }
}
