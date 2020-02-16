import { createStore, combineReducers } from 'redux';

import general from './reducers/general/reducer';
import questions from './reducers/questions/reducer';

export const rootReducer = combineReducers({
    general,
    questions,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
