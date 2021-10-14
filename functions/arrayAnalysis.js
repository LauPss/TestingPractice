const checksIfFiniteNumber = (item) => {
	if (!Number.isFinite(item)) {
		throw new Error("Array contains non-numeric or infinite values.");
	}
}

const checksIfValidArray = (arg) => {
	if (!Array.isArray(arg)) {
		throw new Error("Argument is not an array.");
	} else if (arg.length === 0) {
		throw new Error("Array is empty.");
	} else {
		arg.forEach(item => {
			checksIfFiniteNumber(item);
		});
	}
}

export default function arrayAnalysis (array) {
	checksIfValidArray(array);
	
	const sum = (a, b) => Math.round((a + b) * 1000) / 1000;
	const getMax = (a, b) => Math.max(a, b);
	const getMin = (a, b) => Math.min(a, b);
	
	/* using reduce instead of spread operator to prevent failure on large arrays */
	const avg = array.reduce(sum) / array.length;
	const average = Math.round(avg * 1000) / 1000;
	const max = array.reduce(getMax);
	const min = array.reduce(getMin);
	const length = array.length;
	
	return {average, min, max, length};
}
