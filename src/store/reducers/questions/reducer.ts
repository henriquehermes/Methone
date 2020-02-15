import DEFAULT from '../types';
import Score from '../../../screens/Score';

export const INITIAL_STATE = {
    list: [],
    position: 1,
    score: [],
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
        case DEFAULT.SET_SCORE: {
            return {
                ...state,
                score: state.score.push(action.score),
            };
        }
        default:
            return state;
    }
};
