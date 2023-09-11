import instance from './axiosConfig'
export const CREATE_BOARD_REQUEST = 'CREATE_BOARD_REQUEST';
export const CREATE_BOARD_SUCCESS = 'CREATE_BOARD_SUCCESS';
export const CREATE_BOARD_ERROR = 'CREATE_BOARD_ERROR';

export const createBoard = (board) => {
  console.log(board); 
  return (dispatch) => {
    dispatch({ type: CREATE_BOARD_REQUEST });

    instance.post('/board/add', board)

      .then(response => {
        dispatch({ type: CREATE_BOARD_SUCCESS, payload: response.data });
      })
      .catch(error => {
        console.log(error.response);  // Log the full error response
        dispatch({ type: CREATE_BOARD_ERROR, payload: error });
      });
  }
};
