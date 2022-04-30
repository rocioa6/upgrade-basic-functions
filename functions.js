/* **Iteración #1: Buscar el máximo**

Completa la función que tomando dos números como argumento devuelva el más alto. */

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log("El número más alto es ", numberOne);
  } else {
    console.log("El número más alto es", numberTwo);
  }
}

sum(4, 6);

/*   **Iteración #2: Buscar la palabra más larga**

Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(param) {
  let LongestWord = "";
  for(let i = 0; i < param.length; i++) {
      if(param[i].length > LongestWord.length){
          LongestWord = param[i];  
      }
  }
  console.log('La palabra más larga es', LongestWord);
}

findLongestWord(avengers);

/* **Iteración #3: Calcular la suma**

Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 

Puedes usar este array para probar tu función: */
let numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
let sumaTotal = 0;
 for (const number of param) {
     sumaTotal += number;
 }
 console.log('La suma total es', sumaTotal);}

sumAll(numbers);
/* 
**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
let promedio = 0;
 for ( number of param) {
     promedio += number;
 }
 promedio /= param.length;

 console.log('El promedio es', promedio);}
  
average(numbers);