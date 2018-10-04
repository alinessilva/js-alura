
var title = document.querySelector(".title");

title.textContent = "O Nutricionista"

var patience = document.getElementById("first-patient");

var weight = patience.querySelector(".info-weight").textContent;

var height = patience.querySelector(".info-height").textContent;

var tdImc = patience.querySelector(".info-imc");

var trueWeight = true;
var trueHeight = true;

if (weight <= 0 || weight > 200){
    trueWeight = false;
    tdImc.textContent = "Peso inválido!";
}

if (height <= 0 || height >=3.00){
    trueHeight = false;
    tdImc.textContent = "Altura inválida";
}

if (trueWeight && trueHeight) {
    var imc = weight / (height * height);
    tdImc.textContent = imc;
}