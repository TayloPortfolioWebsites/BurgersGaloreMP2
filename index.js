const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
    console.log(this.responseText);
}
});

xhr.open("GET", "https://burgers1.p.rapidapi.com/burgers");
xhr.setRequestHeader("X-RapidAPI-Key", "df04f1c24fmshde5a33a6018c024p1d3094jsn0843ff9183e1");
xhr.setRequestHeader("X-RapidAPI-Host", "burgers1.p.rapidapi.com");

xhr.onload = function () {
    // BURGER 0
    var response = xhr.response;
    var ObjectData = JSON.parse(response);
    console.log(ObjectData);

    var bname = ObjectData[0].name;
    var burgers = document.createElement('li');
    burgers.innerHTML = bname;
    document.getElementById('burger-name-0').appendChild(burgers);

    var dname = ObjectData[0].description;
    var describe = document.createElement('li');
    describe.innerHTML = dname;
    document.getElementById('burger-description-0').appendChild(describe);

    var rname = ObjectData[0].restaurant;
    var resto = document.createElement('li');
    resto.innerHTML = "RESTAURANT: " + rname;
    document.getElementById('burger-restaurant-0').appendChild(resto);
}
xhr.send(data);
