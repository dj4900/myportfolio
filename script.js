document.addEventListener("DOMContentLoaded", () => {
    const selectors = {
        heroSection: document.getElementById("hero"),
        swipeButton: document.querySelector(".swipe-button"),
        jobTitle: document.querySelector(".job-title"),
        nameSpan: document.querySelector("h1 span"),
        profileImageContainer: document.querySelector(".profile-image"),
        aboutMe: document.getElementById("about-me"),
        bootstrapCard: document.getElementById("bootstrap-card"),
        body: document.body,
    };

    let funMode = false;
    let initialGradientStart = 40; // Initiale Startposition für den Schwarzanteil
    const maxGradientStart = 40; // Maximalwert, zu dem es sich zurück verschieben darf
    const minGradientStart = 0; // Minimalwert, wenn komplett schwarz ist

    const updateHeroSection = (isFunMode) => {
        const gradientColors = isFunMode
            ? `linear-gradient(90deg, #ffce00 ${initialGradientStart}%, #ff4081 ${initialGradientStart}%)`
            : `linear-gradient(90deg, #ddd ${initialGradientStart}%, #000 ${initialGradientStart}%)`;

        selectors.body.style.background = gradientColors;

        // Textfarben aktualisieren
        selectors.jobTitle.style.color = isFunMode ? "#ff4081" : "#999";
        selectors.nameSpan.style.color = isFunMode ? "#ff4081" : "#FD6F00";
    };

    const toggleElementsVisibility = (isFunMode) => {
        selectors.profileImageContainer.style.display = isFunMode ? "none" : "flex";
        selectors.aboutMe.style.display = isFunMode ? "none" : "block";

        if (selectors.bootstrapCard) {
            selectors.bootstrapCard.style.display = isFunMode ? "block" : "none";
        }
    };

    const toggleFunMode = () => {
        funMode = !funMode;
        updateHeroSection(funMode);
        toggleElementsVisibility(funMode);
    };

    if (selectors.swipeButton) {
        selectors.swipeButton.addEventListener("click", toggleFunMode);
    }

    // Scroll-Event für dynamische Hintergrundverschiebung
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const scrollDirection = scrollTop > lastScrollTop ? "down" : "up"; // Scrollrichtung ermitteln

        // Dynamisch die Trennlinie basierend auf der Scrollrichtung anpassen
        if (scrollDirection === "down") {
            initialGradientStart = Math.max(initialGradientStart - 0.5, minGradientStart); // Nach links verschieben bis 0%
        } else {
            initialGradientStart = Math.min(initialGradientStart + 0.5, maxGradientStart); // Nach rechts verschieben bis 40%
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Letzte Scrollposition aktualisieren

        const gradientColors = funMode
            ? `linear-gradient(90deg, #ffce00 ${initialGradientStart}%, #ff4081 ${initialGradientStart}%)`
            : `linear-gradient(90deg, #ddd ${initialGradientStart}%, #000 ${initialGradientStart}%)`;

        selectors.body.style.background = gradientColors;
    });
});
