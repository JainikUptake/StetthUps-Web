import React, { useState } from "react";
import "./email.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../../redux-toolkit/UserSlice";
import axios from "axios";
// import { loginUser } from "../../../../redux-toolkit/UserSlice";
const Email = () => {
  //redux state

  const { loading, error } = useSelector((state) => state.user);

  //state
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleLoginEvent = (e) => {
  //   e.preventDefault();
  //   let userCredential = {
  //     userEmail,
  //     password,
  //   };
  //   dispatch(loginUser(userCredential)).then((result) => {
  //     if (result.payload) {
  //       // setCount(count + 1)}
  //       setUserEmail("");
  //       setPassword("");
  //       navigate("/user/dashboard");
  //     }
  //   });
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = {
        userEmail,
        password,
      };
      console.log(userCredential);
      const response = await dispatch(loginUser(userCredential));

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section
        className="h-100 gradient-form"
        style={{ backgroundColor: "black" }}
      >
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: 185 }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          We are The Lotus Team
                        </h4>
                      </div>
                      <form onSubmit={handleLogin}>
                        <p>Please login to your account</p>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            required
                            id="form2Example11"
                            className="form-control"
                            placeholder="Phone number or email address"
                          />
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            required
                            id="form2Example22"
                            className="form-control"
                            placeholder="Enter your password"
                          />
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-primary btn-block fa-lg gradient-custom-2"
                            type="submit"
                          >
                            {loading ? "loading" : "login"}
                          </button>
                          {error && (
                            <div className="alert alert-danger" role="alert">
                              {error}
                            </div>
                          )}
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-outline-danger"
                            onClick={() => navigate("/auth/register")}
                          >
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container logIn">
        <div className="text-center">
          <h2>Login</h2>
        </div>
      </div>
      <div>
        <div>
          <form onSubmit={handleLogin}>
            <div className="mb-3  d-flex justify-content-center">
              <input
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                type="email"
                required
                className="form-control w-25"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                className="form-control w-25"
                placeholder="Enter Password"
              />
            </div>

            <div className="d-grid gap-2 mb-3  d-flex justify-content-center">
              <button className=" authLoginBtn w-25" type="submit">
                {loading ? "loading" : "login"}
              </button>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
            </div>
            <div className="mb-3 ">
              <p className=" d-flex justify-content-center text-muted">
                Not a user?{" "}
                <Link to="/auth/register" className=" signUpLink mx-1">
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="mb-3">
              <p className=" d-flex justify-content-center text-muted">
                Or Login through{" "}
                <Link to="" className="signUpLink mx-1">
                  Phone No
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default Email;
