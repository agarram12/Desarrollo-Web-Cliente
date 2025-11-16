let total = Number(prompt("Introduce el total de la compra:"));
let descuento = 0;
let mensaje = "";

switch (true) {
  case (total < 0):
    mensaje = "Cantidad no válida.";
    break;
  case (total < 50):
    descuento = 0;
    mensaje = "No tienes descuento.";
    break;
  case (total < 100):
    descuento = total * 0.05;
    mensaje = "Descuento del 5%.";
    break;
  case (total < 200):
    descuento = total * 0.10;
    mensaje = "Descuento del 10%.";
    break;
  default:
    descuento = total * 0.15;
    mensaje = "Descuento del 15%.";
    break;
}

if (total >= 0) {
  console.log(mensaje);
  console.log("Total con descuento: " + (total - descuento).toFixed(2) + "€");
} else {
  console.log(mensaje);
}
