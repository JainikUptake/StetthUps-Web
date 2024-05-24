import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./redux-toolkit/UserSlice";
import ProfileSlice from "./redux-toolkit/ProfileSlice";
import { subscriptionPlanByIdReducer, subscriptionPlanByUserReducer, subscriptionPlanReducer } from "./redux-toolkit/subscriptionsSlice";
import { feedbackSliceReducer } from "./redux-toolkit/FeedbackSlice";
import { faqsSliceReducer } from "./redux-toolkit/FaqsSlice";
import { claimLifeLineSliceReducer, getStreakSliceReducer } from "./redux-toolkit/streakSlice";
import {  getSubjectSliceReducer } from "./redux-toolkit/subjectSlice";
import { getTopicBySubjectIdSliceReducer } from "./redux-toolkit/topicSlice";
import { getCaseByTopicIdSliceReducer } from "./redux-toolkit/caseSlice";
import { getCaseByCaseIdSliceReducer } from "./redux-toolkit/getCaseSlice";
import { getQuizByCaseIdSliceReducer } from "./redux-toolkit/caseQuizSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    userDetails:ProfileSlice,
    subscriptionPlan : subscriptionPlanReducer,
    subscriptionPlanById : subscriptionPlanByIdReducer,
    subscriptionPlanByUser: subscriptionPlanByUserReducer,
    feedback:feedbackSliceReducer,
    faqs:faqsSliceReducer,
    getStreak:getStreakSliceReducer,
    claimLifeLine:claimLifeLineSliceReducer,
    getSubject:getSubjectSliceReducer,
    getTopicBySubject:getTopicBySubjectIdSliceReducer,
    getCaseByTopic:getCaseByTopicIdSliceReducer,
    getCaseByCaseId:getCaseByCaseIdSliceReducer,
    getQuizByCaseId:getQuizByCaseIdSliceReducer
  
  },
});
export default store;
