const data13 = null;

const xhr13 = new XMLHttpRequest();
xhr13.withCredentials = true;

xhr13.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
    console.log(this.responseText);
}
});

xhr13.open("GET", "https://burgers1.p.rapidapi.com/burgers");
xhr13.setRequestHeader("X-RapidAPI-Key", "df04f1c24fmshde5a33a6018c024p1d3094jsn0843ff9183e1");
xhr13.setRequestHeader("X-RapidAPI-Host", "burgers1.p.rapidapi.com");

xhr13.onload = function () {
    // BURGER 13
    var response = xhr.response;
    var ObjectData13 = JSON.parse(response);
    console.log(ObjectData13);

    var bname13 = ObjectData13[13].name;
    var burgers13 = document.createElement('li');
    burgers13.innerHTML = bname13;
    document.getElementById('burger-name-13').appendChild(burgers13);

    var dname13 = ObjectData13[13].description;
    var describe13 = document.createElement('li');
    describe13.innerHTML = dname13;
    document.getElementById('burger-description-13').appendChild(describe13);

    var rname13 = ObjectData13[13].restaurant;
    var resto13 = document.createElement('li');
    resto13.innerHTML = rname13;
    document.getElementById('burger-restaurant-13').appendChild(resto13);

    var rname13 = ObjectData13[13].restaurant;
    var resto13 = document.createElement('li');
    resto13.innerHTML = rname13;
    document.getElementById('burger-restaurant-13').appendChild(resto13);
}
xhr13.send(data13);
