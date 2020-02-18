import * as actions from "../../../src/store/reducers/questions/actions";
import * as types from "../../../src/store/reducers/questions/types";

const questions = [
	{
		category: "Entertainment: Video Games",
		type: "boolean",
		difficulty: "hard",
		question: "Unturned originally started as a Roblox game.",
		correct_answer: "True",
		incorrect_answers: ["False"],
	},
];

const scoreList = {
	question: "Unturned originally started as a Roblox game.",
	isCorrect: true,
};

const position = 2;

const score = 6;

describe("actions", () => {
	it("should create an action to set questions array", () => {
		const expectedAction = {
			type: types.SET_QUESTIONS,
			questions,
		};

		expect(actions.setQuestions(questions)).toEqual(expectedAction);
	});

	it("should create an action to set step position", () => {
		const expectedAction = {
			type: types.SET_STEP_POSITION,
			position,
		};

		expect(actions.stepPosition(position)).toEqual(expectedAction);
	});

	it("should create an action to set score array", () => {
		const expectedAction = {
			type: types.SET_SCORE_LIST,
			scoreList,
		};

		expect(actions.setScoreList(scoreList)).toEqual(expectedAction);
	});

	it("should create an action to set step position", () => {
		const expectedAction = {
			type: types.SET_SCORE,
			score,
		};

		expect(actions.setScore(score)).toEqual(expectedAction);
	});

	it("should create an action to set play again", () => {
		expect(actions.playAgain()).toBeTruthy();
	});
});
