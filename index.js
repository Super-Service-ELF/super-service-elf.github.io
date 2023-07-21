window.onload = function () {
    var navbar = document.getElementById("navbar")
}
function togglemenu() {
    if (navbar.style.display == "") {
        navbar.style.display = "block";
        document.getElementById("header").style.height="800px";
    }   else {
        navbar.style.display = "";
        document.getElementById("header").style.height="180px";
    }
}
