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
import {
  Lock,
  Mail,
  UserRound,
  Calendar,
  MapPin,
  BookOpenText,
  MessageCircleHeart,
} from "lucide-react";

const ResetPassword = () => {
  return (
    <div className="background-image">
    <div className="reset-password-container">
      <div className="reset-password-card">
        <div className="reset-password-title">
          <h3>Reset Password</h3>
          <span>Create New Password Here.</span>
        </div>
        <Form className="reset-password-form">
            <Row className="reset-password-row">
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
                
                    readOnly
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <InputGroup>
                  <InputGroupText>
                    <Mail />
                  </InputGroupText>
                  <Input
                    id="otp"
                    name="otp"
                    placeholder="otp"
                    type="number"
                
                    
                  />
                </InputGroup>
              </Col> <Col xs={12} md={12} lg={12}>
                <InputGroup>
                  <InputGroupText>
                    <Lock />
                  </InputGroupText>
                  <Input
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                
                    
                  />
                </InputGroup>
              </Col> <Col xs={12} md={12} lg={12}>
                <InputGroup>
                  <InputGroupText>
                    <Lock />
                  </InputGroupText>
                  <Input
                    id="confirm password"
                    name="confirm password"
                    placeholder="confirm password"
                    type="password"
                
                    
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="d-flex justify-content-center">
                  <Button className="reset-password-btn rounded">Save</Button>
                </InputGroup>
              </Col>
            </Row>
            
          </Form>
      
      </div>
    </div>
  </div>
  )
}

export default ResetPassword