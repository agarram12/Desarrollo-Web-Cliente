let a = 0;
let b = 1;
let contador = 1;

console.log("Fibonacci 1:", a);
console.log("Fibonacci 2:", b);

while (contador < 23) {
  let siguiente = a + b;
  console.log("Fibonacci " + (contador + 2) + ":", siguiente);
  a = b;
  b = siguiente;
}