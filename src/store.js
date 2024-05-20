import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux-toolkit/UserSlice";
import ProfileSlice from "./redux-toolkit/ProfileSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    userDetails:ProfileSlice,
  },
});
export default store;
