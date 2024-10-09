
document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents form submission

    // Show custom alert message
    const customAlert = document.createElement('div');
    customAlert.className = 'custom-alert';
    customAlert.innerHTML = `
          <p><b>Thank you! </b><br>We use BuddyTrail to collect and manage all your feedback because we are absolutely committed to making you a happy customer.</br>We will read your feedback, and we'll take it seriously.</p>
  `;
    document.body.appendChild(customAlert);

    // Remove alert on click
    customAlert.addEventListener('click', () => {
        customAlert.remove();
    });

    this.reset(); // Clears the form fields
});

function closePopup() {
    document.getElementById('confirmationPopup').style.display = 'none';
}
