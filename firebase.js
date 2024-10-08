// Firebase configuration
  const firebaseConfig = { 
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase Auth
  const auth = firebase.auth();
  
  // Google Authentication function
  function signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
  
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in:", user);
  
        // Redirect to dashboard or any page after successful login
        window.location.href = "book.html";
      })
      .catch((error) => {
        console.log("Error during sign-in:", error);
      });
  }
  
 
  function signUpWithEmailAndPassword(email, password, name) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully created new user
            const user = userCredential.user;
            console.log("User signed up:", user);

            // Optionally, save additional user information (like name) in your database

            // Redirect to dashboard or any page after successful sign-up
            window.location.href = "book.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error during sign-up:", errorCode, errorMessage);
            // Optionally, display an error message to the user
            alert(errorMessage);
        });
  }
  // Password validation function
  function validatePassword(password) {
    const minLength = 8; // Minimum length
    const hasUpperCase = /[A-Z]/.test(password); // At least one uppercase letter
    const hasLowerCase = /[a-z]/.test(password); // At least one lowercase letter
    const hasNumber = /\d/.test(password); // At least one digit
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // At least one special character

    if (password.length < minLength) {
        return "Password must be at least 8 characters long.";
    }
    if (!hasUpperCase) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowerCase) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!hasNumber) {
        return "Password must contain at least one number.";
    }
    if (!hasSpecialChar) {
        return "Password must contain at least one special character.";
    }
    
    return null; // Return null if all conditions are met
  }

  function loginWithEmailAndPassword(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User logged in:", user);
            window.location.href = "book.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error during login:", errorCode, errorMessage);
            alert(errorMessage); 
        });
  } 

  // Add event listener to Google sign-up button
  document.querySelector(".google-btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    signInWithGoogle(); 
  });
    

  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    const passwordError = validatePassword(password);
      if (passwordError) {
          alert(passwordError);
          return;
      }
    signUpWithEmailAndPassword(email, password, name);
  });

  
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Call the login function
  loginWithEmailAndPassword(email, password);
});

function togglePassword(fieldId) {
  const passwordField = document.getElementById(fieldId);
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}