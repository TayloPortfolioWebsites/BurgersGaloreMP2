const data21 = null;

const xhr21 = new XMLHttpRequest();
xhr21.withCredentials = true;

xhr21.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
    console.log(this.responseText);
}
});

xhr21.open("GET", "https://burgers1.p.rapidapi.com/burgers");
xhr21.setRequestHeader("X-RapidAPI-Key", "df04f1c24fmshde5a33a6018c024p1d3094jsn0843ff9183e1");
xhr21.setRequestHeader("X-RapidAPI-Host", "burgers1.p.rapidapi.com");

xhr21.onload = function () {
    // BURGER 21
    var response = xhr.response;
    var ObjectData21 = JSON.parse(response);
    console.log(ObjectData21);

    var bname21 = ObjectData21[21].name;
    var burgers21 = document.createElement('li');
    burgers21.innerHTML = bname21;
    document.getElementById('burger-name-21').appendChild(burgers21);

    var dname21 = ObjectData21[21].description;
    var describe21 = document.createElement('li');
    describe21.innerHTML = dname21;
    document.getElementById('burger-description-21').appendChild(describe21);

    var rname21 = ObjectData21[21].restaurant;
    var resto21 = document.createElement('li');
    resto21.innerHTML = "RESTAURANT: "+rname21;
    document.getElementById('burger-restaurant-21').appendChild(resto21);
}
xhr21.send(data21);
