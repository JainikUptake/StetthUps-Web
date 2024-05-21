import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux-toolkit/UserSlice";
import ProfileSlice from "./redux-toolkit/ProfileSlice";
import { subscriptionPlanByIdReducer, subscriptionPlanByUserReducer, subscriptionPlanReducer } from "./redux-toolkit/subscriptionsSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    userDetails:ProfileSlice,
    subscriptionPlan : subscriptionPlanReducer,
    subscriptionPlanById : subscriptionPlanByIdReducer,
    subscriptionPlanByUser: subscriptionPlanByUserReducer
  },
});
export default store;
