let plato = prompt("Elige un plato: pasta, carne, pescado o ensalada");

if (plato === "pasta") {
  console.log("Te recomendamos vino tinto.");
} else if (plato === "carne") {
  console.log("Te recomendamos un vino intenso.");
} else if (plato === "pescado") {
  console.log("Te recomendamos agua con gas.");
} else if (plato === "ensalada") {
  console.log("Te recomendamos zumo natural o agua mineral.");
} else {
        console.log("El plato no es válido.");
}
