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
});
