import capitalise from "./capitalise.js";

test("Capitalises a string", () => {
	const string = "hello world";
	expect(capitalise(string)).toBe("Hello world");
})
