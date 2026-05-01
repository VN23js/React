import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiTs from '../api/axiosTs.js';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import type { MoreInventory, ProfileUser } from './TypeSlice/sliceTypeCase.js';
import type { DataWinIndex } from './TypeSlice/sliceTypeCase.js';
type Status = 'idle' | 'loading' | 'successed' | 'error';
type GlobalState = {
  usersOnline: number | null;
  profileUser: ProfileUser | null;
  DataWinIndex: DataWinIndex;
  profileUserStatus: Status;
  profileUserError: string | null;
  sessionStatus: Status;
  sessionError: string | null;
  moreItemsStatus: Status;
  moreItemsError: string | null;
  hasMore: boolean;
};

const initialState: GlobalState = {
  usersOnline: null,
  profileUser: null,
  profileUserStatus: 'idle',
  sessionStatus: 'idle',
  moreItemsStatus: 'idle',
  sessionError: null,
  profileUserError: null,
  moreItemsError: null,
  DataWinIndex: [],
  hasMore: false,
};

export const getAllSessionFetch = createAsyncThunk<
  DataWinIndex,
  void,
  { rejectValue: string }
>('/api/case/getAllSession', async (_, { rejectWithValue }) => {
  try {
    const { data } = await apiTs.get<{ DataWinIndex: DataWinIndex }>(
      '/case/getallsession'
    );
    return data.DataWinIndex;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || 'Ошибка сервера');
    }
    return rejectWithValue('Ошибка сервера');
  }
});

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
export const gethasMoreItems = createAsyncThunk<
  MoreInventory,
  { id: string; nextPage: number },
  { rejectValue: string }
>('profile/gethasMoreItems', async ({ id, nextPage }, { rejectWithValue }) => {
  try {
    const { data } = await apiTs.get<MoreInventory>(`/case/profile/${id}`, {
      params: { page: nextPage },
    });

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
    addNewItemLenta: (state, action: PayloadAction<DataWinIndex[number]>) => {
      state.DataWinIndex.unshift(action.payload);
      if (state.DataWinIndex.length > 15) state.DataWinIndex.pop();
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
        state.hasMore = action.payload.hasMore;
      })
      .addCase(getProfileUser.rejected, (state, action) => {
        state.profileUserStatus = 'error';
        state.profileUserError = action.payload ?? 'Ошибка сервера';
      })
      //GET ALL SESSION
      .addCase(getAllSessionFetch.pending, (state) => {
        state.sessionStatus = 'loading';
        state.sessionError = null;
      })
      .addCase(getAllSessionFetch.fulfilled, (state, action) => {
        state.DataWinIndex = action.payload;
        state.sessionStatus = 'successed';
      })
      .addCase(getAllSessionFetch.rejected, (state, action) => {
        state.sessionStatus = 'error';
        state.sessionError = action.payload ?? 'Ошибка сервера';
      })
      //
      //MoreItems
      .addCase(gethasMoreItems.pending, (state) => {
        state.moreItemsStatus = 'loading';
        state.moreItemsError = null;
      })
      .addCase(gethasMoreItems.fulfilled, (state, action) => {
        if (state.profileUser) {
          state.profileUser.inventory.push(...action.payload.inventory);
        }
        state.hasMore = action.payload.hasMore;
        state.moreItemsStatus = 'successed';
      })
      .addCase(gethasMoreItems.rejected, (state, action) => {
        state.moreItemsStatus = 'error';
        state.moreItemsError = action.payload ?? 'Ошибка сервера';
      });
  },
});
export const { UsersOnline, ClearUserProfile, addNewItemLenta } =
  caseSliceTestTs.actions;
export default caseSliceTestTs.reducer;
