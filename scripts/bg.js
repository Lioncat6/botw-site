document.addEventListener('DOMContentLoaded', () => {
    const classes = ['bg1', 'bg2', 'bg3', 'bg4'];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    document.body.classList.add(randomClass);
});