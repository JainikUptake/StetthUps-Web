import React from "react";
import "./style.css";
import {
  Col,
  Form,
  Input,
  Row,
  Button,
  InputGroup,
  InputGroupText,
  Label,
} from "reactstrap";
import { Lock, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const OTP = () => {
  return (
    <div className="background-image">
      <div className="login-phone-otp-container">
        <div className="login-phone-otp-card">
          <div className="login-phone-otp-title">
            <h3 className="fw-bold">Sign In</h3>
            <span className="text-secondary">Sign In to your account</span>
          </div>

          <Form className="login-phone-otp-form">
            <Row className="login-phone-otp-row">
              <Col xs={12} md={12} lg={12}>
                <InputGroup>
                  <InputGroupText>
                    <Phone />
                  </InputGroupText>
                  <Input id="email" name="number" type="number" readOnly />
                </InputGroup>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <InputGroup>
                  <InputGroupText>
                    <Lock />
                  </InputGroupText>
                  <Input
                    id="number"
                    name="number"
                    placeholder="Enter Your Otp"
                    type="number"
                    required
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="d-flex justify-content-center">
                  <Button className="login-phone-otp-btn rounded">
                    Verify OTP
                  </Button>
                </InputGroup>
              </Col>
            </Row>

            <div className="login-phone-subtitle">
              <span className="text-secondary">
                <Link to="/auth/forget/password"> Forgot Password?</Link>
              </span>
              <span className="text-secondary">
                Login through <Link to="/auth/login/email">Email</Link>
              </span>
              <span className="text-secondary">
                You don’t have an Account?{" "}
                <Link to="/auth/register">Sign UP</Link>{" "}
              </span>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default OTP;
