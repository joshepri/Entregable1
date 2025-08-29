//crear una funcion

function saludo(nombre){

    console.log(nombre,"hola como estas")

}

nom = prompt("ey ingresa tu nombre")
console.log(saludo(nom))

//funcion sumar

function suma(num1,num2){

return (num1+num2)

}

console.log(suma(2,7))

//funcion calculadora

let numero1 = 32
let numero2 = 48
let resultado
function realizarOperacion(numero1, numero2,operacion){

    if(operacion == "suma"){
        resultado = numero1+numero2
        return resultado
    }

    else if(operacion == "resta"){
        resultado = numero1 - numero2
        return resultado
    }
    else if (operacion == "multiplicacion"){
    resultado = numero1*numero2
    return resultado
 }
    else if (operacion == "division"){
     if(numero2==0){
    console.log("La division entre 0 no se puede") 
}
    else{
    resultado = numero1/numero2
    return resultado 
 }
 }
else{
console.log("Elige una operación valida")
}
}

operacion = prompt("Elige una operacion: suma, resta, multiplicacion o division. Si deseas salir escribe salir")
while(operacion != "salir"){
numero1 = parseInt(prompt("Ingresa el primer número: "))
numero2= parseInt(prompt("Ingresa el segundo número: "))
console.log("El resultado de la", operacion, "es", realizarOperacion (numero1, numero2, operacion))
}