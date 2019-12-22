/* logaritmo especial */
let cantidad; /*Un entero que señala la cantidad total de ítems que tiene el array. */
let k, y = 0;
let az;
let tmp;
let min, man;
let player, player1, player2;
let playerNumber = [];
let resultPlayer2 = [];
let resultPlayer1 = [];
let numPlayer;
/*
let jgPoker1, jgPoker2, jgPareja1, jgPareja2, jgDoublePareja1, jgDoublePareja2, jgTrio1, jgTrio2, jgColor1
        jgColor2, jgEscalera1, jgEscalera2;*/

const baraja = {
    rama: ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'], /* T, J, Q, K, A */
    simbols: ['S', 'H', 'C', 'D'],
    complet: [],
    random: []
}

function JugadaPlayer(player, name, result, value) {
    this.player = player;
    this.name = name;
    this.result = result;
    this.value = value;
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

const theWinnerIs = () => {



}

let playsAnalyze = (numPlayer, player) => {
    let swDoublePareja = false, swPareja = false, swPoker = false, swTrio = false, swEscalera = false,
        swColor = false;
    let valorColor = [];
    let valorEscalera = [];
    let valorPoker = [];
    let valorTrio = [];
    let valorPareja = [];
    let analizePlayer = [];
    console.log(player);

    /* comprobar jugada poker */
    for (let x = 0; x < 2; x++) {
        if (player[x].substring(0, 2) == player[x + 1].substring(0, 2)
            && player[x].substring(0, 2) == player[x + 2].substring(0, 2)
            && player[x].substring(0, 2) == player[x + 3].substring(0, 2)) {
            valorPoker.push(player[x]);
            valorPoker.push(player[x + 1]);
            valorPoker.push(player[x + 2]);
            valorPoker.push(player[x + 3]);
            swPoker = true;
        }
    }

    analizePlayer[7] = valorPoker;
    /*
        if (numPlayer == 1){
            const jgPoker1 = new JugadaPlayer(numPlayer,'Poker',swPoker, valorPoker);
            console.log(jgPoker1);
        }
        else{
            const jgPoker2 = new JugadaPlayer(numPlayer,'Poker',swPoker, valorPoker);
    
        }*/

    for (x = 0; x < 3; x++) {
        if (player[x].substring(0, 2) == player[x + 1].substring(0, 2)
            && player[x].substring(0, 2) == player[x + 2].substring(0, 2)) {
            valorTrio.push(player[x]);
            valorTrio.push(player[x + 1]);
            valorTrio.push(player[x + 2]);
            swTrio = true;
        }
    }
    analizePlayer[3] = valorTrio;
    /*
        if (numPlayer == 1){
            const jgTrio1 = new JugadaPlayer(numPlayer,'Trio',swTrio, valorTrio);
            console.log(jgTrio1);
        }
        else{
            const jgTrio2 = new JugadaPlayer(numPlayer,'Trio',swTrio, valorTrio);
    
        }*/

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

    analizePlayer[1] = valorPareja;
    /*
        if (numPlayer == 1){
            const jgPareja1 = new JugadaPlayer(numPlayer,'Parejas',swPareja, valorPareja);
        }
        else{
            const jgPareja2 = new JugadaPlayer(numPlayer,'Parejas',swPareja, valorPareja);
    
        }*/

    if (valorPareja.lenght == 4) {
        swDoublePareja = true;
        /*
                if (numPlayer == 1){
                    const jgDoublePareja1 = new JugadaPlayer(numPlayer,'DoubleParejas',swDoublePareja, valorPareja);
            
                }
                else{
                    const jgDoublePareja2 = new JugadaPlayer(numPlayer,'DoubleParejas',swDoublePareja, valorPareja);
            
                }*/
    }
    analizePlayer[2] = valorPareja;

    playerNumber[0] = parseInt(player[0]);
    playerNumber[1] = parseInt(player[1]);
    playerNumber[2] = parseInt(player[2]);
    playerNumber[3] = parseInt(player[3]);
    playerNumber[4] = parseInt(player[4]);


    console.log(playerNumber[0], (playerNumber[0] + 1));
    console.log(playerNumber[0], (playerNumber[0] + 5));

    if (playerNumber[1] == (playerNumber[0] + 1)
        && playerNumber[2] == (playerNumber[0] + 2)
        && playerNumber[3] == (playerNumber[0] + 3)
        && playerNumber[4] == (playerNumber[0] + 4)) {
        swEscalera = true;
        valorEscalera = player;

    }

    analizePlayer[4] = valorEscalera;
    /*
        if (numPlayer == 1){
            const jgEscalera1 = new JugadaPlayer(numPlayer,'Escalera',swEscalera, valorEscalera);
           
        }
        else{
            const jgEscalera2 = new JugadaPlayer(numPlayer,'Escalera',swEscalera, valorEscalera);
    
        }
    
    
    */
    if (player[0].substring(2, 3) == player[1].substring(2, 3)
        && player[1].substring(2, 3) == player[2].substring(2, 3)
        && player[2].substring(2, 3) == player[3].substring(2, 3)
        && player[3].substring(2, 3) == player[4].substring(2, 3)) {
        swColor = true;
        valorColor = player;

    }
    /*
        if (numPlayer == 1){
            const jgColor1 = new JugadaPlayer(numPlayer,'Color',swColor, valorColor);
            console.log(jgColor1);
          
        }
        else{
            const jgColor2 = new JugadaPlayer(numPlayer,'Color',swColor, valorColor);
    
        }
        console.log(jgColor1.JugadaPlayer);
      */
    /*
    
        switch (jgColor1.JugadaPlayer) {
            case true, true:
                
            break;
    
            case true, false:
    
            break;
    
            case false, true:
    
            break;
    
            
        }*/

    console.log(Math.max.apply(null, playerNumber));


    return analizePlayer;
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

resultPlayer1 = playsAnalyze(1, ['02D', '03A', '04C', '05D', '06J']);
console.log(resultPlayer1);
resultPlayer2 = playsAnalyze(2, ['02D', '03A', '04C', '05D', '06J']);

winner = theWinnerIs();