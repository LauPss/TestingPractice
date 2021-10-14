import arrayAnalysis from "./arrayAnalysis.js";

test("Works with a regular array.", () => {
	expect(arrayAnalysis([1, 2, 3, 4])).toEqual(
		{
			average: 2.5,
			max: 4,
			min: 1,
			length: 4,
		}
	);
});

test("Only accepts arrays.", () => {
	expect(() => arrayAnalysis("string")).toThrow(Error);
});

test("Doesn't accept an empty array.", () => {
	expect(() => arrayAnalysis([])).toThrow(Error);
});

test("Only accepts finite numerical array elements.", () => {
	expect(() => arrayAnalysis([NaN, true, "3"])).toThrow(Error);
});

test("Works with a 1-element array.", () => {
	expect(arrayAnalysis([10])).toEqual(
		{
			average: 10,
			max: 10,
			min: 10,
			length: 1,
		}
	);
});

test("Works with decimal numbers.", () => {
	expect(arrayAnalysis([0.1, 0.2, 0.3, 0.4])).toEqual(
		{
			average: 0.25,
			max: 0.4,
			min: 0.1,
			length: 4,
		}
	);
});
