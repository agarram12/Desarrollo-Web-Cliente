let salir = false;
do {
    let numero = Number(prompt("Introduce un número"));
    if(numero === 0) {
        salir = true;
    }
} while (!salir);