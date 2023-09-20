import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

interface Board {
  boardName: string;
  createdBy: string;
}

interface ErrorResponse {
  message: string;
}

interface BoardState {
  data: Board | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: BoardState = {
  data: null,
  error: null,
  isLoading: false
};

export const createBoard = createAsyncThunk(
  'board/create',
  async (boardData: Board, thunkAPI) => {
    try {
      const response = await axios.post('', boardData);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError && axiosError.response && axiosError.response.data) {
        return thunkAPI.rejectWithValue(axiosError.response.data.message);
      } else {
        return thunkAPI.rejectWithValue('An unknown error occurred.');
      }
    }
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    boardRequest: state => {
      state.isLoading = true;
      state.error = null;
    },
    boardSuccess:
      (createBoard.fulfilled,
      (state, action: PayloadAction<Board>) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      }),
    boardError:
      (createBoard.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.isLoading = false;
      })
  }
});
export const { boardRequest, boardSuccess, boardError } = boardSlice.actions;
export default boardSlice.reducer;
