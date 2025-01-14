document.addEventListener("DOMContentLoaded", function () {
	const header = document.querySelector("header");
	header.style.visibility = "visible"; // Show the header
	header.style.animation = "none";
	header.offsetHeight; /* trigger reflow */
	header.style.animation = null;
});

function toHome() {
    const path = window.parent.location.pathname;
    if (path != "/") {
        playMenuClick();
        document.querySelector(".navButton.home").classList.add("selected");
        document.querySelector(".navButton.coordinates").classList.remove("selected");
        document.querySelector(".navButton.about").classList.remove("selected");
        triggerFlyOutAnimation();
        setTimeout(() => {
            window.parent.location.assign("/");
        }, 200); // Match the duration of the fly-out animation
    }
}

function toCoordinates() {
    const path = window.parent.location.pathname;
    if (path != "/coordinates/") {
        playMenuClick();
        document.querySelector(".navButton.home").classList.remove("selected");
        document.querySelector(".navButton.coordinates").classList.add("selected");
        document.querySelector(".navButton.about").classList.remove("selected");
        triggerFlyOutAnimation();
        setTimeout(() => {
            window.parent.location.assign("/coordinates");
        }, 200); // Match the duration of the fly-out animation
    }
}

function toFAQ() {
    const path = window.parent.location.pathname;
    if (path != "/faq/") {
        playMenuClick();
        document.querySelector(".navButton.home").classList.remove("selected");
        document.querySelector(".navButton.coordinates").classList.remove("selected");
        document.querySelector(".navButton.about").classList.add("selected");
        triggerFlyOutAnimation();
        setTimeout(() => {
            window.parent.location.assign("/faq");
        }, 200); // Match the duration of the fly-out animation
    }
}

function triggerFlyOutAnimation() {
	const header = document.querySelector("header");
	const footer = window.parent.document.querySelector("footer");
	header.style.animation = "slideOutToTop 0.4s ease-out";
	footer.style.animation = "slideOutToBottom 0.4s ease-out";

	setTimeout(() => {
		header.style.visibility = "hidden";
		footer.style.visibility = "hidden";
	}, 350); // Match the duration of the fly-out animation
}

function setSelectedButton() {
	const path = window.parent.location.pathname;
	if (path == "/") {
		document.querySelector(".navButton.home").classList.add("selected");
	} else if (path == "/coordinates/") {
		document.querySelector(".navButton.coordinates").classList.add("selected");
	} else if (path == "/faq/") {
		document.querySelector(".navButton.about").classList.add("selected");
	}
}

setSelectedButton();

function playMenuClick() {
	if (navigator.vibrate) {
		navigator.vibrate(100); // Vibrate for 100 milliseconds
	}
	const audio = new Audio("/assets/audio/menuClick.mp3");
	audio.play();
}
