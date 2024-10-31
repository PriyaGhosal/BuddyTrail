// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   // Basic form validation
//   let fullname = document.getElementById("fullname").value;
//   let email = document.getElementById("email").value;
//   let phone = document.getElementById("phone").value;
//   let message = document.getElementById("message").value;

//   // Error elements
//   let nameError = document.getElementById("nameError");
//   let emailError = document.getElementById("emailError");
//   let phoneError = document.getElementById("phoneError");
//   let messageError = document.getElementById("messageError");

//   // Clear previous error messages
//   nameError.textContent = "";
//   emailError.textContent = "";
//   phoneError.textContent = "";
//   messageError.textContent = "";

//   let hasError = false;

//   // Validate name (must be more than 1 character and contain letters only)
//   if (fullname.length < 2 || !/^[a-zA-Z\s]+$/.test(fullname)) {
//     nameError.textContent =
//       "Name must be at least 2 characters long and contain only letters.";
//     nameError.style.display = "block";
//     hasError = true;
//   }

//   // Validate email format

//   if (!isValidEmail(email)) {
//     emailError.textContent = "Please enter a valid email address.";
//     emailError.style.display = "block";
//     hasError = true;
//   }

//   if (!isValidPhone(phone)) {
//     phoneError.textContent =
//       "Please enter a valid phone number (e.g., +1234567890).";
//     phoneError.style.display = "block";
//     hasError = true;
//   }
//   // Validate message (must be more than 1 character)
//   if (message.length < 2) {
//     messageError.textContent = "Message must be at least 2 characters long.";
//     messageError.style.display = "block";
//     hasError = true;
//   }

//   // If there are no errors, proceed with form submission
//   if (!hasError) {
//     // If validation passes, you can submit the form data to your server here
//     console.log("Form submitted:", { fullname, email, phone, message });
//     alert("Thank you for your message. We will get back to you soon!");
//     this.reset();
//   }
// });

function isValidEmail(email) {
  // Regular expression for stricter email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check for the basic format
  if (!emailRegex.test(email)) {
    return false;
  }

  // Split the email into local part and domain part
  const [localPart, domainPart] = email.split("@");

  // Ensure local part and domain part exist and aren't too long
  if (localPart.length > 64 || domainPart.length > 255) {
    return false;
  }

  // Ensure domain part has a valid format
  const domainParts = domainPart.split(".");
  if (domainParts.some((part) => part.length > 63)) {
    return false;
  }

  // Additional checks for edge cases
  if (
    localPart.startsWith(".") ||
    localPart.endsWith(".") ||
    localPart.includes("..")
  ) {
    return false;
  }

  return true;
}

function isValidPhone(phone) {
  return /^\+?[1-9]\d{1,14}$/.test(phone); // e.g., +1234567890
}

document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("modeToggle");
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  // Check if the user has a saved mode preference
  const currentMode = localStorage.getItem("mode");
  if (currentMode === "dark") {
    document.body.classList.add("dark-mode");
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }

  // Toggle the mode when the button is clicked
  modeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      moonIcon.style.display = "block";
      sunIcon.style.display = "none";
      localStorage.setItem("mode", "dark"); // Save the user's preference
    } else {
      moonIcon.style.display = "none";
      sunIcon.style.display = "block";
      localStorage.setItem("mode", "light"); // Save the user's preference
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  //validations
  if (!name || !email || !phone || !message) {
    alert("Please fill out all fields");
    return;
  }

  const formData = {
    Name: name,
    Email: email,
    Phone: phone,
    Message: message,
  };

  try {
    // call tha api
    const response = await fetch("http://localhost:5000/api/contact/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      document.getElementById("contactForm").reset();
    } else {
      alert("There was an error sending the message. Please try again.");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Network error. Please check your connection.");
  }
});
