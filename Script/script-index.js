document.addEventListener("DOMContentLoaded", () => {
    const selectors = {
        funModeButton: document.getElementById("fun-mode-button"),
        jobTitle: document.querySelector(".job-title"),
        nameSpan: document.getElementById("name-span"),
        profileImageContainer: document.getElementById("profile-image-container"),
        body: document.body,
        particlesContainer: document.getElementById("particles-container"),
    };

    let funMode = false;

    const updateUI = () => {
        const gradientColors = funMode
            ? "linear-gradient(75deg, #ffce00 40%, #ff4081 40%)"
            : "linear-gradient(75deg, #ddd 40%, #000 40%)";

        const jobTitleColor = funMode ? "#ff4081" : "#999";
        const nameSpanColor = funMode ? "#ff4081" : "#000";

        const profileImageContent = funMode
            ? "<p style='font-size: 2em; font-weight: bold; color: #ff4081;'>Fun-Mode</p>"
            : "<img src='daniel-jacobs.png' alt='Daniel Jacobs' style='width: 80%; border-radius: 10px;'>";

        const buttonText = funMode ? "Back to Normal" : "Activate Fun-Mode";

        // Apply changes
        selectors.body.style.background = gradientColors;
        selectors.jobTitle.style.color = jobTitleColor;
        selectors.nameSpan.style.color = nameSpanColor;
        selectors.profileImageContainer.innerHTML = profileImageContent;
        selectors.funModeButton.textContent = buttonText;

        updateParticles();
    };

    const updateParticles = () => {
        const particlesConfig = {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 400,
                    },
                },
                color: { value: funMode ? "#ff4081" : "#ffffff" },
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

        // Reload particles
        tsParticles.load(selectors.particlesContainer.id, particlesConfig);
    };

    const toggleFunMode = () => {
        funMode = !funMode;
        updateUI();
    };

    // Event listener for the button
    if (selectors.funModeButton) {
        selectors.funModeButton.addEventListener("click", toggleFunMode);
    }

    // Initialize particles
    updateUI();
});
