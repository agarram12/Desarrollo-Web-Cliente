let numeros = [3, 7, 10, 15, 20, 25];
let buscar = 15;

for (let i = 0; i < numeros.length; i++) {
  console.log("Comprobando: ", numeros[i]);
  if (numeros[i] === buscar) {
    console.log("Número encontrado", numeros[i]);
    break;
  }
}
