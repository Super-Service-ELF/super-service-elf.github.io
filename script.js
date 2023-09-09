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
	setTimeout(updateWindow, 100);	
}
function addURLToLink() {
	var targetID = "link";
	var target = document.getElementById(targetID);
	var site = window.location.href;
	var oldLink = target.href;
	var newLink = oldLink.replace("URL", site);
	target.href = newLink;
}
function toggleMenu() {
	if (navigationBar.style.display == "") {
		navigationBar.style.display = "block";
		document.getElementById("header").style.height="600px";
		document.getElementById("mobileMenuButton").style.animation="rotate90 0.3s ease-out forwards";
	}   else {
		navigationBar.style.display = "";
		document.getElementById("header").style.height="180px";
		document.getElementById("mobileMenuButton").style.animation="rotate0 0.3s ease-out";
	}
}
function updateWindow() {
	if (window.innerWidth > 834) {
		document.getElementById("button").innerHTML = "Auftrag aufgeben"
		document.getElementById("navigationBar").style.display = "";
		document.getElementById("header").style.height="180px";
		document.getElementById("mobileMenuButton").style.animation="rotate0 0s ease-out";
	}
	else {
		document.getElementById("button").innerHTML = "Auftrag"
		document.getElementById("header").style.height="180px";
	}
}
window.onresize = updateWindow