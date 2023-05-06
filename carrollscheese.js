const data17 = null;

const xhr17 = new XMLHttpRequest();
xhr17.withCredentials = true;

xhr17.addEventListener("readystatechange", function () {
if (this.readyState === this.DONE) {
    console.log(this.responseText);
}
});

xhr17.open("GET", "https://burgers1.p.rapidapi.com/burgers");
xhr17.setRequestHeader("X-RapidAPI-Key", "df04f1c24fmshde5a33a6018c024p1d3094jsn0843ff9183e1");
xhr17.setRequestHeader("X-RapidAPI-Host", "burgers1.p.rapidapi.com");

xhr17.onload = function () {
    // BURGER 17
    var response = xhr.response;
    var ObjectData17 = JSON.parse(response);
    console.log(ObjectData17);

    var bname17 = ObjectData17[17].name;
    var burgers17 = document.createElement('li');
    burgers17.innerHTML = bname17;
    document.getElementById('burger-name-17').appendChild(burgers17);

    var dname17 = ObjectData17[17].description;
    var describe17 = document.createElement('li');
    describe17.innerHTML = dname17;
    document.getElementById('burger-description-17').appendChild(describe17);

    var rname17 = ObjectData17[17].restaurant;
    var resto17 = document.createElement('li');
    resto17.innerHTML = "RESTAURANT: " + rname17;
    document.getElementById('burger-restaurant-17').appendChild(resto17);

}
xhr17.send(data17);
