let fechaTexto = "2025-03-07";
let fecha = new Date(fechaTexto);

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1; 
let dia = fecha.getDate();

console.log("Año:", anio);
console.log("Mes:", mes);
console.log("Día:", dia);
