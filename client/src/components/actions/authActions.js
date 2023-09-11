import instance from './axiosConfig'
export const loginUserRequest = (userData) => ({
    type: 'LOGIN_USER_REQUEST',
    payload: userData
});
export const loginUserSuccess = (token) => ({
    type: 'LOGIN_USER_SUCCESS',
    payload: token,
});

export const loginUserError =(error) => ({
    type: 'LOGIN_USER_ERROR',
    payload: 'error',
});

export const loginUser = (userData) => dispatch =>{
    dispatch(loginUserRequest());
    instance.post('/api/auth/login',userData)
    .then(response =>{
        const data = response.data;
        if(data.success){
        dispatch(loginUserSuccess(data.token));
        localStorage.setItem('authToken',data.token)
        } else {
            dispatch(loginUserError(data.errors));
        }
    })
    .catch(error => { 
        const errorMessage = error.response ? error.response.data : error.message;
        dispatch(loginUserError(errorMessage));
    })
} 