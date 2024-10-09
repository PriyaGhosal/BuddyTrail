window.onscroll = function () {
    toggleScrollTopButton();
};

const scrollTopBtn = document.getElementById("scrollTopBtn");

function toggleScrollTopButton() {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        scrollTopBtn.style.display = "block"; // Show button after scrolling down
    } else {
        scrollTopBtn.style.display = "none"; // Hide button when at the top