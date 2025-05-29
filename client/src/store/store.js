import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    searchBook: searchReducer,
  },
});

export default store;
