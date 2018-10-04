var addBtn = document.getElementById("add-patient");
addBtn.addEventListener("click", function(event){
event.preventDefault();    

var form = document.getElementById("add-form");

// Extrai info do paciente do form
var patient = getPatientForm(form);

// Cria a td e tr do paciente
var patientTr = buildTr(patient);

// Add o paciente na tabela
var table = document.getElementById("table-patient");

table.appendChild(patientTr);

});

function getPatientForm(form){
    var patient = {
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        imc: calcImc(form.weight.value, form.height.value)
    }
    return patient
}

function buildTr(patient){
    var patientTr = document.createElement("tr");

    var nameTd = document.createElement("td");
    var weightTd = document.createElement("td");
    var heightTd = document.createElement("td");
    var fatTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nameTd.textContent = patient.name;
    weightTd.textContent = patient.weight;
    heightTd.textContent = patient.height;
    fatTd.textContent = patient.fat;
    imcTd.textContent = patient.imc;

    patientTr.appendChild(nameTd);
    patientTr.appendChild(weightTd);
    patientTr.appendChild(heightTd);
    patientTr.appendChild(fatTd);
    patientTr.appendChild(imcTd);

    return patientTr;
}