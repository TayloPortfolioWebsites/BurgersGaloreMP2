const data12 = null;

const xhr12 = new XMLHttpRequest();
xhr12.withCredentials = true;

xhr12.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
    console.log(this.responseText);
}
});

xhr12.open("GET", "https://burgers1.p.rapidapi.com/burgers");
xhr12.setRequestHeader("X-RapidAPI-Key", "dc64da9514msh0cd196877e63c46p1b3a83jsnf7dfdfca7bb1");
xhr12.setRequestHeader("X-RapidAPI-Host", "burgers1.p.rapidapi.com");

xhr12.onload = function () {
    // BURGER 12
    var response = xhr.response;
    var ObjectData12 = JSON.parse(response);
    console.log(ObjectData12);

    var bname12 = ObjectData12[12].name;
    var burgers12 = document.createElement('li');
    burgers12.innerHTML = bname12;
    document.getElementById('burger-name-12').appendChild(burgers12);

    var dname12 = ObjectData12[12].description;
    var describe12 = document.createElement('li');
    describe12.innerHTML = dname12;
    document.getElementById('burger-description-12').appendChild(describe12);

    var rname12 = ObjectData12[12].restaurant;
    var resto12 = document.createElement('li');
    resto12.innerHTML = rname12;
    document.getElementById('burger-restaurant-12').appendChild(resto12);
}
xhr12.send(data12);
