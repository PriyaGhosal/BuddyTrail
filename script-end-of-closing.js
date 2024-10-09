
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Submit the form data using fetch
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        // Show the confirmation popup
        document.getElementById('confirmationPopup').style.display = 'block';
        // Reset the form
        this.reset();
    }).catch(error => {
        console.error('Error:', error);
        // Still show the confirmation popup even if there's an error
        document.getElementById('confirmationPopup').style.display = 'block';
    });
});


function closePopup() {
    document.getElementById('confirmationPopup').style.display = 'none';
}
