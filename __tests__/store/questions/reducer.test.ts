import reducer from "../../../src/store/reducers/questions/reducer";
import * as types from "../../../src/store/reducers/questions/types";

const INITIAL_STATE = {
	list: [],
	position: 1,
	scoreList: [],
	score: 0,
};

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

const position = 3;

const score = 6;

describe("questions reducer", () => {
	it("should handle SET_QUESTIONS", () => {
		expect(
			reducer(INITIAL_STATE, {
				type: types.SET_QUESTIONS,
				questions,
			}),
		).toEqual({
			list: questions,
			position: 1,
			scoreList: [],
			score: 0,
		});
	});

	it("should handle SET_SCORE_LIST", () => {
		expect(
			reducer(INITIAL_STATE, {
				type: types.SET_SCORE_LIST,
				scoreList,
			}),
		).toEqual({
			list: [],
			position: 1,
			scoreList: [scoreList],
			score: 0,
		});
	});

	it("should handle SET_SCORE", () => {
		expect(
			reducer(INITIAL_STATE, {
				type: types.SET_SCORE,
				score,
			}),
		).toEqual({
			list: [],
			position: 1,
			scoreList: [],
			score: 6,
		});
	});

	it("should handle PLAY_AGAIN", () => {
		expect(
			reducer(INITIAL_STATE, {
				type: types.PLAY_AGAIN,
			}),
		).toEqual(INITIAL_STATE);
	});

	it("should handle SET_STEP_POSITION", () => {
		expect(
			reducer(INITIAL_STATE, {
				type: types.SET_STEP_POSITION,
				position,
			}),
		).toEqual({
			list: [],
			position: 3,
			scoreList: [],
			score: 0,
		});
	});
});
