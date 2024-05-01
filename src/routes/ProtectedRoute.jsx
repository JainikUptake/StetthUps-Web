import { Navigate } from "react-router-dom";
import Dashboard from "../pages/usersite/dashboard/dashboard";
import Profile from "../pages/usersite/profile/profile";

const ProtectedRoute = [
  { path: `*`, element: <Navigate to="/user/dashboard" replace /> },
  { path: `user/dashboard`, element: <Dashboard /> },
  { path: `user/profile`, element: <Profile /> },
];

export default ProtectedRoute;
