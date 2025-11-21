let fechaInput = prompt("Introduce una fecha (aaaa-MM-dd):");
let fecha = new Date(fechaInput);

let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let dia = fecha.getDay();
console.log("El día de la semana es:", diasSemana[dia]);
