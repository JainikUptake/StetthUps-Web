import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux-toolkit/UserSlice";
import ProfileSlice from "./redux-toolkit/ProfileSlice";
import { subscriptionPlanByIdReducer, subscriptionPlanByUserReducer, subscriptionPlanReducer } from "./redux-toolkit/subscriptionsSlice";
import { feedbackSliceReducer } from "./redux-toolkit/FeedbackSlice";
import { faqsSliceReducer } from "./redux-toolkit/FaqsSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    userDetails:ProfileSlice,
    subscriptionPlan : subscriptionPlanReducer,
    subscriptionPlanById : subscriptionPlanByIdReducer,
    subscriptionPlanByUser: subscriptionPlanByUserReducer,
    feedback:feedbackSliceReducer,
    faqs:faqsSliceReducer,
  },
});
export default store;
