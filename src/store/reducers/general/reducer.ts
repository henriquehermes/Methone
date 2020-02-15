import DEFAULT from '../constants';

export const INITIAL_STATE = {
    isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DEFAULT.SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading,
            };
        }
        default:
            return state;
    }
};
