document.addEventListener("DOMContentLoaded", function() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 18px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "10px 18px";
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const classes = ['bg1', 'bg2', 'bg3', 'bg4'];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    document.body.classList.add(randomClass);
});