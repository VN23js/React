import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';

const initialState = {
  user: null,
  isLoding: false,
  status: 'idle',
  message: '',
  isAuth: false,
};

export const registerUsers = createAsyncThunk(
  '/auth/register',
  async ({ username, password }, { rejectWithValue }) => {
    if (!username || !password) {
      return rejectWithValue({ message: 'Заполните все поля' });
    }
    try {
      const { data } = await api.post('auth/register', { username, password });
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || 'Ошибка сервера',
      });
    }
  }
);

export const loginUser = createAsyncThunk(
  '/auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    if (!username || !password) {
      return rejectWithValue({ message: 'Заполните все поля' });
    }
    try {
      const { data } = await api.post('auth/login', { username, password });
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || 'Ошибка сервера',
      });
    }
  }
);

export const getMe = createAsyncThunk(
  '/auth/getme',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('auth/getme');
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Ошибка сервера');
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.status = 'idle';
      state.error = null;
      state.message = null;
      state.isAuth = false;
      state.isLoding = false;
    },
    clearError(state) {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(registerUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuth = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
        state.error = null;
        console.log(`Ответ сервера:  ${state.message} `);
        console.log('User:', state.user);
      })
      .addCase(registerUsers.rejected, (state, action) => {
        state.status = 'failed';
        console.log('REJECTED', action.payload?.message);
        state.error = action.payload?.message || 'Ошибка';
        ///////login user
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.erro = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuth = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
        state.error = null;
        console.log(`Ответ сервера:  ${state.message} `);
        console.log('User:', state.user);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Ошибка';
      })
      ///////getme
      .addCase(getMe.pending, (state) => {
        state.status = 'loading';
        state.erro = null;
        state.isLoding = true;
      })

      .addCase(getMe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuth = true;
        state.isLoding = false;
        state.user = action.payload.user;
        state.message = action.payload.message;
        state.erro = null;
        console.log(`Ответ сервера:  ${action.payload.message} `);
        console.log('User:', state.user);
      })
      .addCase(getMe.rejected, (state, action) => {
        state.status = 'failed';
        state.isAuth = false;
        state.isLoding = false;
        state.erro = action.payload?.message || 'Ошибка';
      });
  },
});
export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
