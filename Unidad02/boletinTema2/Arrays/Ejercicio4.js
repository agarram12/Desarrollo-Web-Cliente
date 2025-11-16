let edades = [14,19,25,23,11,59,48];
let mayorEdad = edades.filter(function(edad) {
    return edad >= 18;
})

console.log("Edades sin modificar: " + edades);
console.log("Edades filtradas: " + mayorEdad);