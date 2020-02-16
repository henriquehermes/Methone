export const SET_LOADING = 'SET_LOADING';

interface isLoadingAction {
    type: typeof SET_LOADING;
    isLoading: boolean;
}

export interface stateGeneral {
    isLoading: boolean;
}

export type GeneralActionTypes = isLoadingAction;
