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

const LoginWithPhone = () => {
  return (
    <div className="background-image">
      <div className="login-phone-container">
        <div className="login-phone-card">
          <div className="login-phone-title">
            <h3 className="fw-bold">Sign In</h3>
            <span className="text-secondary">Sign In to your account</span>
          </div>

          <Form className="login-phone-form">
            <Row className="login-phone-row">
              <Col xs={12} md={12} lg={12}>
                <InputGroup>
                  <InputGroupText>
                    <Phone />

                  </InputGroupText>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Enter Your Number"
                    type="number"
                    required
                  />
                </InputGroup>
              </Col>
            
            </Row>
            <Row>
              <Col>
                <InputGroup className="d-flex justify-content-center">
                  <Button className="login-phone-btn rounded">OTP</Button>
                </InputGroup>
              </Col>
            </Row>
      
            <div className="login-phone-subtitle">
            <span className="text-secondary"><Link to="/auth/forget/password"> Forgot Password?</Link></span>
            <span className="text-secondary">Login through <Link to="/auth/login/phone">Phone Number</Link></span>
            <span className="text-secondary">You don’t have an Account? <Link to="/auth/register">Sign UP</Link> </span>
          </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginWithPhone