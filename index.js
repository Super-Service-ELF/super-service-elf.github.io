window.onload = function () {
    var navbar = document.getElementById("navbar")
}
function togglemenu() {
    if (navbar.style.display == "") {
        navbar.style.display = "block";
        document.getElementById("header").style.height="800px";
        document.getElementById("mobile-menu-button").style.animation="rotate90 0.3s ease-out forwards";
    }   else {
        navbar.style.display = "";
        document.getElementById("header").style.height="180px";
        document.getElementById("mobile-menu-button").style.animation="rotate0 0.3s ease-out";
    }
}
