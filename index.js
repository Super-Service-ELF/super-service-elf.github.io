function loadExternalHTML(targetID) {
    var url = "/content/" + targetID + ".html";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var target = document.getElementById(targetID);
            target.innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}
function loadExternalHTMLs(targetIDs) {
    for (let targetID of targetIDs) {
        loadExternalHTML(targetID);
    }
}
function toggleMenu() {
    if (navigationBar.style.display == "") {
        navigationBar.style.display = "block";
        document.getElementById("header").style.height="800px";
        document.getElementById("mobileMenuButton").style.animation="rotate90 0.3s ease-out forwards";
    }   else {
        navigationBar.style.display = "";
        document.getElementById("header").style.height="180px";
        document.getElementById("mobileMenuButton").style.animation="rotate0 0.3s ease-out";
    }
}

window.onresize = function () {
    if (window.innerWidth > 1400) {
        navigationBar.style.display = "";
        document.getElementById("header").style.height="180px";
        document.getElementById("mobileMenuButton").style.animation="rotate0 0s ease-out";

    }
}
