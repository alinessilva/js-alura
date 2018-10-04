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
imcTd.textContent = calcImc(weight, height);

patientTr.appendChild(nameTd);
patientTr.appendChild(weightTd);
patientTr.appendChild(heightTd);
patientTr.appendChild(fatTd);
patientTr.appendChild(imcTd);

var table = document.getElementById("table-patient");

table.appendChild(patientTr);

});