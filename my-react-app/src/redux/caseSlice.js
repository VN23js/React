import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/axios';


const initialState = {
  caseItems: [],
  itemsrulet: [],
  isLoding: false,
  message: '',
  winIndex: null,
  winItem: null,
  isWinModalOpen: false,
  cases: [],
  CaseName: null,
  session: [],
  inventory: [],

  // Статусы и ошибки для каждого запроса отдельно
  getItemsRulet: { status: 'idle', error: null },
  getcaseItems: { status: 'idle', error: null },
  randomItem: { status: 'idle', error: null },
  getAllCase: { status: 'idle', error: null },
  getAllSession: { status: 'idle', error: null },
  getAllInventory: { status: 'idle', error: null },
};

export const getItemsRuletFetch = createAsyncThunk(
  '/api/case/getitems',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/case/getitems/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Ошибка сервера');
    }
  }
);
export const getcaseItemsFetch = createAsyncThunk(
  '/api/case/getcase',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/case/getcase/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Ошибка сервера');
    }
  }
);
export const getAllCaseFetch = createAsyncThunk(
  '/api/case/getAllCase',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/case/getallcase');
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Ошибка сервера');
    }
  }
);
export const getAllSessionFetch = createAsyncThunk(
  '/api/case/getAllSession',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/case/getallsession');
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Ошибка сервера');
    }
  }
);
export const randomItemFetch = createAsyncThunk(
  '/api/case/random',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.post(`/case/random/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Ошибка сервера');
    }
  }
);
export const getAllInventoryFetch = createAsyncThunk(
  '/api/case/inventory',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('/case/inventory');
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Ошибка сервера');
    }
  }
);
export const caseSlice = createSlice({
  name: 'case',
  initialState,
  reducers: {
    addNewItemLenta: (state, action) => {
      state.session.unshift(action.payload);
      if (state.session.length > 10) state.session.pop();
    },
    closeWinModal: (state) => {
      state.isWinModalOpen = false;
    },
    openWinModal: (state) => {
      state.isWinModalOpen = true;
    },
    clearCase: (state) => {
      state.caseItems = [];
      state.itemsrulet = [];
      state.winIndex = null;
      state.CaseName = null;
      state.inventory = [];
    },
    clearInventory: (state) => {
      state.inventory = [];
      state.getAllInventory = { status: 'idle', error: null };
    },
    clearRuletItemsAndCaseItems: (state) => {
      state.caseItems = [];
      state.itemsrulet = [];
      state.getItemsRulet = { status: 'idle', error: null };
      state.getcaseItems = { status: 'idle', error: null };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItemsRuletFetch.pending, (state) => {
        state.getItemsRulet.status = 'loading';
        state.getItemsRulet.error = null;
      })
      .addCase(getItemsRuletFetch.fulfilled, (state, action) => {
        state.getItemsRulet.status = 'succeeded';
        state.itemsrulet = action.payload.itemsrulet;
        state.CaseName = action.payload.CaseName;
        state.getItemsRulet.error = null;
        state.message = action.payload.message;
      })
      .addCase(getItemsRuletFetch.rejected, (state, action) => {
        state.getItemsRulet.status = 'failed';
        state.getItemsRulet.error = action.payload?.message || 'Ошибка сервера';
      })
      ////Items in rulets
      .addCase(getcaseItemsFetch.pending, (state) => {
        state.getcaseItems.status = 'loading';
        state.getcaseItems.error = null;
      })
      .addCase(getcaseItemsFetch.fulfilled, (state, action) => {
        state.getcaseItems.status = 'succeeded';
        state.caseItems = action.payload.caseItems;
        state.getcaseItems.error = null;
        state.message = action.payload.message;
      })
      .addCase(getcaseItemsFetch.rejected, (state, action) => {
        state.getcaseItems.status = 'failed';
        state.getcaseItems.error = action.payload?.message || 'Ошибка сервера';
      })
      ////Random in rulets
      .addCase(randomItemFetch.pending, (state) => {
        state.randomItem.status = 'loading';
        state.randomItem.error = null;
      })
      .addCase(randomItemFetch.fulfilled, (state, action) => {
        state.randomItem.status = 'succeeded';
        state.winIndex = action.payload.winIndex;
        state.winItem = action.payload.winItem;

        state.message = action.payload.message;
        state.randomItem.error = null;
      })
      .addCase(randomItemFetch.rejected, (state, action) => {
        state.randomItem.status = 'failed';
        state.randomItem.error = action.payload?.message || 'Ошибка сервера';
      })
      ////GEt all case
      .addCase(getAllCaseFetch.pending, (state) => {
        state.getAllCase.status = 'loading';
        state.getAllCase.error = null;
      })
      .addCase(getAllCaseFetch.fulfilled, (state, action) => {
        state.getAllCase.status = 'succeeded';
        state.cases = action.payload.cases;
        state.message = action.payload.message;
        state.getAllCase.error = null;
      })
      .addCase(getAllCaseFetch.rejected, (state, action) => {
        state.getAllCase.status = 'failed';
        state.getAllCase.error = action.payload?.message || 'Ошибка сервера';
      })
      ////GEt all Session
      .addCase(getAllSessionFetch.pending, (state) => {
        state.getAllSession.status = 'loading';
        state.getAllSession.error = null;
      })
      .addCase(getAllSessionFetch.fulfilled, (state, action) => {
        state.getAllSession.status = 'succeeded';
        state.session = action.payload.DataWinIndex;
        state.message = action.payload.message;
        state.getAllSession.error = null;
      })
      .addCase(getAllSessionFetch.rejected, (state, action) => {
        state.getAllSession.status = 'failed';
        state.getAllSession.error = action.payload?.message || 'Ошибка сервера';
      })

      ////GEt all Invetory
      .addCase(getAllInventoryFetch.pending, (state) => {
        state.getAllInventory.status = 'loading';
        state.getAllInventory.error = null;
      })
      .addCase(getAllInventoryFetch.fulfilled, (state, action) => {
        state.getAllInventory.status = 'succeeded';
        state.inventory = action.payload.inventory;
        state.message = action.payload.message;
        state.getAllInventory.error = null;
      })
      .addCase(getAllInventoryFetch.rejected, (state, action) => {
        state.getAllInventory.status = 'failed';
        state.getAllInventory.error =
          action.payload?.message || 'Ошибка сервера';
      });
  },
});

export const {
  clearCase,
  closeWinModal,
  clearInventory,
  openWinModal,
  addNewItemLenta,
  clearRuletItemsAndCaseItems,
} = caseSlice.actions;
export default caseSlice.reducer;
