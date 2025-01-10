document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");
    footer.style.visibility = "visible"; // Show the footer
    footer.style.animation = "none";
    footer.offsetHeight; /* trigger reflow */
    footer.style.animation = null;
});