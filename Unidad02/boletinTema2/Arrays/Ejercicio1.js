let listaCompra = [];

listaCompra.push("pan");
listaCompra.push("leche");
listaCompra.push("huevos");
listaCompra.push("manzanas");
console.log("Lista: ", listaCompra);

let indice = listaCompra.indexOf("leche");
if (indice !== -1) {
  listaCompra[indice] = "yogur";
}
console.log("Después de sustituir:", listaCompra);
listaCompra.pop();
console.log("Después de borrar el último:", listaCompra);

listaCompra.sort();
console.log("Lista ordenada:", listaCompra);

let posicion = listaCompra.indexOf("pan");
if (posicion !== -1) {
  console.log("El producto 'pan' está en la posición:", posicion);
} else {
  console.log("El producto 'pan' no está en la lista.");
}
