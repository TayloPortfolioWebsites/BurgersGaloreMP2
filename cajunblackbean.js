const data25 = null;

const xhr25 = new XMLHttpRequest();
xhr25.withCredentials = true;

xhr25.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
    console.log(this.responseText);
}
});

xhr25.open("GET", "https://burgers1.p.rapidapi.com/burgers");
xhr25.setRequestHeader("X-RapidAPI-Key", "df04f1c24fmshde5a33a6018c024p1d3094jsn0843ff9183e1");
xhr25.setRequestHeader("X-RapidAPI-Host", "burgers1.p.rapidapi.com");

xhr25.onload = function () {
    // BURGER 25
    var response = xhr.response;
    var ObjectData25 = JSON.parse(response);
    console.log(ObjectData25);

    var bname25 = ObjectData25[25].name;
    var burgers25 = document.createElement('li');
    burgers25.innerHTML = bname25;
    document.getElementById('burger-name-25').appendChild(burgers25);

    var dname25 = ObjectData25[25].description;
    var describe25 = document.createElement('li');
    describe25.innerHTML = dname25;
    document.getElementById('burger-description-25').appendChild(describe25);

    var rname25 = ObjectData25[25].restaurant;
    var resto25 = document.createElement('li');
    resto25.innerHTML = rname25;
    document.getElementById('burger-restaurant-25').appendChild(resto25);

    var rname25 = ObjectData25[25].restaurant;
    var resto25 = document.createElement('li');
    resto25.innerHTML = rname25;
    document.getElementById('burger-restaurant-25').appendChild(resto25);
}
xhr25.send(data25);
