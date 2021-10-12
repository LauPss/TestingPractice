export default function capitalise (string) {
	const firstLetter = string.charAt(0).toUpperCase();
	const restOfStr = string.slice(1);
	return firstLetter + restOfStr;
}
