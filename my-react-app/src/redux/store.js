import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice.js';
import todoSlice from './todoSlice.js';
import caseSlice from './caseSlice.js';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    todo: todoSlice,
    case: caseSlice,
  },
});
//console.log(store.getState());
export default store;
//export type RootState = ReturnType<typeof store.getState>;
