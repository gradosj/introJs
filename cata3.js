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
let player, player1, player2;

const baraja = {
    rama: ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'], /* T, J, Q, K, A */
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

const barRamdom = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {

        // Seleccionar un elemento sin mezclar...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // E intercambiarlo con el elemento actual
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        console.log(array[randomIndex]);
    }
    return array;
}

const valpair = (player) => {
    let swpair = false;
    let swPairDouble = false;
    let ctpair = 0;
    let vlpair = '';
    let rtPair = new Array(5);
    console.log(player);

    for (let x = 0; x < player.length; x++) {
        for (let z = 0; z < player.length; z++) {
            if (player[x].substring(0, 2) == player[z].substring(0, 2)) {
                if (player[x] != player[z]) {
                    if (swpair == true) {
                        console.log(vlpair, player[z] )
                        if (vlpair.substring(0,2) != player[z].substring(0,2)) {
                            ctpair++;
                            rtPair.push (player[z]);
                            swPairDouble = true;
                        }
                    }
                    else {
                        swpair = true;
                        vlpair = player[z];
                        rtPair.push (player[x]);
                        ctpair++;
                    }
                }
            }
        }
    }

    if (swPairDouble == true) {
        rtPair[0] = 'double';

    } else if (swpair == true) {
        rtPair[0] = 'single';
    } else {
        return rtPair;
    }

    console.log(rtPair); 
    console.log(vlpair); 
    rtPair = rtPair.push(vlpair);

    console.log(rtPair);
    return rtPair;


}


let playsAnalyze = (player) => {

    pair = valpair(player);






}


createBaraja();
console.log('------------------------');

arr = barRamdom(baraja.complet);
console.log('------------------------');
console.log(arr);


player1 = arr.slice(0, 5);
player2 = arr.slice(5, 10);

console.log(player1);
console.log(player2);

playsAnalyze(['01D', '05B', '04A', '01A', '07C']);
















