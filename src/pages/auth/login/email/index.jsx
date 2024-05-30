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
import { Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const LoginWithEmail = () => {
  return (
    <div className="background-image">
      <div className="login-container">
        <div className="login-card">
          <div className="login-title">
            <h3 className="fw-bold">Sign In</h3>
            <span className="text-secondary">Sign In to your account</span>
          </div>

          <Form className="login-form">
            <Row className="login-row">
              <Col xs={12} md={12} lg={12}>
                <InputGroup>
                  <InputGroupText>
                    <Mail />
                  </InputGroupText>
                  <Input
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
                  <Button className="login-btn rounded">Sign In</Button>
                </InputGroup>
              </Col>
            </Row>
            {/* <Row className="d-flex">
              <Col xs={12} md={12} lg={12}>
                <Label check for="termsCheck" className="mx-2">
                  I agree to the Terms & Conditions and Privacy Policy
                </Label>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <Label check for="termsCheck" className="mx-2">
                  I agree to the Terms & Conditions and Privacy Policy
                </Label>
              </Col>
            </Row> */}
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

export default LoginWithEmail;
