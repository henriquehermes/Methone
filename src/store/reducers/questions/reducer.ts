import DEFAULT from '../types';
import Score from '../../../screens/Score';

export const INITIAL_STATE = {
    list: [],
    position: 1,
    scoreList: [],
    score: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DEFAULT.SET_QUESTIONS: {
            return {
                ...state,
                list: action.questions,
            };
        }
        case DEFAULT.SET_STEP_POSITION: {
            return {
                ...state,
                position: action.position,
            };
        }
        case DEFAULT.SET_SCORE_LIST: {
            return {
                ...state,
                scoreList: state.scoreList.concat(action.scoreList),
            };
        }
        case DEFAULT.SET_SCORE: {
            return {
                ...state,
                score: action.score,
            };
        }
        case DEFAULT.PLAY_AGAIN: {
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
