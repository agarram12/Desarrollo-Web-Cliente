let num1 = Number(prompt("Introduce un número"));
let num2 = Number(prompt("Introduce otro número"));
if (num1 > num2) {
    alert(`El número ${num1} es mayor`);
} else if (num1 < num2) {
    alert(`El número ${num2} es mayor`);
} else {
    alert(`El número ${num1} y ${num2} son iguales`);
}