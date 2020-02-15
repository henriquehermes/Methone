import DEFAULT from '../constants';

export const INITIAL_STATE = {
    questions: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DEFAULT.SET_QUESTIONS: {
            return {
                ...state,
                questions: action.questions,
            };
        }
        default:
            return state;
    }
};
