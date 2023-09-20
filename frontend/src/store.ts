import { configureStore } from '@reduxjs/toolkit';
import { userLoginSlice } from './components/slices/userSlices';
import {boardSlice} from './components/slices/boardSlices';
export const store = configureStore({
  reducer: {
    user: userLoginSlice.reducer,
    board: boardSlice.reducer
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
