let nRomanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
let nValor = [1, 5, 10, 50, 100, 500, 1000];
let miNumR = 'XXXX';
let contI = 0, contX = 0, contC = 0, contM = 0, contV = 0,
	contL = 0, contD = 0;
let infoError = [false,' '];


const valida_periodicidad = (miNumR) => {

	for (let n = 0; n < miNumR.length; n++) {
		switch (miNumR[n]) {
			case 'I':
				contI ++;
				break;
			case 'X':
				contX ++;
				break;
			case 'C':
				contC ++;
				break;
			case 'M':
				contM ++;
				break;
			case 'V':
				contV ++;
				break;
			case 'L':
				contL ++;
				break;
			case 'D':
				contD ++;
				break;
			
		}

	}

	if (contI > 3 || contX > 3 || contC > 3 || contM > 3){
		return [true,'E001'];
		
	}

	if (contV > 1 || contL > 1 || contD > 1){
		return [true,'E002'];
		
	}
		
		
}


const validadedValor = (miNumR) => {

	for (let n = 0; n < miNumR.length; n++) {
		switch (miNumR[n]) {
			case 'I':
				contI ++;
				break;
			case 'X':
				contX ++;
				break;
			case 'C':
				contC ++;
				break;
			case 'M':
				contM ++;
				break;
			case 'V':
				contV ++;
				break;
			case 'L':
				contL ++;
				break;
			case 'D':
				contD ++;
				break;
			
		}

	}

	if (contI > 3 || contX > 3 || contC > 3 || contM > 3){
		return [true,'E001'];
		
	}

	if (contV > 1 || contL > 1 || contD > 1){
		return [true,'E002'];
		
	}
		
}
infoError = valida_periodicidad(miNumR); 

console.log(infoError);
