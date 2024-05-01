import { Navigate } from "react-router-dom";
import Email from "../pages/auth/login/email/email";
import Phone from "../pages/auth/login/phone/phone";
import Register from "../pages/auth/register/register";
import Verify from "../pages/auth/register/verify/verify";

const PrivateRoute = [
  { path: `*`, element: <Navigate to="/auth/login/email" replace /> },
  { path: `auth/login/email`, element: <Email /> },
  { path: `auth/login/phone`, element: <Phone /> },
  { path: `auth/register`, element: <Register /> },
  { path: `auth/register/verify`, element: <Verify /> },
];
export default PrivateRoute;
