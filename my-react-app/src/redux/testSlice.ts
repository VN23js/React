import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiTs from '../api/axiosTs.js';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export type ProfileUser = {
  UserName: string;
  maxPriceItem: {
    nameWeapon: string;
    nameSkin: string;
    price: number;
    linkImg: string;
  };
  inventory: {
    _id: string;
    nameWeapon: string;
    nameSkin: string;
    color: string;
    glowColor: string;
    glowRgb: string;
    linkImg: string;
    price: number;
    createdAt: string;
  }[];
};
type Status = 'idle' | 'loading' | 'successed' | 'error';
type GlobalState = {
  usersOnline: number | null;
  profileUser: ProfileUser | null;
  profileUserStatus: Status;
  profileUserError: string | null;
};

const initialState: GlobalState = {
  usersOnline: null,
  profileUser: null,
  profileUserStatus: 'idle',
  profileUserError: null,
};
export const getProfileUser = createAsyncThunk<
  ProfileUser,
  string,
  { rejectValue: string }
>('/api/case/profile/:id', async (id, { rejectWithValue }) => {
  try {
    const { data } = await apiTs.get<ProfileUser>(`/case/profile/${id}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || 'Ошибка сервера');
    }
    return rejectWithValue('Ошибка сервера');
  }
});

export const caseSliceTestTs = createSlice({
  name: 'caseTestTs',
  initialState,
  reducers: {
    UsersOnline: (state, action: PayloadAction<number>) => {
      state.usersOnline = action.payload;
    },
    ClearUserProfile: (state) => {
      state.profileUser = null;
      state.profileUserError = null;
      state.profileUserStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfileUser.pending, (state) => {
        state.profileUserStatus = 'loading';
        state.profileUserError = null;
      })
      .addCase(getProfileUser.fulfilled, (state, action) => {
        state.profileUser = action.payload;
        state.profileUserStatus = 'successed';
      })
      .addCase(getProfileUser.rejected, (state, action) => {
        state.profileUserStatus = 'error';
        state.profileUserError = action.payload ?? 'Ошибка сервера';
      });
  },
});
export const { UsersOnline, ClearUserProfile } = caseSliceTestTs.actions;
export default caseSliceTestTs.reducer;
