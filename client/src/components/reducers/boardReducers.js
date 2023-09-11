import {
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_ERROR
} from '../actions/boardActions';

const initialState = {
  loading: false,
  boards: [],
  error: null
};

export const boardReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_BOARD_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_BOARD_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        boards: [...state.boards, action.payload.newBoard], 
        error: null 
      };
    case CREATE_BOARD_ERROR:
      return { 
        ...state, 
        loading: false, 
        error: action.payload.message || action.payload 
      };
    default:
      return state;
  }
};
