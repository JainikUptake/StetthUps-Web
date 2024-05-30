import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  Navigate,
  Routes,
} from "react-router-dom";
import Home from "./pages/public/home";
import Dashboard from "./pages/user/dashboard";
import Register from "./pages/auth/register";
import Private from "./routes/PrivateRoute";
import Protected from "./routes/ProtectedRoute";
import LoginWithEmail from "./pages/auth/login/email";
import LoginWithPhone from "./pages/auth/login/phone";
import ForgotPassword from "./pages/auth/forget/verify";
import ResetPassword from "./pages/auth/forget/reset";
import OTP from "./pages/auth/login/phone/otp";


const Layout = () => {
  return (
    <div>
      {/* <Header />
      <HeaderBottom />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <FooterBottom /> */}
      hi
      <Outlet />
      hi
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public Route Start Here */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        
        {/* Public Route End Here */}

        {/* Protected Route */}
        <Route
          path="/user/dashboard"
          element={<Protected component={<Dashboard />} />}
        ></Route>
        

        {/* Protected Route End Here */}
      </Route>
      {/* Private Route */}
      <Route
        path="/auth/register"
        element={<Private privateComponent={<Register />} />}
      ></Route>
      <Route
        path="/auth/login/email"
        element={<Private privateComponent={<LoginWithEmail />} />}
      ></Route>
      <Route
        path="/auth/login/phone"
        element={<Private privateComponent={<LoginWithPhone />} />}
      ></Route>
      <Route
        path="/auth/login/phone/otp"
        element={<Private privateComponent={<OTP />} />}
      ></Route>
       <Route
        path="/auth/forget/password"
        element={<Private privateComponent={<ForgotPassword />} />}
      ></Route>
       <Route
        path="/auth/reset/password"
        element={<Private privateComponent={<ResetPassword />} />}
      ></Route>
      
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;