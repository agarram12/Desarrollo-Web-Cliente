let descripcion = document.getElementById("descripcion");
let btnMostrar = document.getElementById("btnMostrar");
let btnOcultar = document.getElementById("btnOcultar");

btnMostrar.addEventListener("click", function() {
    descripcion.style.display = "block";
    btnMostrar.textContent = "Descripción visible";
});

btnOcultar.addEventListener("click", function() {
    descripcion.style.display = "none";
    btnOcultar.textContent = "Descripción oculta";
});
