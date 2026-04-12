import { configureStore } from '@reduxjs/toolkit';
// @ts-ignore
import authSlice from './authSlice.js';
// @ts-ignore
import todoSlice from './todoSlice.js';
// @ts-ignore
import caseSlice from './caseSlice.js';
import caseSliceTestTs from './testSlice.js';
export const store = configureStore({
  reducer: {
    auth: authSlice,
    todo: todoSlice,
    case: caseSlice,
    caseTestTs: caseSliceTestTs,
  },
});
export type AppDispatch = typeof store.dispatch;

//console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
export default store;
