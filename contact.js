document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Gather form data
    let fullname = document.getElementById('fullname').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let message = document.getElementById('message').value.trim();

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

    // Validate phone number format
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
        console.log('Form submitted:', { fullname, email, phone, message });
        alert('Thank you for your message. We will get back to you soon!');
        this.reset(); // Reset form fields
    }
});

// Function to validate email format
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to validate phone number format
function isValidPhone(phone) {
    return /^\+?[1-9]\d{1,14}$/.test(phone); // e.g., +1234567890
}
