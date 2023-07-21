var smallmenu = false

var links = document.getElementsByClassName("link");
var navbar = document.getElementById("navbar");

function createLink(text, link, id, clazz) {
    var liobj = document.createElement("li");
    var aobj = document.createElement("a");
    aobj.href = link
    aobj.appendChild(document.createTextNode(text));
    liobj.appendChild(aobj);
    liobj.id = id;
    liobj.className = clazz;
    return liobj
}


function resize() {
    if (window.innerWidth < 1406 && !smallmenu) {
        for (let i = 0, len = links.length; i < len; i++) {
            links[i].remove()
          } 
        navbar.appendChild(createLink("Menu","","menubtnsmall",""))
        smallmenu = true
    }

    if (window.innerWidth >= 1406 && smallmenu) {
        document.getElementById("menubtnsmall").remove()
        navbar.appendChild(createLink("Home","/","","link"))
        navbar.appendChild(createLink("Über","/ueber/","","link"))
        navbar.appendChild(createLink("Newsletter","/newsletter/","","link"))
        navbar.appendChild(createLink("Newsletter-Archiv","/newsletter-archiv/","","link"))
        navbar.appendChild(createLink("Geschichte","/geschichte/","","link"))
        navbar.appendChild(createLink("Bewerten","/bewerten/","","link"))
        var aobj = document.createElement("a");
        aobj.href = "/auftrag/"
        aobj.appendChild(document.createTextNode("Auftrag aufgeben"));
        aobj.id = "auftrag-button";
        aobj.className = "link";
        document.getElementById("headerheader").appendChild(aobj)

        smallmenu = false

    }

}

window.onresize = resize;
window.onload = resize;