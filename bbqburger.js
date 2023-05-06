const data16 = null;

const xhr16 = new XMLHttpRequest();
xhr16.withCredentials = true;

xhr16.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
    console.log(this.responseText);
}
});

xhr16.open("GET", "https://burgers1.p.rapidapi.com/burgers");
xhr16.setRequestHeader("X-RapidAPI-Key", "df04f1c24fmshde5a33a6018c024p1d3094jsn0843ff9183e1");
xhr16.setRequestHeader("X-RapidAPI-Host", "burgers1.p.rapidapi.com");

xhr16.onload = function () {
    // BURGER 16
    var response = xhr.response;
    var ObjectData16 = JSON.parse(response);
    console.log(ObjectData16);

    var bname16 = ObjectData16[16].name;
    var burgers16 = document.createElement('li');
    burgers16.innerHTML = bname16;
    document.getElementById('burger-name-16').appendChild(burgers16);

    var dname16 = ObjectData16[16].description;
    var describe16 = document.createElement('li');
    describe16.innerHTML = dname16;
    document.getElementById('burger-description-16').appendChild(describe16);

    var rname16 = ObjectData16[16].restaurant;
    var resto16 = document.createElement('li');
    resto16.innerHTML = rname16;
    document.getElementById('burger-restaurant-16').appendChild(resto16);

    var rname16 = ObjectData16[16].restaurant;
    var resto16 = document.createElement('li');
    resto16.innerHTML = rname16;
    document.getElementById('burger-restaurant-16').appendChild(resto16);
}
xhr16.send(data16);
