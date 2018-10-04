
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
        patient.classList.add("invalid-patient");
    }

    if (height <= 0 || height >=3.00){
        trueHeight = false;
        tdImc.textContent = "Altura inválida";
        patient.classList.add("invalid-patient");
    }

    if (trueWeight && trueHeight) {
        var imc = weight / (height * height);
        tdImc.textContent = imc.toFixed(2);
    }
}

var addBtn = document.getElementById("add-patient");
addBtn.addEventListener("click", function(event){
event.preventDefault();    

var form = document.getElementById("add-form");

var name = form.name.value;
var weight = form.weight.value;
var height = form.height.value;
var fat = form.fat.value;

var patientTr = document.createElement("tr");

var nameTd = document.createElement("td");
var weightTd = document.createElement("td");
var heightTd = document.createElement("td");
var fatTd = document.createElement("td");
var imcTd = document.createElement("td");

nameTd.textContent = name;
weightTd.textContent = weight;
heightTd.textContent = height;
fatTd.textContent = fat;

patientTr.appendChild(nameTd);
patientTr.appendChild(weightTd);
patientTr.appendChild(heightTd);
patientTr.appendChild(fatTd);

var table = document.getElementById("table-patient");

table.appendChild(patientTr);

});