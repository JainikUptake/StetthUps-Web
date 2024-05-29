import { Navigate } from "react-router-dom";
import Home from "../pages/home/home";

const publicRoute = [
  // { path: `*`, element: <Navigate to="/" replace /> },
  { path: `/`, element: <Home /> },
];
export default publicRoute;
