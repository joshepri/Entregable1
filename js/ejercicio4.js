// Genera un número aleatorio entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

//Numero de intento 

let intentosmaximos = 3;
let Adivinado = falso;

//bucle de los intentos

for(let intentos = 1; intentos <= intentosmaximos; intentos++) 
    (let respuesta = prompt ("intentos ${intento} de $ {intentosmaximos}: adivina el numero entre (1 y 10)"))
// Pide al usuario que adivine el número
let intento = prompt("Adivina un número entre 1 y 10:");

// Verifica si el número ingresado es válido
if (isNaN(intento) || intento < 1 || intento > 10) {

  alert("Por favor, ingresa un número válido entre 1 y 10.");

} 

else {
  // Verifica si adivinó correctamente
  if (intento === numeroSecreto) {

    alert("¡Felicidades muñeco hermoso, adivinaste el número!");

  } 
  
  else {
    
    alert("Intetalo de nuevo malo de mrd, el número era " + numeroSecreto);

  }
}
