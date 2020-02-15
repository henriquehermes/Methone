import { createStore, combineReducers } from 'redux';

import general from './reducers/general/reducer';
import questions from './reducers/questions/reducer';

const store = createStore(
    combineReducers({
        general,
        questions,
    }),
);

export default store;
