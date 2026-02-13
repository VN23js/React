import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/axios';

const initialState = {
  todos: [],
  isLodingTodo: null,
  status: 'idle',
  message: null,
};

export const postTodo = createAsyncThunk(
  '/postodo',
  async ({ title, text }, { rejectWithValue }) => {
    if (!title || !text) {
      return rejectWithValue({ message: 'Заполните все поля' });
    }
    try {
      const { data } = await api.post('todo/postodo', { title, text });
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || 'Ошибка сервера',
      });
    }
  }
);

export const updateTodo = createAsyncThunk(
  'updatetodo',
  async ({ title, text, id }, { rejectWithValue }) => {
    if (!title || !text) {
      return rejectWithValue({ message: 'Заполните все поля' });
    }
    try {
      const { data } = await api.put('todo/updatetodo', { title, text, id });
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || 'Ошибка сервера',
      });
    }
  }
);
export const deleteTodo = createAsyncThunk(
  'deletetodo',
  async (id, { rejectWithValue }) => {
    if (!id) {
      return rejectWithValue({ message: 'Ошибка', error });
    }
    try {
      const { data } = await api.delete('todo/deletetodo', {
        data: { id },
      });
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || 'Ошибка сервера',
      });
    }
  }
);
export const completedTodo = createAsyncThunk(
  'completed',
  async (id, { rejectWithValue }) => {
    console.log(id);
    if (!id) {
      return rejectWithValue({ message: 'Ошибка', error });
    }
    try {
      const { data } = await api.patch('todo/completed', { id });
      console.log(id);

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.response?.data?.message || 'Ошибка сервера',
      });
    }
  }
);
export const getTodo = createAsyncThunk(
  '/gettodo',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get('todo/getodo');
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Ошибка сервера');
    }
  }
);
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    clear: (state) => {
      state.error = null;
      state.message = null;
      state.status = null;
      state.isLodingTodo = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postTodo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(postTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isLodingTodo = true;
        state.error = null;
        state.todos.push(action.payload.newTodo);
        state.message = action.payload.message;
      })
      .addCase(postTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.isLodingTodo = true;
        state.error = action.payload?.message || 'Ошибка сервера';
      })

      //getpost
      .addCase(getTodo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.isLodingTodo = true;
        state.todos = action.payload.todos || [];
        state.message = action.payload.message;
      })
      .addCase(getTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.isLodingTodo = true;
        state.error = action.payload?.message || 'Ошибка сервера';
      })
      //update
      .addCase(updateTodo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.isLodingTodo = true;
        const updateTodos = action.payload.todos;
        state.todos = state.todos.map((todo) =>
          todo._id === updateTodos._id ? updateTodos : todo
        );
        // console.log(updateTodos);
        /// console.log(state.todos);
        state.message = action.payload.message;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Ошибка сервера';
      })
      //delete
      .addCase(deleteTodo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.isLodingTodo = true;
        const deleteteTodos = action.payload.todos;

        console.log(deleteteTodos);
        state.todos = state.todos.filter(
          (todo) => todo._id !== deleteteTodos._id
        );
        console.log(state.todos);
        state.message = action.payload.message;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Ошибка сервера';
      })
      //update completed
      .addCase(completedTodo.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(completedTodo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.isLodingTodo = true;
        const updateTodos = action.payload.todos;
        state.todos = state.todos.map((todo) =>
          todo._id === updateTodos._id ? updateTodos : todo
        );
        // console.log(updateTodos);
        /// console.log(state.todos);
        state.message = action.payload.message;
      })
      .addCase(completedTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Ошибка сервера';
      });
  },
});
export const { clear } = todoSlice.actions;
export default todoSlice.reducer;
