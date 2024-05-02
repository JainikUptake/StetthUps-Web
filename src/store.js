import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux-toolkit/UserSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
export default store;
