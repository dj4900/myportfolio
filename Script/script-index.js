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
    window.location = "funmode.html";
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
    window.location = "funmode.html";
  }

  sliderOpacity.style.width = "0";
  sliderOpacity.style.height = "0";
  sliderButton.style.left = "9px";
});

// swiper code end

// humburger code start

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");
  const closeIcon = document.getElementById("close-icon");

  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuIcon.classList.toggle("active");
  });

  closeIcon.addEventListener("click", () => {
    menu.classList.remove("open");
    menuIcon.classList.remove("active");
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.classList.remove("open");
      menuIcon.classList.remove("active");
    }
  });
});

// humburger code end

// navbar start

document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll("#navbar a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Remove 'current' class from all links
      navbarLinks.forEach((link) => link.classList.remove("current"));

      // Add 'current' class to the clicked link
      event.target.classList.add("current");
    });
  });
});

// navbar end

// mobile navbar start

document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll("#mobileNavbar a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Remove 'current' class from all links
      navbarLinks.forEach((link) => link.classList.remove("current-mobile"));

      // Add 'current' class to the clicked link
      event.target.classList.add("current-mobile");
    });
  });
});

// mobile navbar end
