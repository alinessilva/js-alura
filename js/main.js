
var title = document.querySelector(".title");

title.textContent = "O Nutricionista"

var patients = document.querySelectorAll(".patient");

for (var i = 0; i < patients.length; i++) {
    var patient = patients[i];

    var weight = patient.querySelector(".info-weight").textContent;

    var height = patient.querySelector(".info-height").textContent;

    var tdImc = patient.querySelector(".info-imc");

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
        tdImc.textContent = imc.toFixed(2);
    }
}