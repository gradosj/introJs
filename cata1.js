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
let myNumber = '33'; /* ----> INTRODUCE AQUI TU NUMERO <----- */
let divisible = false;
let size;


const lit3 = 'Foo';
const lit5 = 'Bar';
const lit7 = 'Quix';

/* La funcion consta de varias partes : 
  a) Bucle que ejecuta x veces la funcion hasta llegar al numero introducido 
  b) Divisiones de resto entre 3, 5 y 7, si se cumplen añadimos a salida los 
    literales correspondientes, sino mueve nuestro numero a salida
  c) Bucle que recorre la longitud de nuestro numero de entrada, si encuentra
     los numeros 3, 5, y 7 añade literal correspondiente a la salida. Controlamos tambien
     con otro condicional, que en la salida no esté nuestro numero de entrada, en este caso
     en vez de añadir el literal, lo asignamos */
const div = (myNumber) => {
  /* Apartado A */
  for (let contador = 1; contador <= myNumber; contador++) {
    /* Apartado B */
    if (contador % 3 == 0) {
      myOutput += lit3;
      divisible = true;

    }
    if (contador % 5 == 0) {
      myOutput += lit5;
      divisible = true;
    }
    if (contador % 7 == 0) {
      myOutput += lit7;
      divisible = true;
    }
    if (divisible == false) {
      myOutput = contador;
    }

    contador = contador.toString();
    /* Apartado C */
    for (let n = 0; n < contador.length; n++) {
      switch (contador.charAt(n)) {
        case '3':
          if (myOutput == contador) {
            myOutput = lit3;
          } else {
            myOutput += lit3;
          }

          break;
        case '5':
          if (myOutput == contador) {
            myOutput = lit5;
          } else {
            myOutput += lit5;
          }
          break;
        case '7':
          if (myOutput == contador) {
            myOutput = lit7;
          } else {
            myOutput += lit7;
          }
          break;
      }
    }
    console.log(myOutput)
    myOutput = '';
    divisible = false;
  }


}

/*Validamos el numero de entrada */
if (myNumber < 0 || myNumber > 100) {
  console.log('Error: introduzca numero de 1 a 100')
}
else {

  div(myNumber);

}
