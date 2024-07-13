
/* Open Sidebar */
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.body.classList.add("overlay");
    document.addEventListener("click", closeNavOnClickOutside);
}

/* Close Sidebar */
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.body.classList.remove("overlay");
    document.removeEventListener("click", closeNavOnClickOutside);
}

/* Close with click */
function closeNavOnClickOutside(event) {
    const sidebar = document.getElementById("sidebar");
    const openBtn = document.querySelector(".openbtn");
    if (!sidebar.contains(event.target) && !openBtn.contains(event.target)) {
        closeNav();
    }
}

function lightDarkTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        document.getElementById("moon").style.display = "revert";
        document.getElementById("sun").style.display = "none";
    }
    else {
        document.getElementById("moon").style.display = "none";
        document.getElementById("sun").style.display = "revert";
    }
 }