document.addEventListener("DOMContentLoaded", () => {
    const selectors = {
        heroSection: document.getElementById("hero"),
        swipeButton: document.querySelector(".swipe-button"),
        jobTitle: document.querySelector(".job-title"),
        nameSpan: document.querySelector("h1 span"),
        profileImageContainer: document.querySelector(".profile-image"),
        body: document.body,
    };

    let funMode = false;

    const updateHeroSection = (isFunMode) => {
        const gradientColors = isFunMode
            ? "linear-gradient(75deg, #ffce00 40%, #ff4081 40%)"
            : "linear-gradient(75deg, #ddd 40%, #000 40%)";

        selectors.body.style.background = gradientColors;

        // Update Textfarbe je nach Modus
        selectors.jobTitle.style.color = isFunMode ? "#ff4081" : "#999";
        selectors.nameSpan.style.color = isFunMode ? "#ff4081" : "#000";
    };

    const updateProfileImage = (isFunMode) => {
        selectors.profileImageContainer.innerHTML = isFunMode
            ? "<p style='font-size: 2em; font-weight: bold; color: #ff4081;'>Fun-Mode</p>"
            : "<img src='daniel-jacobs.png' alt='Daniel Jacobs' style='width: 80%; border-radius: 10px;'>";
    };

    const toggleFunMode = () => {
        funMode = !funMode;
        updateHeroSection(funMode);
        updateProfileImage(funMode);
    };

    if (selectors.swipeButton) {
        selectors.swipeButton.addEventListener("click", toggleFunMode);
    }

    // Scroll-Event für den dynamischen Hintergrundverlauf
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = Math.min(scrollTop / maxScroll, 1);

        const gradientStart = Math.min(40 + scrollPercentage * 60, 100);

        // Hintergrund mit dynamischem Verlauf, je nach Modus
        const gradientColors = funMode
            ? `linear-gradient(75deg, #ffce00 ${gradientStart}%, #ff4081 ${gradientStart}%)`
            : `linear-gradient(75deg, #ddd ${gradientStart}%, #000 ${gradientStart}%)`;

        selectors.body.style.background = gradientColors;
    });
});
