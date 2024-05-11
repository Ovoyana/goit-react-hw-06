import { createSlice } from "@reduxjs/toolkit";
import { initialStateFilter } from "./availableContacts";

const slice = createSlice({
  name: "filters",
  initialState: initialStateFilter,

  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  }

});
export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const selectNameFilter = (state)=> state.filters.name;
