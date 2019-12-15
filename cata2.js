let nRomanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
let nValor = [1, 5, 10, 50, 100, 500, 1000];
let miNumR = 'VIII', miNumA;
let myValues = [];
let contI = 0, contX = 0, contC = 0, contM = 0, contV = 0,
	contL = 0, contD = 0;
let infoError = [false, ' '];



const valida_periodicidad = (miNumR) => {

	for (let n = 0; n < miNumR.length; n++) {
		switch (miNumR[n]) {
			case 'I':
				contI++;
				break;
			case 'X':
				contX++;
				break;
			case 'C':
				contC++;
				break;
			case 'M':
				contM++;
				break;
			case 'V':
				if (miNumR[n + 1] == 'X' ||
					miNumR[n + 1] == 'L' ||
					miNumR[n + 1] == 'C' ||
					miNumR[n + 1] == 'D' ||
					miNumR[n + 1] == 'M') {
					return [true, 'Incorrecto: Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.'];
				}

				contV++;
				break;
			case 'L':
				contL++;
				if (miNumR[n + 1] == 'C' ||
					miNumR[n + 1] == 'D' ||
					miNumR[n + 1] == 'M') {
					return [true, 'Incorrecto: Los símbolos V, L y D no pueden colocarse a la izquierda de otro mayor.'];
				}
				break;
			case 'D':
				contD++;
				if (miNumR[n + 1] == 'M') {
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

	return [false, ' '];


}


const convertValues = (miNumR) => {
	let x = 0;
	let valueFounded = false;
	let myValuesAux = [];

	for (let n = 0; n < miNumR.length; n++) {
		while (valueFounded == false) {
			if (miNumR[n] == nRomanos[x]) {
				myValuesAux[n] = nValor[x];
				valueFounded = true;
				x++;
			}
			x++;

		}
		valueFounded = false;
		x = 0;

	}

	return myValuesAux;


}

const operar = (myValues) => {
	for (let n = 0; n < myValues.length; n++) {
		if (myValues[n] < myValues[n + 1]) {
			myValues[n] = myValues[n] * -1;
		}

	}
	console.log(myValues)
	return myValues;

}


const arabToRoman = (miNumA) => {
	let numRomAux = [];
	let numConverted = false;
	let restMiNuma = miNumA;
	let x = 0;

	while (restMiNuma != 0) {
		if (restMiNuma >= 1000) {
			numRomAux[x] = 'M';
			restMiNuma = restMiNuma - 1000;
			x++;
		} else if (restMiNuma >= 500 && restMiNuma < 1000) {
			numRomAux[x] = 'D';
			restMiNuma = restMiNuma - 500;
			x++;
		} else if ((restMiNuma >= 100) && (restMiNuma < 500)) {
			numRomAux[x] = 'C';
			restMiNuma = restMiNuma - 100;
			contC++;
			if (contC == 3 && restMiNuma > 100) {
				numRomAux[x - 1] = 'D';
				restMiNuma = restMiNuma - 100;
			} else {
				x++;
			}

		} else if ((restMiNuma >= 50 && restMiNuma < 100)) {
			numRomAux[x] = 'L';
			restMiNuma = restMiNuma - 50;
			x++;

		} else if (restMiNuma >= 10 && restMiNuma < 50) {
			numRomAux[x] = 'X';
			restMiNuma = restMiNuma - 10;
			contX++;
			if (contC == 3 && restMiNuma > 10) {
				numRomAux[x - 1] = 'L';
				restMiNuma = restMiNuma - 10;
			} else {
				x++;
			}


		} else if (restMiNuma >= 5 && restMiNuma < 10) {
			numRomAux[x] = 'V';
			restMiNuma = restMiNuma - 5;
			x++;

		} else if (restMiNuma >= 1 && restMiNuma < 5) {
			numRomAux[x] = 'I';
			restMiNuma = restMiNuma - 1;
			if (contI == 3 && restMiNuma > 1) {
				numRomAux[x - 1] = 'V';
				restMiNuma = restMiNuma - 1;
			} else {
				x++;
			}

		}



	}
	console.log(myValues);
	return myValues;


}

arabToRoman2(9);

infoError = valida_periodicidad(miNumR);
console.log(infoError);

if (infoError[0] == false) {
	myValues = convertValues(miNumR);
	console.log(myValues);
	myValues = operar(myValues);
	miNumA = myValues.reduce((a, b) => a + b, 0);
	console.log(miNumA);

}




