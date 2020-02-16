import { GeneralActionTypes, SET_LOADING } from './types';

export function setIsLoading(isLoading: boolean): GeneralActionTypes {
    return {
        type: SET_LOADING,
        isLoading,
    };
}
