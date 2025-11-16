let fechaNacimientoInput = prompt("Introduce tu fecha de nacimiento (aaaa-mm-dd):");
let fechaNacimiento = new Date(fechaNacimientoInput);
let hoy = new Date();
let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

console.log("La edad es:", edad);
