/*# Primera Kata
## FooBarQuix

Nos dan un número entre el 1 y 100, y tenemos que devolver por orden lo siguiente:

* Si el número es divisible por 3, escribiremos “Foo” en lugar del número
* Si el número es divisible por 5, añadimos “Bar”
* Si el número es divisible por 7, añadimos “Quix”.
* Por cada dígito 3,5 o 7, añadiremos “Foo”, “Bar”, “Quix” respectivamente y en orden de aparición.

### Ejemplos: 

* 1  -> 1
* 2  -> 2
* 3  -> FooFoo (divisible por 3, contiene 3)
* 4  -> 4
* 5  -> BarBar (divisible por 5, contains 5)
* 6  -> Foo (divisible por 3)
* 7  -> QuixQuix (divisible por 7, contiene 7)
* 8  -> 8
* 9  -> Foo
* 10 -> Bar
* 13 -> Foo 
* 15 -> FooBarBar (divisible por 3, divisible por 5, contiene 5)
* 21 -> FooQuix
* 33 -> FooFooFoo (divisible por 3, contiene 3)
* 51 -> FooBar
* 53 -> BarFoo
* 75 -> FooBarQuixBar(divisible por 3, divisible por 5, contiene un 7, contiene un 5)*/


let myOutput = '';
let myNumber = '75'; /* ----> INTRODUCE AQUI TU NUMERO <----- */
let divisible = false;

const lit3 = 'Foo';
const lit5 = 'Bar';
const lit7 = 'Quix';

var div = (myNumber) => {
  if (myNumber % 3 == 0) {

    myOutput += lit3;
    divisible = true;
  }

  if (myNumber % 5 == 0) {

    myOutput += lit5;
    divisible = true;

  }

  if (myNumber % 7 == 0) {

    myOutput += lit7;
    divisible = true;
}
}
div(myNumber);

if (divisible == false) {
  myOutput = myNumber;
}
else {
  restText();
}


console.log(myOutput)

/*
function div(number) {
  if (myNumber % 3 == 0) {

    myOutput += lit3;
    divisible = true;
  }

  if (myNumber % 5 == 0) {

    myOutput += lit5;
    divisible = true;

  }

  if (myNumber % 7 == 0) {

    myOutput += lit7;
    divisible = true;
}
}
*/

function restText() {
  for (let n = 0; n < myNumber.length; n++) {
    switch (myNumber.charAt(n)) {
      case '3':
        myOutput += lit3;
        break;
      case '5':
        myOutput += lit5;
        break;
      case '7':
        myOutput += lit7;
        break;

    }
  }
}