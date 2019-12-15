let nRomanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
let nValor = [1, 5, 10, 50, 100, 500, 1000];
let miNumR = 'CMXCIX', miNumA;
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
	let numRomAux = [''];
	let numConverted = false;
	let restMiNuma = miNumA;
	let x = 0;
	let activateContador = false;

	while (restMiNuma >= 1000) {
		if (numRomAux[x] === undefined) {
			numRomAux[x] = 'M';
			activateContador = true;

		}
		else {
			numRomAux[x] = numRomAux[x] + 'M';
		}

		restMiNuma = restMiNuma - 1000;
	}

	if (activateContador == true) {
		x++;
		activateContador = false;
	}

	while (restMiNuma >= 500) {
		if (numRomAux[x] === undefined) {
			numRomAux[x] = 'D';
			activateContador = true;

		}
		else {
			numRomAux[x] = numRomAux[x] + 'D';
			activateContador = true;
		}

		restMiNuma = restMiNuma - 500;

	}

	if (activateContador == true) {
		x++;
		activateContador = false;
	}

	while ((restMiNuma >= 100)) {
		if (numRomAux[x] === undefined) {
			numRomAux[x] = 'C';
			activateContador = true;

		}
		else {
			numRomAux[x] = numRomAux[x] + 'C';
			activateContador = true;
		}

		restMiNuma = restMiNuma - 100;

	}
	if (activateContador == true) {
		x++;
		activateContador = false;
	}

	while ((restMiNuma >= 50)) {
		if (numRomAux[x] === undefined) {
			numRomAux[x] = 'L';
			activateContador = true;

		}
		else {
			numRomAux[x] = numRomAux[x] + 'L';
			activateContador = true;
		}

		restMiNuma = restMiNuma - 50;


	}

	if (activateContador == true) {
		x++;
		activateContador = false;
	}

	while (restMiNuma >= 10) {
		if (numRomAux[x] === undefined) {
			numRomAux[x] = 'X';
			activateContador = true;
			
		}
		else {
			numRomAux[x] = numRomAux[x] + 'X';
			activateContador = true;
		}

		restMiNuma = restMiNuma - 10;


	}

	if (activateContador == true) {
		x++;
		activateContador = false;
	}

	while (restMiNuma >= 5) {
		if (numRomAux[x] === undefined) {
			numRomAux[x] = 'V';
			activateContador = true;
		
		}
		else {
			numRomAux[x] = numRomAux[x] + 'V';
			activateContador = true;
		}

		restMiNuma = restMiNuma - 5;


	}

	if (activateContador == true) {
		x++;
		activateContador = false;
	}

	while (restMiNuma >= 1 && restMiNuma < 5) {
		if (numRomAux[x] === undefined) {
			numRomAux[x] = 'I';
			activateContador = true;
		}
		else {
			numRomAux[x] = numRomAux[x] + 'I';
			activateContador = true;
		}

		restMiNuma = restMiNuma - 1;

	}
	if (activateContador == true) {
		x++;
		activateContador = false;
	}
	console.log(myValues);
	return myValues;

}

arabToRoman(999);

infoError = valida_periodicidad(miNumR);
console.log(infoError);

if (infoError[0] == false) {
	myValues = convertValues(miNumR);
	console.log(myValues);
	myValues = operar(myValues);
	miNumA = myValues.reduce((a, b) => a + b, 0);
	console.log(miNumA);

}




