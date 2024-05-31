import React, { useState } from "react";
import "./style.css";
import {
  Col,
  Form,
  Input,
  Row,
  Button,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginWithEmail } from "../../../../redux-toolkit/authSlice";

const LoginWithEmails = () => {
  const { loginWithEmails, loadingLoginWithEmail, errorLoginWithEmail } = useSelector((state) => state.userLoginWithEmail);

  // State
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    try {
      const userCredential = {
        email: userEmail,
        password,
      };
      console.log(userCredential, "user credential");
      const response = await dispatch(LoginWithEmail(userCredential));
      console.log(response);
      // if (response?.data) {
      //   // handle successful login
      //   navigate("/dashboard"); // or wherever you want to redirect after login
      // }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background-image">
      <div className="login-container">
        <div className="login-card">
          <div className="login-title">
            <h3 className="fw-bold">Sign In</h3>
            <span className="text-secondary">Sign In to your account</span>
          </div>

          <Form className="login-form" onSubmit={handleLoginWithEmail}>
            <Row className="login-row">
              <Col xs={12} md={12} lg={12}>
                <InputGroup>
                  <InputGroupText>
                    <Mail />
                  </InputGroupText>
                  <Input
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    id="email"
                    name="email"
                    placeholder="email"
                    type="email"
                    required
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <InputGroup>
                  <InputGroupText>
                    <Lock />
                  </InputGroupText>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    required
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="d-flex justify-content-center">
                  <Button className="login-btn rounded" type="submit" disabled={loadingLoginWithEmail}>
                    {loadingLoginWithEmail ? "Signing In..." : "Sign In"}
                  </Button>
                </InputGroup>
              </Col>
            </Row>
            {errorLoginWithEmail && <div className="text-danger">{errorLoginWithEmail}</div>}
            <div className="login-subtitle">
              <span className="text-secondary"><Link to="/auth/forget/password"> Forgot Password?</Link></span>
              <span className="text-secondary">Login through <Link to="/auth/login/phone">Phone Number</Link></span>
              <span className="text-secondary">You don’t have an Account? <Link to="/auth/register">Sign UP</Link> </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginWithEmails;
