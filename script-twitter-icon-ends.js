// change the color of navbar while  scrolling to make it visible
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".main-head");
    if (window.scrollY > 0) {
        navbar.classList.add("sticky"); // Add class when scrolled
    } else {
        navbar.classList.remove("sticky"); // Remove class when at the top
    }
});

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
    }

}

scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
};
