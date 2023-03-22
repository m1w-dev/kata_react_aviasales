import { createSlice } from '@reduxjs/toolkit';

const aviasales = {};

const sort = createSlice({
  name: 'sort',
  initialState: 'fast',
  reducers: {
    setSort(state, action) {
      return action.payload;
    },
  },
});

aviasales.sort = sort.reducer;
export const { setSort } = sort.actions;

const filter = createSlice({
  name: 'filter',
  initialState: ['t0', 't1', 't2', 't3'],
  reducers: {
    setFilter(store, action) {
      return action.payload;
    },
  },
});
aviasales.filter = filter.reducer;
export const { setFilter } = filter.actions;

const isLoading = createSlice({
  name: 'isLoading',
  initialState: true,
  reducers: {
    setLoading(store, action) {
      return action.payload;
    },
  },
});

aviasales.isLoading = isLoading.reducer;
export const { setLoading } = isLoading.actions;

export default aviasales;
