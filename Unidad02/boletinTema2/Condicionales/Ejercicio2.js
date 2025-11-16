let creditos = parseInt(prompt("Introduce la cantidad de créditos:"));

if (creditos < 0) {
  console.log("Necesitas creditos para entrar a una sala.");
} else if (creditos < 10) {
  console.log("No puedes acceder a ninguna sala.");
} else if (creditos < 20) {
  console.log("Puedes acceder a la Sala Básica.");
} else if (creditos < 30) {
  console.log("Puedes acceder a la Sala Intermedia.");
} else {
  console.log("Puedes acceder a todas las salas.");
}
