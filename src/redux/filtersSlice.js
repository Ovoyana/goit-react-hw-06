import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
  name: '',
},
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  selectors: {
    selectNameFilter: (state) => state.filters.name,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },

});

export const { changeFilter } = filtersSlice.actions;
export const {selectNameFilter} = filtersSlice.selectors;
export const filtersReducer = filtersSlice.reducer;