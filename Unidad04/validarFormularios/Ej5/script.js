let contenedorTareas = document.getElementById("contenedorTareas");
let tareas = document.getElementsByClassName("tarea");
let btnModificar = document.getElementById("btnModificar");
let btnBorrar = document.getElementById("btnBorrar");

btnModificar.addEventListener("click", function() {
    if (tareas.length > 0) {
        tareas[0].querySelector(".descripcion").textContent = "Tarea actualizada";
        tareas[0].setAttribute("data-estado", "completada");
    }
});

btnBorrar.addEventListener("click", function() {
    if (tareas.length > 0) {
        contenedorTareas.removeChild(tareas[0]);
    }
});
