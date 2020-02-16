import {
    stateQuestions,
    SET_QUESTIONS,
    SET_SCORE,
    SET_SCORE_LIST,
    SET_STEP_POSITION,
    PLAY_AGAIN,
    QuestionsActionTypes,
} from './types';

const INITIAL_STATE: stateQuestions = {
    list: [],
    position: 1,
    scoreList: [],
    score: 0,
};

export default (state = INITIAL_STATE, action: QuestionsActionTypes) => {
    switch (action.type) {
        case SET_QUESTIONS: {
            return {
                ...state,
                list: action.questions,
            };
        }
        case SET_STEP_POSITION: {
            return {
                ...state,
                position: action.position,
            };
        }
        case SET_SCORE_LIST: {
            return {
                ...state,
                scoreList: state.scoreList.concat(action.scoreList),
            };
        }
        case SET_SCORE: {
            return {
                ...state,
                score: action.score,
            };
        }
        case PLAY_AGAIN: {
            return {
                ...state,
                position: INITIAL_STATE.position,
                scoreList: INITIAL_STATE.scoreList,
                score: INITIAL_STATE.score,
            };
        }
        default:
            return state;
    }
};
