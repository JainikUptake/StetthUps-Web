import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import publicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/home/home";
import ProtectedRoute from "./routes/ProtectedRoute";
import useAuth from "./hooks/useAuth";
import { Provider } from "react-redux";
import store from "./store";

const Root = () => {
  const isAuth = true;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {isAuth
            ? ProtectedRoute.map((route, index) => (
                <Route key={index} {...route} />
              ))
            : PrivateRoute.map((route, index) => (
                <Route key={index} {...route} />
              ))}

          {publicRoute.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));
