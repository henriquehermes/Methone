export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_STEP_POSITION = 'SET_STEP_POSITION';
export const SET_SCORE = 'SET_SCORE';
export const SET_SCORE_LIST = 'SET_SCORE_LIST';
export const PLAY_AGAIN = 'PLAY_AGAIN';

export interface Question {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: Array<string>;
}

export interface Score {
    question: string;
    isCorrect: boolean;
}

interface setQuestionsAction {
    type: typeof SET_QUESTIONS;
    questions: Question[];
}

interface setStepPositionAction {
    type: typeof SET_STEP_POSITION;
    position: number;
}

interface setScoreAction {
    type: typeof SET_SCORE;
    score: number;
}

interface setScoreListAction {
    type: typeof SET_SCORE_LIST;
    scoreList: Score;
}

interface playAgainAction {
    type: typeof PLAY_AGAIN;
}

export interface stateQuestions {
    list: Question[];
    position: number;
    scoreList: Score[];
    score: number;
}

export type QuestionsActionTypes =
    | setQuestionsAction
    | setStepPositionAction
    | setScoreAction
    | setScoreListAction
    | playAgainAction;
