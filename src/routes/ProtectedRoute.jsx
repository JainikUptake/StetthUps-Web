import { Navigate } from "react-router-dom";
import Dashboard from "../pages/usersite/dashboard/dashboard";
import Profile from "../pages/usersite/profile/profile";
import HomePage from "../pages/usersite/Homepage/HomePage";
import SubscriptionPage from "../pages/usersite/subscriptions/subscriptions";

const ProtectedRoute = [
  { path: `*`, element: <Navigate to="/user/dashboard" replace /> },
  { path: `user/dashboard`, element: <Dashboard /> },
  { path: `user/profile`, element: <Profile /> },
  { path: `user/home`, element: <HomePage /> },
  { path: `user/Subscription`, element: <SubscriptionPage /> },
];

export default ProtectedRoute;
