const add = (a, b) => {
	if (Number.isFinite(a) && Number.isFinite(b)) {
		return Math.round((a + b) * 1000)/ 1000;
	} else {
		throw new Error("Not a finite number");
	}
}

const subtract = (a, b) => {
	if (Number.isFinite(a) && Number.isFinite(b)) {
		return Math.round((a - b) * 1000)/ 1000;
	} else {
		throw new Error("Not a finite number");
	}
}

const multiply = (a, b) => {
	if (Number.isFinite(a) && Number.isFinite(b)) {
		return Math.round((a * b) * 1000)/ 1000;
	} else {
		throw new Error("Not a finite number");
	}
}

const divide = (a, b) => {
	if (b !== 0 && Number.isFinite(a) && Number.isFinite(b)) {
		return Math.round((a / b) * 1000)/ 1000;
	} else if (b === 0) {
		throw new Error("Cannot divide by 0");
	} else {
		throw new Error("Not a finite number");
	}
}

export { add, subtract, multiply, divide };
