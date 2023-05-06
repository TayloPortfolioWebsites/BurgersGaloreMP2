const data11 = null;

const xhr11 = new XMLHttpRequest();
xhr11.withCredentials = true;

xhr11.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
    console.log(this.responseText);
}
});

xhr11.open("GET", "https://burgers1.p.rapidapi.com/burgers");
xhr11.setRequestHeader("X-RapidAPI-Key", "dc64da9514msh0cd196877e63c46p1b3a83jsnf7dfdfca7bb1");
xhr11.setRequestHeader("X-RapidAPI-Host", "burgers1.p.rapidapi.com");

xhr11.onload = function () {
    // BURGER 11
    var response = xhr.response;
    var ObjectData11 = JSON.parse(response);
    console.log(ObjectData11);

    var bname11 = ObjectData11[11].name;
    var burgers11 = document.createElement('li');
    burgers11.innerHTML = bname11;
    document.getElementById('burger-name-11').appendChild(burgers11);

    var dname11 = ObjectData11[11].description;
    var describe11 = document.createElement('li');
    describe11.innerHTML = dname11;
    document.getElementById('burger-description-11').appendChild(describe11);

    var rname11 = ObjectData11[11].restaurant;
    var resto11 = document.createElement('li');
    resto11.innerHTML = "RESTAURANT: " + rname11;
    document.getElementById('burger-restaurant-11').appendChild(resto11);
}
xhr11.send(data11);
