let nRomanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
let nValor = [1, 5, 10, 50, 100, 500, 1000];
let miNumR = 'XM', miNumA;
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
				if  (minu)
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
	let unidades = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
	let decena = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
	let centena = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
	let milesima = ["", "M", "MM", "MMM"];
	let miNumA = 254, miNumRo;
	let mil = 0, cen = 0, dec = 0, uni = 0;

	miNumAux = miNumA;
	if (miNumAux >= 1000) {
		mil = Math.trunc(miNumAux / 1000);
		miNumAux = miNumAux - (mil * 1000);
	}
	if (miNumAux >= 100) {
		cen = Math.trunc(miNumAux / 100);
		miNumAux = miNumAux - (cen * 100);
	}

	if (miNumAux >= 10) {
		dec = Math.trunc(miNumAux / 10);
		miNumAux = miNumAux - (dec * 10);
	}

	if (miNumAux >= 1) {
		uni = miNumAux;
	}

	miNumRo = milesima[mil] + centena[cen] + decena[dec] + unidades[uni];

	console.log(miNumRo);

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




