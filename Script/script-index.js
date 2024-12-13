// Swiper Code
const sliderContainer = document.getElementById("swiperBackground");
const sliderButton = document.getElementById("swiper");
const sliderOpacity = document.getElementById("swiperOpacity");

let isDragging = false;
let startX;

sliderButton.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;

    const containerRect = sliderContainer.getBoundingClientRect();
    const initialWidth = Math.max(9, e.clientX - containerRect.left);

    sliderOpacity.style.width = `${initialWidth}px`;
    sliderOpacity.style.height = `${sliderButton.offsetHeight}px`;
    sliderOpacity.style.top = `${sliderButton.offsetTop}px`;
    sliderOpacity.style.left = "9px";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const containerRect = sliderContainer.getBoundingClientRect();
    let newWidth = e.clientX - containerRect.left;

    newWidth = Math.max(9, Math.min(newWidth, containerRect.width - 30));
    sliderOpacity.style.width = `${newWidth}px`;

    let buttonLeft = e.clientX - startX + 9;
    buttonLeft = Math.max(9, Math.min(buttonLeft, containerRect.width - sliderButton.offsetWidth - 9));
    sliderButton.style.left = `${buttonLeft}px`;
});

document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;

    const containerRect = sliderContainer.getBoundingClientRect();
    const buttonRect = sliderButton.getBoundingClientRect();

    if (buttonRect.right >= containerRect.right - 15) {
        window.location = "funmode.html";
    }

    sliderOpacity.style.width = "0";
    sliderOpacity.style.height = "0";
    sliderButton.style.left = "9px";
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
