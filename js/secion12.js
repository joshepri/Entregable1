// ciclo for numeros del 1 al 10

for(let i=1; i<=10; i++){

console.log("Estas en la repeticion", i)

}

//ciclo while
//declarar la variable

let j = 1

//crear el bucle while

while (j<4){
    console.log(j)
    j=j+2
}
//recorrer un arreglo

let array = ["casa", "pintura", "sol"]
for (let i = 0; i<array.length; i++){
    console.log(array[i])
}

//pedir contraseña al usuario 

let contra
let contraseña = "pornohub"

do{
    //se cumplira al menos una vez
    contra=prompt("ingrese una contraseña")
}

while(contra != contraseña)
    alert("contraseña correcta, bienvenido pajero")

//bucle que calcule el promedio de un arreglo 

array=[4,5,3,2,4,5]
suma=0
for(let i = 0; i<array.length; i++){
    suma=suma+array[1]
}
console.log("la suma es", suma)
promedio=suma/array.length
console.log("el promedio es", promedio)