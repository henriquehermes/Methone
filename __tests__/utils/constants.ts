import { TYPE_ANSWER } from "../../src/utils/Constants";

describe("constants", () => {
	it("should return TYPE_ANSWER", () => {
		const typeAnswer = {
			correct: "True",
			incorrect: "False",
		};

		expect(typeAnswer).toEqual(TYPE_ANSWER);
	});
});
