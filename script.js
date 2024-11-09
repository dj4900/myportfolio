document.addEventListener("DOMContentLoaded", () => {
    // 1. Selektoren definieren
    const selectors = {
        heroSection: document.getElementById("hero"),
        swipeButton: document.querySelector(".swipe-button"),
        jobTitle: document.querySelector(".job-title"),
        nameSpan: document.querySelector("h1 span"),
        profileImageContainer: document.querySelector(".profile-image"),
    };

    // 2. Initiale Variablen
    let funMode = false;

    // 3. Funktionen
    /**
     * Aktualisiert den Hero-Bereich basierend auf dem Modus.
     * @param {boolean} isFunMode - Gibt an, ob der Fun-Mode aktiv ist.
     */
    const updateHeroSection = (isFunMode) => {
        selectors.heroSection.style.background = isFunMode
            ? "linear-gradient(75deg, #ffce00 40%, #ff4081 40%)"
            : "linear-gradient(75deg, #ddd 40%, #000 40%)";

        selectors.jobTitle.textContent = isFunMode ? "Fun Enthusiast" : "Business Analyst";
        selectors.nameSpan.textContent = "Daniel Jacobs";
    };

    /**
     * Aktualisiert den Inhalt des Profilbildbereichs basierend auf dem Modus.
     * @param {boolean} isFunMode - Gibt an, ob der Fun-Mode aktiv ist.
     */
    const updateProfileImage = (isFunMode) => {
        selectors.profileImageContainer.innerHTML = isFunMode
            ? "<p style='font-size: 2em; font-weight: bold; color: #ff4081;'>Fun-Mode</p>"
            : "<img src='daniel-jacobs.png' alt='Daniel Jacobs' style='width: 80%; border-radius: 10px;'>";
    };

    /**
     * Schaltet zwischen Fun-Mode und Business-Mode um.
     */
    const toggleFunMode = () => {
        funMode = !funMode;
        updateHeroSection(funMode);
        updateProfileImage(funMode);
    };

    // 4. Event-Listener
    if (selectors.swipeButton) {
        selectors.swipeButton.addEventListener("click", toggleFunMode);
    }
});
