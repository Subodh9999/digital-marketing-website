// ================= NAVBAR SCROLL EFFECT =================

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow when scrolled
    if (scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Hide when scrolling down
    if (scrollTop > lastScrollTop) {
        navbar.classList.add("hide");
    }
    // Show when scrolling up
    else {
        navbar.classList.remove("hide");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


// ================= MOBILE MENU TOGGLE =================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open / Close when hamburger clicked
menuToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent outside click from triggering
    navLinks.classList.toggle("active");
});

// Close when clicking a nav link
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Close when clicking outside menu
document.addEventListener("click", function (e) {
    if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {
        navLinks.classList.remove("active");
    }
});