import reverseString from "./reverseString.js";

test("Reverses string", () => {
	const string = "Hello world";
	expect(reverseString(string)).toBe("dlrow olleH");
});
