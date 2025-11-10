// Script que convierte de celsius a fahrenheit y kelvin
let celsius = Number(prompt("Introduce la temperatura en celsius"));
let fahrenheit = (celsius * 9 / 5) + 32;
let kelvin = celsius + 273.15;
console.log(`${celsius} grados celsius son ${fahrenheit} fahrenheit y ${kelvin} kelvin`);