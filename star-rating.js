let star = document.querySelectorAll('input');
let showValue = document.querySelector('#rating-value');

for(let i = 0; i < star.length; i++) {
    star[i].addEventListener('click', function() {
        let selectedRating = this.value;
        showValue.innerHTML = selectedRating; // Only show the rating value
    });
}