import { Navigate } from "react-router-dom";
import Dashboard from "../pages/usersite/dashboard/dashboard";
import HomePage from "../pages/usersite/Homepage/HomePage";
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

const ProtectedRoute = [
  { path: `*`, element: <Navigate to="/user/dashboard" replace /> },
  { path: `/user/dashboard`, element: <Dashboard /> },
  { path: `/user/play`, element: <Play /> },
  { path: `/user/download`, element: <Download /> },
  { path: `/user/home`, element: <HomePage /> },
  { path: `/user/sub`, element: <SubscriptionPage /> },
  { path: `/user/Streaks`, element: <Streaks /> },
  { path: `/user/feedback`, element: <Feedback/> },

  { path: `/user/setting`, element: <Setting /> },
  { path: `/user/contact`, element: <ContactUs /> },
  { path: `/user/about`, element: <AboutUs /> },
  { path: `/user/faqs`, element: <FAQs /> },
  { path: `/user/profile`, element: <UserProfile/> },
  { path: `/user/statistics`, element: <Statistics /> },
  {path: `/user/sub/plan/:id`, element: <SubPlans />}
];

export default ProtectedRoute;
