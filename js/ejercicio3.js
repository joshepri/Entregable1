// Solicita al usuario el monto total de su compra
let monto = parseFloat(prompt("Ingrese el monto total de su compra:"));

// Verifica si el monto ingresado es un número válido
if (isNaN(monto) || monto < 0) {
  alert("Por favor, ingrese un número válido.");
} else {
  let descuento = 0;

  // Aplica descuento si el monto es mayor a 100
  if (monto > 10000) {

   let descuento = monto * 0.10;

 alert("Se aplico el miserable descuento del 10%.monto final a pagar")
  }

  // Calcula el monto final a pagar
  let montoFinal = monto - descuento;

  // Muestra el resultado

  alert("Monto final a pagar:
}
