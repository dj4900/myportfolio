// swiper code start

const sliderContainer = document.getElementById("swiperBackground");
const sliderButton = document.getElementById("swiper");
const sliderOpacity = document.getElementById("swiperOpacity");

let isDragging = false;
let startX;

sliderButton.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;

    const containerRect = sliderContainer.getBoundingClientRect();

    sliderOpacity.style.height = `${sliderButton.offsetHeight}px`;
    sliderOpacity.style.top = `${sliderButton.offsetTop}px`;

    const initialWidth = Math.max(9, e.clientX - containerRect.left);
    sliderOpacity.style.width = `${initialWidth}px`;
    sliderOpacity.style.left = "9px";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const containerRect = sliderContainer.getBoundingClientRect();
    let newWidth = e.clientX - containerRect.left;

    newWidth = Math.max(9, Math.min(newWidth, containerRect.width - 30));
    sliderOpacity.style.width = `${newWidth}px`;

    let buttonLeft = e.clientX - startX + 9;
    buttonLeft = Math.max(
        9,
        Math.min(buttonLeft, containerRect.width - sliderButton.offsetWidth - 9)
    );
    sliderButton.style.left = `${buttonLeft}px`;
});

document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;

    const containerRect = sliderContainer.getBoundingClientRect();
    const buttonRect = sliderButton.getBoundingClientRect();

    if (buttonRect.right >= containerRect.right - 15) {
        window.location = "index.html";
    }

    sliderOpacity.style.width = "0";
    sliderOpacity.style.height = "0";
    sliderButton.style.left = "9px";
});

sliderButton.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;

    const containerRect = sliderContainer.getBoundingClientRect();

    sliderOpacity.style.height = `${sliderButton.offsetHeight}px`;
    sliderOpacity.style.top = `${sliderButton.offsetTop}px`;

    const initialWidth = Math.max(9, e.touches[0].clientX - containerRect.left);
    sliderOpacity.style.width = `${initialWidth}px`;
    sliderOpacity.style.left = "9px";
});

document.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const containerRect = sliderContainer.getBoundingClientRect();
    let newWidth = e.touches[0].clientX - containerRect.left;

    newWidth = Math.max(9, Math.min(newWidth, containerRect.width - 30));
    sliderOpacity.style.width = `${newWidth}px`;

    let buttonLeft = e.touches[0].clientX - startX + 9;
    buttonLeft = Math.max(
        9,
        Math.min(buttonLeft, containerRect.width - sliderButton.offsetWidth - 9)
    );
    sliderButton.style.left = `${buttonLeft}px`;
});

document.addEventListener("touchend", () => {
    if (!isDragging) return;
    isDragging = false;

    const containerRect = sliderContainer.getBoundingClientRect();
    const buttonRect = sliderButton.getBoundingClientRect();

    if (buttonRect.right >= containerRect.right - 9) {
        window.location = "index.html";
    }

    sliderOpacity.style.width = "0";
    sliderOpacity.style.height = "0";
    sliderButton.style.left = "9px";
});

// swiper code end


