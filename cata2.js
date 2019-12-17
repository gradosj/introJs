let nRomanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
let nValor = [1, 5, 10, 50, 100, 500, 1000];
let myNumR, myNumA;
let contI = 0, contX = 0, contC = 0, contM = 0, contV = 0,
    contL = 0, contD = 0;
let infoReturn = [false, ' '];
let myNumRom;
let inputNumRom;

/* Funcion de validacion de reglas para los numeros romanos */
const validateRomansNumbers = (myNumRom) => {

    for (let n = 0; n < myNumRom.length; n++) {
        switch (myNumRom[n]) {
            case 'I':
                if (myNumRom[n + 1] != 'I' &&
                    myNumRom[n + 1] != 'V' &&
                    myNumRom[n + 1] != 'X' &&
                    myNumRom[n + 1] != undefined) {
                    return [true, 'Incorrecto: I se resta de V y X'];

                }
                contI++;
                break;
            case 'X':
                if (myNumRom[n + 1] != 'L' &&
                    myNumRom[n + 1] != 'C' &&
                    myNumRom[n + 1] != 'X' &&
                    myNumRom[n + 1] != 'I' &&
                    myNumRom[n + 1] != 'V' &&
                    myNumRom[n + 1] != undefined) {
                    return [true, 'Incorrecto: X solo resta a L y C'];

                }

                contX++;
                break;
            case 'C':
                if (myNumRom[n + 1] != 'D' &&
                    myNumRom[n + 1] != 'M' &&
                    myNumRom[n + 1] != 'C' &&
                    myNumRom[n + 1] != 'X' &&
                    myNumRom[n + 1] != 'L' &&
                    myNumRom[n + 1] != undefined) {
                    return [true, 'Incorrecto: C solo resta a D y M'];

                }
                contC++;
                break;
            case 'M':
                contM++;
                break;
            case 'V':
                if (myNumRom[n + 1] == 'X' ||
                    myNumRom[n + 1] == 'L' ||
                    myNumRom[n + 1] == 'C' ||
                    myNumRom[n + 1] == 'D' ||
                    myNumRom[n + 1] == 'M') {
                    return [true, 'Incorrecto: Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.'];
                }

                contV++;
                break;
            case 'L':
                contL++;
                if (myNumRom[n + 1] == 'C' ||
                    myNumRom[n + 1] == 'D' ||
                    myNumRom[n + 1] == 'M') {
                    return [true, 'Incorrecto: Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.'];
                }
                break;
            case 'D':
                contD++;
                if (myNumRom[n + 1] == 'M') {
                    return [true, 'Incorrecto: Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.'];
                }
                break;

        }

    }

    if (contI > 3 || contX > 3 || contC > 3 || contM > 3) {
        return [true, 'Incorrecto: Los símbolos I, X, C y M se pueden repetir hasta tres veces'];

    }

    if (contV > 1 || contL > 1 || contD > 1) {
        return [true, 'Incorrecto: Los símbolos V, L y D no pueden repetirse'];

    }

    return [false, ' ', myNumRom];

}

/* En esta funcion recorremos las matrices de numeros y le
asignamos su valor correspondiente, se han utilizado dos arrays */
const convertValues = (myNumR) => {
    let x = 0;
    let valueFounded = false;
    let myValuesAux = [];


    for (let n = 0; n < myNumR.length; n++) {
        while (valueFounded == false) {
            if (myNumR[n] == nRomanos[x]) {
                myValuesAux[n] = nValor[x];
                valueFounded = true;
                x++;
            }
            x++;

        }
        valueFounded = false;
        x = 0;

    }


    operations(myValuesAux);
    return (myValuesAux.reduce((a, b) => a + b, 0));


}

/* Segun la logica aplicada, con esta función convertimos en negativos 
los valores numericos arabes que restan en la nomenclatura romana. 
Realizando una suma de todos los elementos del array, nos devuelve el
numero arabe equivalente */
const operations = (myValues) => {
    for (let n = 0; n < myValues.length; n++) {
        if (myValues[n] < myValues[n + 1]) {
            myValues[n] = myValues[n] * -1;
        }

    }
    /*console.log(myValues)*/
    return myValues;

}

/*Funcion que convierte numeros arabes en romanos. Se establecen los 
valores romanos de unidades a miles. Mediante division descartando decimales
localizamos en el array la posicion correcta de cada equivalencia, y las vamos
agregamos de forma ordenada a nuestra varible de salida. */
const arabToRoman = (myNumA) => {
    let unidades = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let decena = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let centena = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let mylesima = ['', 'M', 'MM', 'MMM'];
    let myNumRo;
    let myl = 0, cen = 0, dec = 0, uni = 0;

    if (myNumA < 0 || myNumA > 3999) {
        return 'Error; introduce numero de 0 a 3999';
    }
    myNumAux = myNumA;
    if (myNumAux >= 1000) {
        myl = Math.trunc(myNumAux / 1000);
        myNumAux = myNumAux - (myl * 1000);
    }
    if (myNumAux >= 100) {
        cen = Math.trunc(myNumAux / 100);
        myNumAux = myNumAux - (cen * 100);
    }

    if (myNumAux >= 10) {
        dec = Math.trunc(myNumAux / 10);
        myNumAux = myNumAux - (dec * 10);
    }

    if (myNumAux >= 1) {
        uni = myNumAux;
    }

    myNumRo = mylesima[myl] + centena[cen] + decena[dec] + unidades[uni];
    return myNumRo;


}

/*LLAMADA A FUNCION DE VALIDACION DE NUMEROS ROMANOS */

inputNumRom = 'MLXXXIII'; /* Introduce aqui tu numero romano */
inputNumRom = inputNumRom.toUpperCase();
infoReturn = validateRomansNumbers(inputNumRom);
if (infoReturn[0] == false) {
    console.log('El número es correcto: ' + [infoReturn[2]]);


    /*CONVERSION DE NUMEROS ROMANOS A ARABES */
    myNumA = convertValues(inputNumRom);
    console.log('Numero convertido (R --> A): ' + myNumA);

}
else {
    console.log(infoReturn[1]);
}




/*CONVERSIO DE ARABES A ROMANOS */
myNumR = arabToRoman(3999);
console.log('Número convertido (A --> R): ' + myNumR);


