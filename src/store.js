import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux-toolkit/UserSlice";
import ProfileSlice from "./redux-toolkit/ProfileSlice";
import subscriptionsSlice from "./redux-toolkit/subscriptionsSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    userDetails:ProfileSlice,
    subscriptionPlan : subscriptionsSlice,
  },
});
export default store;
