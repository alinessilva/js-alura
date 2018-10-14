var fildFilter = document.getElementById("filter-table");

fildFilter.addEventListener("input", function(){

    var patients = document.querySelectorAll(".patient");
    
    for (var i = 0; i < patients.length; i++){
        var patient = patients[i];
        var tdName = patient.querySelector(".info-name");
        var name = tdName.textContent;
        if (name != this.value){
            patient.classList.add("invisible");
        } else {
            patient.classList.remove("invisible");
        }
    }
    
});