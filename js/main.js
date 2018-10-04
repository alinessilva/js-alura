
var title = document.querySelector(".title");

title.textContent = "O Nutricionista"

var patience = document.getElementById("first-patient");

var weight = patience.querySelector(".info-weight").textContent;

var height = patience.querySelector(".info-height").textContent;

var tdImc = patience.querySelector(".info-imc");

var imc = weight / (height * height);

tdImc.textContent = imc;

