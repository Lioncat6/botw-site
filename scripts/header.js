function toHome() {
    window.parent.location.assign("/");
}

function toCoordinates() {
    window.parent.location.assign("/coordinates");
}

function setSelectedButton() {
    const path = window.parent.location.pathname;
    if (path == "/") {
        document.querySelector('.navButton.home').classList.add('selected');
    } else if (path == "/coordinates") {
        document.querySelector('.navButton.coordinates').classList.add('selected');
    }
}

setSelectedButton();
