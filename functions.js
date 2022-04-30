/* **Iteración #1: Buscar el máximo**

Completa la función que tomando dos números como argumento devuelva el más alto. */

function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        console.log('El número más alto es ', numberOne);
    }
    else {
        console.log('El número más alto es', numberTwo)
    }
  }

  sum(4, 6);