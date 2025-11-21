let numero = parseInt(prompt("Introduce un número: "));
console.log("Tabla de multiplicar del " + numero + ":");
for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}
