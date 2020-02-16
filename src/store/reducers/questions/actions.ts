import {
    SET_QUESTIONS,
    SET_SCORE,
    SET_SCORE_LIST,
    SET_STEP_POSITION,
    PLAY_AGAIN,
    QuestionsActionTypes,
    Question,
    Score,
} from './types';

export function setQuestions(questions: Question[]): QuestionsActionTypes {
    return {
        type: SET_QUESTIONS,
        questions,
    };
}

export function stepPosition(position: number): QuestionsActionTypes {
    return {
        type: SET_STEP_POSITION,
        position,
    };
}

export function setScoreList(scoreList: Score): QuestionsActionTypes {
    return {
        type: SET_SCORE_LIST,
        scoreList,
    };
}

export function setScore(score: number): QuestionsActionTypes {
    return {
        type: SET_SCORE,
        score,
    };
}

export function playAgain(): QuestionsActionTypes {
    return {
        type: PLAY_AGAIN,
    };
}
