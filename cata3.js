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
let playerNumber = [];

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

/* Si hay poker (cuatro cartas iguales, dos seran correlativas) */
let validatePoker = (player) => {
    for (let x = 0; x < player.length; x++) {
        if (player[x] == player[x + 1]) {
            retPoker = player[x];
        }
    }
    return retPoker;

}


let playsAnalyze = (player) => {
    let swpair = false;
    let swPairDouble = false;

    valorPoker = [];
    valorTrio = [];
    valorPareja = [];
    console.log(player);

    for (let x = 0; x < 2; x++) {
        if (player[x].substring(0, 2) == player[x + 1].substring(0, 2)
            && player[x].substring(0, 2) == player[x + 2].substring(0, 2)
            && player[x].substring(0, 2) == player[x + 3].substring(0, 2)) {
            valorPoker.push(player[x]);
            valorPoker.push(player[x + 1]);
            valorPoker.push(player[x + 2]);
            valorPoker.push(player[x + 3])
            swPoker = true;
        }
    }
    for (x = 0; x < 3; x++) {
        if (player[x].substring(0, 2) == player[x + 1].substring(0, 2)
            && player[x].substring(0, 2) == player[x + 2].substring(0, 2)) {
            valorTrio.push(player[x]);
            valorTrio.push(player[x + 1]);
            valorTrio.push(player[x + 2]);
            swTrio = true;
        }
    }

    for (x = 0; x < 4; x++) {
        switch (x) {
            case 0:
                if (player[x].substring(0, 2) == player[x + 1].substring(0, 2)
                    && player[x].substring(0, 2) != player[x + 2].substring(0, 2)) {
                    valorPareja.push(player[x]);
                    valorPareja.push(player[x + 1]);
                    //         valorPareja.push(player[x + 2]);
                    swPareja = true;
                }
                break;
            case 1:
            case 2:
            case 3:
                if (player[x].substring(0, 2) == player[x + 1].substring(0, 2)
                    && player[x].substring(0, 2) != player[x - 1].substring(0, 2)) {
                    valorPareja.push(player[x]);
                    valorPareja.push(player[x + 1]);
                    //         valorPareja.push(player[x + 2]);
                    swPareja = true;
                }
                break;
        }
    }

    if (valorPareja.lenght == 4) {
        swDoublePareja = true;
    }

    playerNumber[0] = parseInt(player[0]);
    playerNumber[1] = parseInt(player[1]);
    playerNumber[2] = parseInt(player[2]);
    playerNumber[3] = parseInt(player[3]);
    playerNumber[4] = parseInt(player[4]);

    if (playerNumber[0] == (playerNumber[0] + 1)
        && playerNumber[1] == (playerNumber[1] + 2)
        && playerNumber[2] == (playerNumber[2] + 3)
        && playerNumber[3] == (playerNumber[3] + 4)
        && playerNumber[4] == (playerNumber[4] + 5)) {
        swEscalera = true;

    }

    if (player[0].substring(2, 3) == player[1].substring(2, 3)
        && player[1].substring(2, 3) == player[2].substring(2, 3)
        && player[2].substring(2, 3) == player[3].substring(2, 3)
        && player[3].substring(2, 3) == player[4].substring(2, 3)) {
        swColor = true;

    }

    console.log(Math.max.apply(null, playerNumber));
}

createBaraja();
console.log('------------------------');

arr = barRamdom(baraja.complet);
console.log('------------------------');
console.log(arr);

player1 = arr.slice(0, 5);
player2 = arr.slice(5, 10);

player1.sort();
player2.sort();

console.log(player1);
console.log(player2);

resultPlayer1 = playsAnalyze(['02D', '03A', '04C', '05D', '06J']);
resultPlayer2 = playsAnalyze(['02D', '03A', '04C', '05D', '06J']);
















