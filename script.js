// =====================================
// JOE ANDREA ILLAM
// SCRIPT.JS
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // 1. Navbar shadow on scroll
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 5px 25px rgba(0, 229, 255, 0.15)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

    // 2. Smooth button hover animations
    const buttons = document.querySelectorAll(".hero-btn");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-6px) scale(1.03)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0px) scale(1)";
        });
    });

    // Console confirmation
    console.log("Joe Andrea Illam Website Loaded Successfully");
});
