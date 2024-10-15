// Import the functions you need from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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
const provider = new GithubAuthProvider(); // Use GithubAuthProvider for GitHub login

// Handle the GitHub Sign-In button click
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('githubSignInBtn').addEventListener('click', function () {
        signInWithPopup(auth, provider)
            .then((result) => {
                // The signed-in user info
                const user = result.user;
                console.log('User signed in with GitHub:', user);

                // Log before attempting redirection
                console.log('Redirecting to index.html');

                // Redirect to index.html
                try {
                    window.location.href = "index.html";  // Ensure the correct path
                } catch (e) {
                    console.error('Redirection error:', e);
                }
            })
            .catch((error) => {
                console.error('Error during sign-in:', error);
            });
    });

    // Handle the Sign-Out button click
    document.getElementById('signOutBtn').addEventListener('click', function () {
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
