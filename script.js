// Get the toggle button and the body element
const themeToggle = document.getElementById('theme-toggle');
const bodyElement = document.body;

// Function to update the button text
function updateButtonText(isDarkMode) {
    themeToggle.textContent = isDarkMode ? 'Switch to Bright Mode' : 'Switch to Dark Mode';
}

// Check if the user has a preferred theme
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (userPrefersDark) {
    bodyElement.classList.add('dark-mode');
    updateButtonText(true);
}

// Toggle the theme on button click
themeToggle.addEventListener('click', () => {
    const isDarkMode = bodyElement.classList.toggle('dark-mode');
    updateButtonText(isDarkMode);
    
    // Save the user's preference in localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'bright');
});

// Apply the saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    const isDarkMode = savedTheme === 'dark';
    bodyElement.classList.toggle('dark-mode', isDarkMode);
    updateButtonText(isDarkMode);
}
