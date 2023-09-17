import { configureStore } from '@reduxjs/toolkit';
import { userLoginSlice } from './components/slices/userSlices';

export const store = configureStore({
  reducer: {
    user: userLoginSlice.reducer,
    
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;