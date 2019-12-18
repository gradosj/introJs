

let nRomanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
let nValor = [1, 5, 10, 50, 100, 500, 1000];
let myNumR, myNumA;
let contI = 0, contX = 0, contC = 0, contM = 0, contV = 0,
    contL = 0, contD = 0;
let infoReturn = [false, ' '];
let myNumRom;
let inputNumRom;
let y = 0;

/* logaritmo especial */
let cantidad; /*Un entero que señala la cantidad total de ítems que tiene el array. */
let k;
let az;
let tmp;
let min, man;

const baraja = {
    rama: ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'],
    simbols: ['S', 'H', 'C', 'D'],
    complet: [],
    random: []
}
/* funcion para crear la baraja completa */
const createBaraja = () => {
    for (let x = 0; x < baraja.simbols.length; x++) {

        for (let z = 0; z < baraja.rama.length; z++) {
            baraja.complet[y] = baraja.rama[z] + baraja.simbols[x];
            console.log(baraja.complet[y]);
            y++;
            


        }
    }
}

function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

const barajadoaleatorio = () => {

    cantidad = baraja.complet.length;

    for (k = 0; k < cantidad; k++) {
        az = getRandomArbitrary(0, cantidad - 1);
        tmp = baraja.complet[az];
        baraja.complet[az] = baraja.complet[k];
        baraja.complet[k] = tmp;
        console.log(baraja.complet[k]);
    }

}

createBaraja();
console.log('------------------------');
barajadoaleatorio();



