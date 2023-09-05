import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { authReducer } from '../reducers/authReducers';

const rootReducers = combineReducers({
    auth: authReducer
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))