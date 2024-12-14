// Swiper Functionality
const sliderContainer = document.getElementById("swiperBackground");
const sliderButton = document.getElementById("swiper");
const sliderOpacity = document.getElementById("swiperOpacity");

let isDragging = false;
let startX;

sliderButton.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;

    const containerRect = sliderContainer.getBoundingClientRect();
    const initialWidth = Math.max(10, e.clientX - containerRect.left);

    sliderOpacity.style.width = `${initialWidth}px`;
    sliderOpacity.style.height = `${sliderButton.offsetHeight}px`;
    sliderOpacity.style.left = "10px";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const containerRect = sliderContainer.getBoundingClientRect();
    let newWidth = e.clientX - containerRect.left;

    newWidth = Math.max(10, Math.min(newWidth, containerRect.width - 20));
    sliderOpacity.style.width = `${newWidth}px`;

    let buttonLeft = e.clientX - startX + 10;
    buttonLeft = Math.max(10, Math.min(buttonLeft, containerRect.width - sliderButton.offsetWidth - 10));
    sliderButton.style.left = `${buttonLeft}px`;
});

document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;

    const containerRect = sliderContainer.getBoundingClientRect();
    const buttonRect = sliderButton.getBoundingClientRect();

    if (buttonRect.right >= containerRect.right - 15) {
        alert("Swiper action completed!"); // Temporär: Fun-Mode später einfügen
    }

    sliderOpacity.style.width = "0";
});

// Highlight aktiver Bereich
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#navbar a, #mobileNavbar a");

    const updateActiveLink = () => {
        const scrollPos = window.scrollY + 50;

        sections.forEach((section) => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach((link) => link.classList.remove("active", "current-mobile"));
                document.querySelector(`a[href="#${section.id}"]`).classList.add(window.innerWidth > 1000 ? "active" : "current-mobile");
            }
        });
    };

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});

// Curriculum Vitae Animation on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const cvItems = document.querySelectorAll(".cv-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    cvItems.forEach(item => observer.observe(item));
});

// Contact Form Submission
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Verhindert das Standardformularverhalten

        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (email && message) {
            alert(`Thank you for your message!\n\nEmail: ${email}\nMessage: ${message}`);
            contactForm.reset(); // Formular zurücksetzen
        } else {
            alert("Please fill out all fields.");
        }
    });
});

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");
    const closeIcon = document.getElementById("close-icon");

    menuIcon.addEventListener("click", () => {
        menu.classList.add("open");
    });

    closeIcon.addEventListener("click", () => {
        menu.classList.remove("open");
    });

    // Schließt das Menü, wenn außerhalb geklickt wird
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("open");
        }
    });
});

// Scroll-Animation
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in, .about-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
            }
        });
    });

    elements.forEach((el) => observer.observe(el));
});
