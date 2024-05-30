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

const ForgotPassword = () => {
  return (
    <div className="background-image">
      <div className="forgot-container">
        <div className="forgot-card">
          <div className="forgot-title">
            <h3 className="fw-bold">Forgot Password</h3>
            <span className="text-secondary">Forget Password to your account</span>
          </div>

          <Form className="forgot-form">
            <Row className="forgot-row">
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
             
            </Row>
            <Row>
              <Col>
                <InputGroup className="d-flex justify-content-center">
                  <Button className="forgot-btn rounded">Send</Button>
                </InputGroup>
              </Col>
            </Row>
            
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword