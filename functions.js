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
  for (let i = 0; i < param.length; i++) {
    if (param[i].length > LongestWord.length) {
      LongestWord = param[i];
    }
  }
  console.log("La palabra más larga es", LongestWord);
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
  console.log("La suma total es", sumaTotal);
}

sumAll(numbers);
/* 
**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let promedio = 0;
  for (number of param) {
    promedio += number;
  }
  promedio /= param.length;

  console.log("El promedio es", promedio);
}

average(numbers);

/* **Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param) {
  let sumatorio = 0;
  param.forEach(function (element) {
    if (typeof element === "number") {
      sumatorio += element;
    } else if (typeof element === "string") {
      sumatorio += element.length;
    }
  });
  console.log("El promedio de elementos es", sumatorio);
}

averageWord(mixedElements);

/* **Iteración #6: Valores únicos**

Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: */
const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(param) {
  const filteredArray = [];
  param.forEach((item) => {
    if (!filteredArray.includes(item)) {
      filteredArray.push(item);
    }
  });
  console.log("Lista sin duplicados", filteredArray);
}
removeDuplicates(duplicates);

/* **Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función: */
const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(param, findElement) {
  if (param.includes(findElement)) {
    console.log(
      "¿Existe",
      findElement,
      "en la lista? ==>",
      param.includes(findElement),
      "y su indice es",
      param.indexOf(findElement)
    );
  } else {
    console.log(
      "¿Existe",
      findElement,
      "en la lista? ==>",
      param.includes(findElement)
    );
  }
}
finderName(nameFinder, "Pepe");
finderName(nameFinder, "Peter");

/* **Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función: */
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
//solucion con array asociativo
/* function repeatCounter(param) {
  const resultado = {};
   for (const el of param) 
   resultado[el] = resultado[el] + 1 || 1;
   console.log(resultado);
 }
 repeatCounter(counterWords);  */

function repeatCounter(param, count) {
  let counter = 0;
  param.forEach(function (element) {
    if (element === count) {
      counter++;
    }
  });
  console.log(`${count} se repite ${counter} veces`);
}
repeatCounter(counterWords, "code");
