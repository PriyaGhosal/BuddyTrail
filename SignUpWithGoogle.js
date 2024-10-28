// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ_FcNutmDc-NZxhEhWAkMAy-1LUPyCVY",
    authDomain: "buddytrail-25f6e.firebaseapp.com",
    databaseURL: "https://buddytrail-25f6e-default-rtdb.firebaseio.com",
    projectId: "buddytrail-25f6e",
    storageBucket: "buddytrail-25f6e.appspot.com",
    messagingSenderId: "968346517676",
    appId: "1:968346517676:web:ecfe20a72a6b1b6ecb5f09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Use GoogleAuthProvider for Google login

// Handle the Google Sign-In button click
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('googleSignInBtn').addEventListener('click', function () {
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info
                const user = result.user;
                console.log('User signed in with Google:', user);

                // Redirect to index.html
                window.location.href = "index.html";
            })
            .catch((error) => {
                console.error('Error during sign-in:', error);
            });
    });

    // Handle the Sign-Out button click (if needed)
    document.getElementById('signOutBtn')?.addEventListener('click', function () {
        signOut(auth)
            .then(() => {
                console.log('User signed out.');
                document.getElementById('signInStatus').innerHTML = '<p>User signed out.</p>';

                // Hide the Sign-Out button
                document.getElementById('signOutBtn').style.display = 'none';
            })
            .catch((error) => {
                console.error('Error during sign-out:', error);
            });
    });
});

export { app, auth };
