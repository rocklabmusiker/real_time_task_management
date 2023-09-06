import { REGISTER_SUCCESS, REGISTER_ERROR } from "../actions/registerActions";

const initialState={
    isAuthenticated: false,
    user: null,
    error: null,
}

export const registerReducers = (state= initialState, action) =>{
     switch(action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated:true
            }
        case REGISTER_ERROR:
            return {
              ...state,
              error: action.payload
            }
            default:
                return state;

     }
}