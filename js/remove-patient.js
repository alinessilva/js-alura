//var patients = document.querySelectorAll(".patient");

var table = document.querySelector("table");

table.addEventListener("dblclick", function(event){
    var targetEvent = event.target;
    var fatherTarget = targetEvent.parentNode;
    fatherTarget.remove();
});