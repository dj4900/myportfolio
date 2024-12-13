// Example for active navbar functionality
document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll("#navbar a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            // Remove 'current' class from all links
            navbarLinks.forEach(link => link.classList.remove("current"));

            // Add 'current' class to the clicked link
            event.target.classList.add("current");
        });
    });

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
});
