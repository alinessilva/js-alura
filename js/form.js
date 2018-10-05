var addBtn = document.getElementById("add-patient");
addBtn.addEventListener("click", function(event){
event.preventDefault();    

var form = document.getElementById("add-form");

var patient = getPatientForm(form);

var patientTr = buildTr(patient);

if (!validPatient(patient)){
    console.log("Inválido!");
    return;
}

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

function validPatient(patient){
    if (validWeight(patient.weight)){
        return true;
    }
}