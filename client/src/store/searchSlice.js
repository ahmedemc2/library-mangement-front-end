import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchBook: "",
};

const searchReducer = createSlice({
  name: "searchBook",
  initialState,
  reducers: {
    setSearchBook: (state, action) => {
      state.searchBook = action.payload;
    },
  },
});

export const { setSearchBook } = searchReducer.actions;
export default searchReducer.reducer;
