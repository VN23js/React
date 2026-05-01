import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiTs from '../api/axiosTs.js';
import type { Status, WeaponForm } from './TypeSlice/sliceTypeAdmin.js';
import type { TypeNewSkin } from './TypeSlice/sliceTypeAdmin.js';
import axios from 'axios';

export const postNewSkin = createAsyncThunk<
  TypeNewSkin,
  { payloadData: WeaponForm },
  { rejectValue: string }
>('case/post/newskin', async ({ payloadData }, { rejectWithValue }) => {
  try {
    const { data } = await apiTs.post<TypeNewSkin>('/admin/createweapon', {
      payloadData,
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data?.message || 'Ошибка сервера');
    }
    return rejectWithValue('Ошибка сервера');
  }
});
