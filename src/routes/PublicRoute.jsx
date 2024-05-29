import { Navigate } from "react-router-dom";
import Home from "../pages/public/home";


const publicRoute = [
  {
    path: `*`,
    element: <Navigate to="/" replace />,
  },
  {
    path: `/`,
    element: <Home />,
  },
];