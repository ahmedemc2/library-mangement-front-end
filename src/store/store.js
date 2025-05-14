import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";

import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
