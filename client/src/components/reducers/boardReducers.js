import { BOARD_SUCCESS, BOARD_ERROR } from '../actions/boardActions';

const initialState = {
  board: null,
  error: null,
};

export const boardReducers = (state = initialState, action) => {
  switch (action.type) {
    case BOARD_SUCCESS:
      return {
        ...state,
        board: action.payload,
      };
    case BOARD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};