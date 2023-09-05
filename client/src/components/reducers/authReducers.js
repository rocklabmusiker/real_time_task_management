import { loginUserRequest,loginUserSuccess,loginUserError } from "../actions/authActions";

const initialState = 
{
    loading: false,
    token: null,
    error: null,
}

export const authReducer = (state= initialState, action) =>{

    switch(action.type) {
        case loginUserRequest:
            return {...state, loading: true};
        case loginUserSuccess:
            return {...state, loading:false, token: action.payload};
        case loginUserError:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}