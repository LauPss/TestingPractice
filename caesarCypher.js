const validatesShift = (num) => {
	if (!Number.isInteger(num)) {
		throw new Error("Shift number isn't an integer");
	}
}

const checksIfLoops = (newCharCode, string, i) => {
	/* LOOPS THE ALPHABET FROM A BACK TO Z FOR NEGATIVE SHIFTS */
	if ((string.charCodeAt(i) < 91 && newCharCode < 65)
	|| (string.charCodeAt(i) > 96 && newCharCode < 97 )) {
		newCharCode += 26;
	/* LOOPS THE ALPHABET FROM Z BACK TO A FOR POSITIVE SHIFTS */
	} else if ((string.charCodeAt(i) < 91 && newCharCode > 90)
	|| (string.charCodeAt(i) > 96 && newCharCode > 122)) {
		newCharCode -= 26;
	} /* DOESN'T DO ANYTHING IF IT DOESN'T NEED TO LOOP */
	return newCharCode;
}

const shiftsCharCode = (string, i, shift) => {
	let newCharCode;
	/* ONLY CYPHERS LATIN ALPHABET LETTERS */
	if ((string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) 
	|| (string.charCodeAt(i) > 96 && string.charCodeAt(i) < 123)) {
		newCharCode = string.charCodeAt(i) + shift;
		newCharCode = checksIfLoops(newCharCode, string, i);
	} else {
		newCharCode = string.charCodeAt(i);
	}
	return newCharCode;
}


export default function caesarCypher (string, num) {
	validatesShift(num);
	const shift = num % 26;
	let charArray = [];
	for (let i = 0; i < string.length; i++) {
		let shiftedCharCode = shiftsCharCode(string, i, shift);
		let newChar = String.fromCharCode(shiftedCharCode);
		charArray.push(newChar);
	}
	let caesarString = charArray.join("");
	return caesarString;
}
