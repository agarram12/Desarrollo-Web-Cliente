let nota = Number(prompt("Introduce la nota"));
if (nota < 5) {
    console.log("Suspenso");
} else if (nota > 5 || nota < 6.99) {
    console.log("Aprobado");
} else if (nota > 7 || nota < 8.99) {
    console.log("Aprobado");
} else {
    console.log("Sobresaliente");
}