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

    const updateParticles = (isFunMode) => {
        const particlesConfig = {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 400, // Partikel nur im schwarzen Bereich
                    },
                },
                color: { value: isFunMode ? "#ff4081" : "#ffffff" }, // Farben ändern
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 3 },
                move: {
                    enable: true,
                    speed: 1,
                },
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "repulse" },
                    onClick: { enable: true, mode: "push" },
                },
            },
        };

        // Lade neue Partikel-Konfiguration
        tsParticles.load("particles-container", particlesConfig);
    };

    const toggleFunMode = () => {
        funMode = !funMode;
        updateHeroSection(funMode);
        updateProfileImage(funMode);
        updateParticles(funMode);
    };

    if (selectors.swipeButton) {
        selectors.swipeButton.addEventListener("click", toggleFunMode);
    }

    // Initialisiere Partikel
    updateParticles(funMode);
});
