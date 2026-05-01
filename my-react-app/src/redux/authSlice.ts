import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axiosTs.js';
import type {
  AuthState,
  GetMe,
  LoginResponse,
  RegisterResponse,
  User,
} from './TypeSlice/sliceTypeAuth.js';
import axios from 'axios';

const initialState: AuthState = {
  user: null,
  isAuth: false,
  statusUser: {
    status: 'idle',
    message: null,
    isLoding: false,
    error: null,
  },
  statusRegister: {
    status: 'idle',
    message: null,
    isLoding: false,
    error: null,
  },
  statusLogin: {
    status: 'idle',
    message: null,
    isLoding: false,
    error: null,
  },
};

export const registerUsers = createAsyncThunk<
  RegisterResponse,
  { username: string; password: string },
  { rejectValue: string }
>('/auth/register', async ({ username, password }, { rejectWithValue }) => {
  if (!username || !password) {
    return rejectWithValue('Заполните все поля');
  }
  try {
    const { data } = await api.post<RegisterResponse>('auth/register', {
      username,
      password,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || 'Ошибка сервера');
    }
    return rejectWithValue('Ошибка');
  }
});

export const loginUser = createAsyncThunk<
  LoginResponse,
  { username: string; password: string },
  { rejectValue: string }
>('/auth/login', async ({ username, password }, { rejectWithValue }) => {
  if (!username || !password) {
    return rejectWithValue('Заполните все поля');
  }
  try {
    const { data } = await api.post<LoginResponse>('auth/login', {
      username,
      password,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || 'Ошибка сервера');
    }
    return rejectWithValue('Ошибка');
  }
});

export const getMe = createAsyncThunk<GetMe, void, { rejectValue: string }>(
  '/auth/getme',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get<GetMe>('auth/getme');
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(
          error.response?.data.message || 'Ошибка сервера'
        );
      }
      return rejectWithValue('Ошибка');
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.statusUser.status = 'idle';
      state.statusUser.error = null;
      state.statusUser.message = null;
      state.isAuth = false;
      state.statusUser.isLoding = false;
    },
    clearStatus(state) {
      state.statusLogin = initialState.statusLogin
      state.statusRegister = initialState.statusRegister;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUsers.pending, (state) => {
        state.statusRegister.status = 'loading';
        state.statusRegister.error = null;
      })
      .addCase(registerUsers.fulfilled, (state, action) => {
        state.statusRegister.status = 'successed';
        state.isAuth = true;
        state.user = action.payload.user;
        state.statusRegister.message = action.payload.message;
        state.statusRegister.error = null;
        //   console.log(`Ответ сервера:  ${state.message} `);
        // console.log('User:', state.user);
      })
      .addCase(registerUsers.rejected, (state, action) => {
        state.statusRegister.status = 'failed';
        state.statusRegister.error = action.payload || 'Ошибка';
        ///////login user
      })
      .addCase(loginUser.pending, (state) => {
        state.statusLogin.status = 'loading';
        state.statusLogin.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.statusLogin.status = 'successed';
        state.isAuth = true;
        state.user = action.payload.user;
        state.statusLogin.message = action.payload.message;
        state.statusLogin.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.statusLogin.status = 'failed';
        state.statusLogin.error = action.payload || 'Ошибка';
      })
      ///////getme
      .addCase(getMe.pending, (state) => {
        state.statusUser.status = 'loading';
        state.statusUser.error = null;
        state.statusUser.isLoding = true;
      })

      .addCase(getMe.fulfilled, (state, action) => {
        state.statusUser.status = 'successed';
        state.isAuth = true;
        state.statusUser.isLoding = false;
        state.user = action.payload.user;
        state.statusUser.message = action.payload.message;
        state.statusUser.error = null;
        //  console.log(`Ответ сервера:  ${action.payload.message} `);
        //  console.log('User:', state.user);
      })
      .addCase(getMe.rejected, (state, action) => {
        state.statusUser.status = 'failed';
        state.isAuth = false;
        state.statusUser.isLoding = false;
        state.statusUser.error = action.payload || 'Ошибка';
      });
  },
});
export const { logout, clearStatus } = authSlice.actions;
export default authSlice.reducer;
