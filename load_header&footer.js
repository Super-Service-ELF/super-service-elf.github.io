function loadExternalHTML(targetID) {
    var url = "content/" + targetID + ".html";
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
loadExternalHTML("header");
loadExternalHTML("footer");