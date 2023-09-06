import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { authReducer } from '../reducers/authReducers';
import { registerReducers } from '../reducers/registerReducers';
import { boardReducers } from '../reducers/boardReducers';
const rootReducers = combineReducers({
    auth: authReducer,
    register: registerReducers,
    board: boardReducers ,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))