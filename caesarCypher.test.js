import caesarCypher from "./caesarCypher.js";

test("Cyphers regular string", () => {
	expect(caesarCypher("hello", 1)).toBe("ifmmp");
});

test("Doesn't accept non integer values of num", () => {
	expect(() => caesarCypher("hello", 1.2)).toThrow(Error);
});

test("Cyphers and maintains capitalisation", () => {
	expect(caesarCypher("HeLlO", 1)).toBe("IfMmP");
});

test("Cyphers and maintains punctuations and special symbols", () => {
	expect(caesarCypher("hello, world!?", 1)).toBe("ifmmp, xpsme!?");
});

test("Wraps around from z to a, for lower and upper case", () => {
	expect(caesarCypher("Zanzibar", 1)).toBe("Aboajcbs");
});

test("Cyphers using big numbers", () => {
	expect(caesarCypher("hello", 261)).toBe("ifmmp");
});

test("Cyphers using a negative shift", () => {
	expect(caesarCypher("hello", -1)).toBe("gdkkn");
});
