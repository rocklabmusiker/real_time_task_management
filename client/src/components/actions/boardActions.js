import axios from 'axios'
export const BOARD_SUCCESS = 'BOARD_SUCCESS';
export const BOARD_ERROR = 'BOARD_ERROR'

export const boardActions = (boardName)=> async dispatch => {
    
       try {
        const res =await axios.post('http://localhost:3000/board/add', boardName)
              dispatch(
                {
                    type: BOARD_SUCCESS,
                    payload: res.data
                }
              )
       } catch (error) {

        dispatch({
            type: BOARD_ERROR,
            payload: error.response.data
        })
       }
}