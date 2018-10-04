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

form.reset();

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
    patientTr.classList.add("patient");

    patientTr.appendChild(buildTd(patient.name, "info-name"));
    patientTr.appendChild(buildTd(patient.weight, "info-weight"));
    patientTr.appendChild(buildTd(patient.height, "info-height"));
    patientTr.appendChild(buildTd(patient.fat, "info-fat"));
    patientTr.appendChild(buildTd(patient.imc, "info-imc"));

    return patientTr;
}

function buildTd(content, className){
    var td = document.createElement("td");
    td.textContent = content;
    td.classList.add(className);
    return td;
}