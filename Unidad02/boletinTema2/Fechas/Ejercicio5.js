let fecha = new Date("2025-03-07");

console.log("Fecha original:", fecha.toLocaleDateString());
fecha.setFullYear(2030);
console.log("Fecha modificada:", fecha.toLocaleDateString());
