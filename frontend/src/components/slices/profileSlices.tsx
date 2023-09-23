import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isLoggedIn: boolean;
    username?: string | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    username: null
    
};

export const profileSlices = createSlice ({
    name: 'profile',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>){
            state.isLoggedIn= true;
            state.username =action.payload;
        },
        logout(state){
            state.isLoggedIn = false;
            state.username = null;
            localStorage.removeItem('token')
        
        }
    }
})
export const { login, logout} = profileSlices.actions;
export default profileSlices.reducer