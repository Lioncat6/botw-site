document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const classes = ['bg1', 'bg2', 'bg3', 'bg4'];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    document.body.classList.add(randomClass);
});