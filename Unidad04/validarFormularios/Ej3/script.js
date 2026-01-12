let primerPlan = document.querySelector(".plan");
let btnSeleccionar = document.querySelector("#btnSeleccionar");
let h3Plan = primerPlan.querySelector("h3");
let resultado = document.querySelector("#resultado");

btnSeleccionar.addEventListener("click", function() {
    primerPlan.classList.add("seleccionado");
    h3Plan.textContent = "Plan seleccionado";
    resultado.textContent = "Has seleccionado el plan básico";
});
