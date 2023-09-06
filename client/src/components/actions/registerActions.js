import axios from "axios";
export const REGISTER_SUCCESS ='REGISTER_SUCCESS';
export const REGISTER_ERROR ='REGISTER_ERROR';

export const registerUser = (data) =>async dispatch => {
  try {
    const res = await axios.post('http://localhost:3000/api/auth/register',data)
    dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    });
  } catch(error) {
    dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data
    })
  }
};