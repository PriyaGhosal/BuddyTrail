const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const gbutton=document.getElementById("auth");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { GoogleAuthProvider ,getAuth,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

const provider = new GoogleAuthProvider();  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcEfpZEVUcYBYZmEMl1B5MJ6Q8Da8YQro",
  authDomain: "buddytail.firebaseapp.com",
  projectId: "buddytail",
  storageBucket: "buddytail.appspot.com",
  messagingSenderId: "37897826629",
  appId: "1:37897826629:web:6c396436d57d987d42ce2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
gbutton.addEventListener("click",function(){

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);

 
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used. 
    // ...
  });
})
// Allowed email domains for registration
const allowedDomains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'icloud.com', 'protonmail.com', 'tutanota.com'];

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// Toast function
function showToast(message, type = 'default') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  const toastContainer = document.getElementById('toast-container');
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  }, 3000);
}

// Sign in form submission
document.querySelector(".sign-in-form").addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the input values
  const username = document.querySelector(".sign-in-form input[type='text']").value;
  const password = document.querySelector(".sign-in-form input[type='password']").value;

  // Dummy login logic for demo purposes
  if (username === 'admin' && password === 'password') {
    showToast('Login successful!', 'success');
    // Redirect to dashboard page
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  } else {
    showToast('Invalid username or password', 'error');
  }
});

// Sign up form submission
document.querySelector(".sign-up-form").addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the input values
  const username = document.querySelector(".sign-up-form input[type='text']").value;
  const email = document.querySelector(".sign-up-form input[type='email']").value;
  const password = document.querySelector(".sign-up-form input[type='password']").value;

  if (username === '' || email === '' || password === '') {
    showToast('Please fill in all fields', 'error');
    return;
  }

  // Extract domain from email
  const emailDomain = email.split('@')[1];

  // Check if email domain is allowed
  if (!allowedDomains.includes(emailDomain)) {
    showToast('Please use an email from a reputable provider (Gmail, Outlook, Yahoo, etc.)', 'error');
    return; // Prevent registration
  }

  // Dummy signup logic for demo purposes
  try {
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('isLoggedIn', 'true');

    showToast('Signup successful!', 'success');
    // Redirect to dashboard page
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  } catch (error) {
    showToast('An error occurred during signup. Please try again.', 'error');
    console.error('Signup error:', error);
  }
});
document.querySelector('#login-btn').addEventListener('click', (event) => {
  event.preventDefault();
  
  const emailInput = document.getElementById('login-email');
  const rememberMeCheckbox = document.getElementById('login-remember');

  if (rememberMeCheckbox.checked) {
    localStorage.setItem('rememberedEmail', emailInput.value);
  } else {
    localStorage.removeItem('rememberedEmail');
  }

  // Continue with your existing login logic...
});

// Toggle password visibility
function togglePassword(fieldId, icon) {
  const field = document.getElementById(fieldId);
  const isPassword = field.type === 'password';

  // Toggle between 'password' and 'text'
  field.type = isPassword ? 'text' : 'password';

  // Change the icon class between eye and eye-slash
  icon.classList.toggle('fa-eye-slash', isPassword);
  icon.classList.toggle('fa-eye', !isPassword);
}

// Check password strength
function checkPasswordStrength() {
  const password = document.querySelector(".sign-up-form input[type='password']").value;
  const strengthWeak = document.getElementById('strength-weak');
  const strengthMedium = document.getElementById('strength-medium');
  const strengthStrong = document.getElementById('strength-strong');

  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[a-z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[^a-zA-Z0-9]/)) strength++;

  strengthWeak.className = '';
  strengthMedium.className = '';
  strengthStrong.className = '';

  if (strength >= 1) strengthWeak.className = 'weak';
  if (strength >= 3) strengthMedium.className = 'medium';
  if (strength >= 5) strengthStrong.className = 'strong';
}

// Call the checkPasswordStrength function on password input
document.querySelector(".sign-up-form input[type='password']").addEventListener('input', checkPasswordStrength);