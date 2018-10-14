var btnAdd = document.getElementById("find-patients");

btnAdd.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
    var reply = xhr.responseText;
    var patients = JSON.parse(reply);
    patients.forEach(function(patient){
        addPatientTable(patient);
    });
});
    xhr.send();
});

// TO DO 
// Add função com os nomes em português do JSON