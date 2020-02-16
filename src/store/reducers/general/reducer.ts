import { stateGeneral, GeneralActionTypes, SET_LOADING } from './types';

const INITIAL_STATE: stateGeneral = {
    isLoading: false,
};

export default (state = INITIAL_STATE, action: GeneralActionTypes) => {
    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading,
            };
        }
        default:
            return state;
    }
};
