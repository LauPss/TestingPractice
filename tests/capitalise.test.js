import capitalise from "../functions/capitalise.js";

test("Capitalises a string", () => {
	const string = "hello world";
	expect(capitalise(string)).toBe("Hello world");
})
