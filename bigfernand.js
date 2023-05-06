const data22 = null;

const xhr22 = new XMLHttpRequest();
xhr22.withCredentials = true;

xhr22.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
    console.log(this.responseText);
}
});

xhr22.open("GET", "https://burgers1.p.rapidapi.com/burgers");
xhr22.setRequestHeader("X-RapidAPI-Key", "df04f1c24fmshde5a33a6018c024p1d3094jsn0843ff9183e1");
xhr22.setRequestHeader("X-RapidAPI-Host", "burgers1.p.rapidapi.com");

xhr22.onload = function () {
    // BURGER 22
    var response = xhr.response;
    var ObjectData22 = JSON.parse(response);
    console.log(ObjectData22);

    var bname22 = ObjectData22[22].name;
    var burgers22 = document.createElement('li');
    burgers22.innerHTML = bname22;
    document.getElementById('burger-name-22').appendChild(burgers22);

    var dname22 = ObjectData22[22].description;
    var describe22 = document.createElement('li');
    describe22.innerHTML = dname22;
    document.getElementById('burger-description-22').appendChild(describe22);

    var rname22 = ObjectData22[22].restaurant;
    var resto22 = document.createElement('li');
    resto22.innerHTML = "RESTAURANT: " + rname22;
    document.getElementById('burger-restaurant-22').appendChild(resto22);
}
xhr22.send(data22);
