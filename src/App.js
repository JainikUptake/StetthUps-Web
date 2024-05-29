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