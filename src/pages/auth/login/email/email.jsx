import React, { useState } from "react";
import "./email.css";
import { Link } from "react-router-dom";
const Email = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const ProceedLogin = (e) => {
    e.preventDefault();
  };
  const handleLogin = () => {
    console.log(userEmail, password);
  };

  return (
    <>
      <div className="container logIn">
        <div className="text-center">
          <h2>Login</h2>
        </div>
      </div>
      <div>
        <div>
          <form>
            <div className="mb-3  d-flex justify-content-center">
              <input
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                type="email"
                className="form-control w-25"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control w-25"
                placeholder="Enter Password"
              />
            </div>

            <div className="d-grid gap-2 mb-3  d-flex justify-content-center">
              <button
                className=" loginBtn w-25"
                type="button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="mb-3 ">
              <p className=" d-flex justify-content-center text-muted">
                Not a user?{" "}
                <Link to="" className=" signUpLink mx-1">
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
      </div>
    </>
  );
};

export default Email;
