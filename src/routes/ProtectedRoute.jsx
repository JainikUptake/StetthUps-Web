import React from "react";
import { Navigate } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import Dashboard from "../pages/usersite/dashboard/dashboard";
import SubscriptionPage from "../pages/usersite/subscriptions/SubscriptionPage";
import Setting from "../pages/Settings/setting";
import Streaks from "../pages/usersite/Streaks/Streaks";
import ContactUs from "../pages/usersite/contactUs/contactUs";
import AboutUs from "../pages/usersite/AboutUs/AboutUs";
import FAQs from "../pages/usersite/FAQ/FAQ";
import UserProfile from "../pages/usersite/UserProfile/UserProfile";
import Statistics from "../pages/usersite/Statistics/statistics";
import SubPlans from "../pages/usersite/subPlans/subPlans";
import Play from "../pages/usersite/Play/play";
import Download from "../pages/usersite/Download/download";
import Feedback from "../pages/usersite/feedback/feedback";
import PaymentForm from "../components/checkout/checkOutForm";
import CheckoutForm from "../components/checkout/checkOutForm";
import Topic from "../pages/usersite/topic/topic";
import Subject from "../pages/usersite/subject/subject";
import Case from "../pages/usersite/case/case";
import CaseVideo from "../pages/usersite/caseVideo/CaseVideo";
import CaseDescription from "../pages/usersite/caseDescription/caseDescription";
import CaseQuiz from "../pages/usersite/caseQuiz/caseQuiz";
import UserResult from "../pages/usersite/userResult/userResult";
import UserSummary from "../pages/usersite/userSummary/userSummary";
// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51O1oMhSJfgZ8GqHz1kiGH5ATKo4cfJh5ClwBcoq7G2h8fAPwzojiYMb0Ekq6FsOSu5jD7O6RL4Nc3SgnrTZjz8Yn00SCH5KKEy"
// );

const ProtectedRoute = [
  { path: "*", element: <Navigate to="/user/dashboard" replace /> },
  { path: "/user/dashboard", element: <Dashboard /> },
  { path: "/user/play", element: <Play /> },
  { path: "/user/download", element: <Download /> },
  { path: "/user/sub", element: <SubscriptionPage /> },
  { path: "/user/Streaks", element: <Streaks /> },
  { path: "/user/feedback", element: <Feedback /> },
  { path: "/user/setting", element: <Setting /> },
  { path: "/user/contact", element: <ContactUs /> },
  { path: "/user/about", element: <AboutUs /> },
  { path: "/user/faqs", element: <FAQs /> },
  { path: "/user/profile", element: <UserProfile /> },
  { path: "/user/statistics", element: <Statistics /> },
  { path: "/user/sub/plan/:id", element: <SubPlans /> },
  { path: "/user/case/:id", element: <Case /> },
  { path: "/user/case/video/:id", element: <CaseVideo /> },
  { path: "/user/subject", element: <Subject /> },
  { path: "/user/topic/:id", element: <Topic /> },
  { path: "/user/case/desc/:id", element: <CaseDescription /> },
  { path: "/user/case/quiz/:id", element: <CaseQuiz /> },
  { path: "/user/case/quiz/result/:id", element: <UserResult /> },
  { path: "/user/case/quiz/summary/:id", element: <UserSummary /> },


  // {
  //   path: "/user/payment",
  //   element: (
  //     <Elements stripe={stripePromise}>
  //       <CheckoutForm />
  //     </Elements>
  //   ),
  // },
];

export default ProtectedRoute;
