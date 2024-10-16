document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (!fullname||  !email || !phone || !message) {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    if (!isValidPhone(phone)) {
        alert('Please enter a valid phone number');
        return;
    }

    // If validation passes, you can submit the form data to your server here
    console.log('Form submitted:', { fullname, email, phone, message });
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\+?[\d\s-]{10,}$/.test(phone);
}