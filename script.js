document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.getElementById("hero");

    let funMode = false;

    const toggleFunMode = () => {
        funMode = !funMode;

        if (funMode) {
            // Wechsel zu Fun-Mode: Anpassung des Designs und Inhalts
            heroSection.style.background = "linear-gradient(45deg, #ffce00 50%, #ff4081 50%)";
            document.querySelector(".job-title").textContent = "Fun Enthusiast";
            document.querySelector("h1 span").textContent = "Daniel 'The Fun' Jacobs";
        } else {
            // Zurück zum Business-Mode
            heroSection.style.background = "linear-gradient(45deg, #ddd 50%, #000 50%)";
            document.querySelector(".job-title").textContent = "Business Analyst";
            document.querySelector("h1 span").textContent = "Daniel Jacobs";
        }
    };

    heroSection.addEventListener("click", toggleFunMode);
});
