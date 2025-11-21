let numeros = [2,3,1,4,5,7,3,2];
let cuadrados = numeros.map(function(num) {
  return num * num;
});

console.log("Array original:", numeros);
console.log("Array con cuadrados:", cuadrados);