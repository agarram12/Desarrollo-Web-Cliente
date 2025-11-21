let persona = {
  nombre: "Álvaro",
  edad: 19,
  ciudad: "Cádiz"
};

console.log("Recorriendo con for in: ");
for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]);
}

console.log("Recorriendo con .entries(): ");
for (let [clave, valor] of Object.entries(persona)) {
  console.log(clave + ": " + valor);
}
