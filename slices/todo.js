import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getTodos = createAsyncThunk('getTodos', async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10'
  );
  const res = await response.json();
  return res;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const reducer = todoSlice.reducer;

export default todoSlice;
