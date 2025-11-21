let numero = parseInt(prompt("Introduce el número del DNI (sin letra): "));
let letraIntroducida = prompt("Introduce la letra del DNI: ").toUpperCase();
let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
let letraCorrecta = letras[numero % 23];

console.log("Número: " + numero);
console.log("Letra introducida: " + letraIntroducida);
console.log("Letra correcta: " + letraCorrecta);

if (letraIntroducida === letraCorrecta) {
  console.log("El DNI es correcto.");
} else {
  console.log("La letra no coincide.");
}
