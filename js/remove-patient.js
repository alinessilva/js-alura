//var patients = document.querySelectorAll(".patient");

var table = document.querySelector("table");

table.addEventListener("dblclick", function(event){
    event.target.parentNode.remove();
});