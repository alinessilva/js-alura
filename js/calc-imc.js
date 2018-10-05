var patients = document.querySelectorAll(".patient");

for (var i = 0; i < patients.length; i++) {
    var patient = patients[i];

    var weight = patient.querySelector(".info-weight").textContent;

    var height = patient.querySelector(".info-height").textContent;

    var tdImc = patient.querySelector(".info-imc");

    var trueWeight = validWeight(weight);
    var trueHeight = validHeight(height);

    if (!trueWeight){
        trueWeight = false;
        tdImc.textContent = "Peso inválido!";
        patient.classList.add("invalid-patient");
    }

    if (!trueHeight){
        trueHeight = false;
        tdImc.textContent = "Altura inválida";
        patient.classList.add("invalid-patient");
    }

    if (trueWeight && trueHeight) {
        var imc = calcImc(weight, height);
        tdImc.textContent = imc;
    }
}

function calcImc (weight, height){
    var imc = 0;
    imc = weight / (height * height);
    return imc.toFixed(2);
}

function validWeight(weight){
    if (weight >= 0 && weight <= 200){
        return true;
    }
}

function validHeight(height){
    if (height >= 0 && height <=3.00){
        return true;
    }
}