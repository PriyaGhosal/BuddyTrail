document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.star-rating');
    const stars = document.querySelectorAll('.star');
    const showValue = document.querySelector('#rating-value');

    if (!starContainer) {
        console.error('Star rating container not found');
        return;
    }

    if (!stars.length) {
        console.error('No star rating inputs found');
        return;
    }

    if (!showValue) {
        console.error('Rating value display element not found');
        return;
    }

    starContainer.addEventListener('change', (event) => {
        if (event.target.matches('input')) {
            const selectedRating = event.target.value;
            console.log('Selected rating:', selectedRating);

            showValue.textContent = `You rated this ${selectedRating} star${selectedRating !== '1' ? 's' : ''}`;
            
            // Update visual state of stars
            stars.forEach((star) => {
                star.checked = star.value <= selectedRating;
            });
        }
    });

    console.log('Star rating initialization complete');
});
