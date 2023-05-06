const data10 = null;

const xhr10 = new XMLHttpRequest();
xhr10.withCredentials = true;

xhr10.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
    console.log(this.responseText);
}
});

xhr10.open("GET", "https://burgers1.p.rapidapi.com/burgers");
xhr10.setRequestHeader("X-RapidAPI-Key", "dc64da9514msh0cd196877e63c46p1b3a83jsnf7dfdfca7bb1");
xhr10.setRequestHeader("X-RapidAPI-Host", "burgers1.p.rapidapi.com");

xhr10.onload = function () {
    // BURGER 10
    var response = xhr.response;
    var ObjectData10 = JSON.parse(response);
    console.log(ObjectData10);

    var bname10 = ObjectData10[10].name;
    var burgers10 = document.createElement('li');
    burgers10.innerHTML = bname10;
    document.getElementById('burger-name-10').appendChild(burgers10);

    var dname10 = ObjectData10[10].description;
    var describe10 = document.createElement('li');
    describe10.innerHTML = dname10;
    document.getElementById('burger-description-10').appendChild(describe10);

    var rname10 = ObjectData10[10].restaurant;
    var resto10 = document.createElement('li');
    resto10.innerHTML = "RESTAURANT: " + rname10;
    document.getElementById('burger-restaurant-10').appendChild(resto10);
}
xhr10.send(data10);
