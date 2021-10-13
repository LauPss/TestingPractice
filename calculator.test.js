import { add, subtract, multiply, divide } from "./calculator.js";

test("Adds two integers", () => {
	expect(add(3, 4)).toBe(7);
});

test("Adds two decimal numbers", () => {
	expect(add(0.1, 0.2)).toBe(0.3);
});

test("Doesn't add illegal values", () => {
	expect(() => add("3", 4)).toThrow(Error);
});

test("Subtracts two integers", () => {
	expect(subtract(3, 4)).toBe(-1);
});

test("Subtracts two decimal numbers", () => {
	expect(subtract(0.1, 0.2)).toBe(-0.1);
});

test("Doesn't subtract illegal values", () => {
	expect(() => subtract("3", 4)).toThrow(Error);
});

test("Multiplies two integers", () => {
	expect(multiply(3, 4)).toBe(12);
});

test("Multiplies two decimal numbers", () => {
	expect(multiply(0.1, 0.2)).toBe(0.02);
});

test("Doesn't multiply illegal values", () => {
	expect(() => multiply("3", 4)).toThrow(Error);
});

test("Divides two integers", () => {
	expect(divide(2, 3)).toBe(0.667);
});

test("Divides two decimal numbers", () => {
	expect(divide(0.2, 0.07)).toBe(2.857);
});

test("Doesn't divide by 0", () => {
	expect(() => divide(3, 0)).toThrow(Error);
});

test("Doesn't divide illegal values", () => {
	expect(() => divide("3", 4)).toThrow(Error);
});
