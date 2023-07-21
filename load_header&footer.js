var xhr= new XMLHttpRequest();
xhr.open('GET', '/content/header.html', true);
xhr.onreadystatechange= function() {
    document.getElementById('header').innerHTML= this.responseText;
};
xhr.send();


var xhr= new XMLHttpRequest();
xhr.open('GET', '/content/footer.html', true);
xhr.onreadystatechange= function() {
    document.getElementById('footer').innerHTML= this.responseText;
};
xhr.send();