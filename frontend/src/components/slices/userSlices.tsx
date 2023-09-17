import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    initialuser: {
        id?: string;
        username?: string;
        email?: string;
      
    } | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}
const initialState: UserState ={
    initialuser: null,
    isAuthenticated: false,
    isLoading: false,
    error: null
}

export const userLoginSlice = createSlice({
    name: 'userData',
    initialState,
    reducers:{
        loginRequest: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action: PayloadAction<{token: string, user: {id:string, username:string, email:string}}>) => {
           state.initialuser = action.payload.user;
           state.isAuthenticated = true;
           state.isLoading = false;
           state.error = null;
           localStorage.setItem("token", action.payload.token)
        },
        loginFailure: (state,action: PayloadAction<string>) => {
           state.isLoading = false;
           state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.initialuser = null;
            localStorage.removeItem("token")
        }
      
    }
});

export const {loginRequest, loginSuccess, loginFailure, logout} = userLoginSlice.actions;

export default userLoginSlice.reducer;