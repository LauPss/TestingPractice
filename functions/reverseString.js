export default function reverseString (string) {
	let reversedStr = "";
	for (let i = string.length; i--; i > 0) {
		let letter = string.charAt(i);
		reversedStr += letter;
	}
	return reversedStr;
}


