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