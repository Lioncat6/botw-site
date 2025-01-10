function toHome() {
    document.querySelector('.navButton.coordinates').classList.remove('selected');
    document.querySelector('.navButton.home').classList.add('selected');
    const path = window.parent.location.pathname;
    if (path != "/") {
        window.parent.location.assign("/");
    }
}

function toCoordinates() {
    document.querySelector('.navButton.coordinates').classList.add('selected');
    document.querySelector('.navButton.home').classList.remove('selected');
    const path = window.parent.location.pathname;
    if (path != "/coordinates/") {
        window.parent.location.assign("/coordinates");
    }
}

function setSelectedButton() {
    const path = window.parent.location.pathname;
    if (path == "/") {
        document.querySelector('.navButton.home').classList.add('selected');
    } else if (path == "/coordinates/") {
        document.querySelector('.navButton.coordinates').classList.add('selected');
    }
}

setSelectedButton();
