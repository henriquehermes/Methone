import DEFAULT from '../constants';

export const setIsLoading = isLoading => ({
    type: DEFAULT.SET_LOADING,
    isLoading,
});
