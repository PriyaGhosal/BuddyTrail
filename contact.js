document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    // Error elements
    let nameError = document.getElementById('nameError');
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');
    let messageError = document.getElementById('messageError');

    // Clear previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';
    messageError.textContent = '';

    let hasError = false;

    // Validate name (must be more than 1 character and contain letters only)
    if (fullname.length < 2 || !/^[a-zA-Z\s]+$/.test(fullname)) {
        nameError.textContent = 'Name must be at least 2 characters long and contain only letters.';
        nameError.style.display = 'block';
        hasError = true;
    }

    // Validate email format

    if (!isValidEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.display = 'block';
        hasError = true;
    }

    if (!isValidPhone(phone)) {
        phoneError.textContent = 'Please enter a valid phone number (e.g., +1234567890).';
        phoneError.style.display = 'block';
        hasError = true;
    }
     // Validate message (must be more than 1 character)
     if (message.length < 2) {
        messageError.textContent = 'Message must be at least 2 characters long.';
        messageError.style.display = 'block';
        hasError = true;
    }

    // If there are no errors, proceed with form submission
    if (!hasError) {

    // If validation passes, you can submit the form data to your server here
    console.log('Form submitted:', { fullname, email, phone, message });
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^\+?[1-9]\d{1,14}$/.test(phone); // e.g., +1234567890
}