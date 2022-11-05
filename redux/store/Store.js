import { createStore, combineReducers } from 'redux';
import PersonReducer from '../reducers/PersonReducer';

const rootReducer = combineReducers({
    details: PersonReducer,
});

export const store = createStore(rootReducer);