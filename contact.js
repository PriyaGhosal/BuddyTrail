document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let message = document.getElementById('message').value;

    if (!firstName || !lastName || !email || !mobile || !message) {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!isValidPhone(mobile)) {
        alert('Please enter a valid phone number');
        return;
    }

    // If validation passes, you can submit the form data to your server here
    console.log('Form submitted:', { firstName, lastName, email, mobile, message });
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\+?[\d\s-]{10,}$/.test(phone);
}