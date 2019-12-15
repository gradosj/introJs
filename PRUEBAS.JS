let numRomAux = [];
	let numConverted = false;
	let restMiNuma = 9;
	let x = 0;

switch (restMiNuma) {
    case '9':
        numRomAux[x] = 'IX'
        restMiNuma = restMiNuma - 9;
        break;
    case '8':
        numRomAux[x] = 'VIII'
        restMiNuma = restMiNuma - 8;
        contI++;
        break;
    case '7':
        numRomAux[x] = 'VII'
        restMiNuma = restMiNuma - 7;
        contI++;
        break;
    case '6':
        numRomAux[x] = 'VI'
        restMiNuma = restMiNuma - 6;
        contI++;
        break;
    case '5':
        numRomAux[x] = 'V'
        restMiNuma = restMiNuma - 5;
        contI++;
        break;
    case '4':
        numRomAux[x] = 'IV'
        restMiNuma = restMiNuma - 4;
        contI++;
        break;
    case '3':
        numRomAux[x] = 'III'
        restMiNuma = restMiNuma - 3;
        contI++;
        break;
    case '2':
        numRomAux[x] = 'II'
        restMiNuma = restMiNuma - 2;
        contI++;
        break;
    case '1':
        numRomAux[x] = 'I'
        restMiNuma = restMiNuma - 1;
        contI++;
        break;



}