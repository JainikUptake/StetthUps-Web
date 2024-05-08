import React from "react";
import "./UserProfile.css";
import { ChevronLeftSquare } from "lucide-react";
import { Button, Col, Container, FormGroup, Input, Row } from "reactstrap";

const UserProfile = () => {
  return (
    <>
      <Container>
        <div className="d-flex align-items-center">
          <div>
            <ChevronLeftSquare size={50} strokeWidth={3} absoluteStrokeWidth />
          </div>
          <div className="fs-2 contactUs">My Account</div>
        </div>
        <Row>
          <Col>
            <div className="fs-4 mt-4 fw-bold">Personal Information</div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">Name : </span>
              <div className="ms-3 fs-5">Suraj Pithva</div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">Email : </span>
              <div className="ms-3 fs-5">SurajPithva5101@gmail.com</div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">Phone No : </span>
              <div className="ms-3 fs-5">9714449665</div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">Phone No : </span>
              <div className="ms-3 fs-5">9714449665</div>
            </div>
          </Col>
          <Col>
            <div className="fs-4 mt-4 fw-bold">Location</div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">State : </span>
              <div className="ms-3 fs-5">Gujarat</div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">City : </span>
              <div className="ms-3 fs-5">Ahmedabad</div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            {" "}
            <div className="fs-4 mt-4 fw-bold">Other Information</div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">D.O.B : </span>
              <div className="ms-3 fs-5"> 08-04-2002</div>
            </div>
            <div className="fw-bold fs-5 mt-4">Purchased Subscription </div>
            <div className="mt-4">
              {" "}
              <Button className="">NEET/JEE</Button>
            </div>
            <div className="mt-2">
              <Button className="">USMLE</Button>
            </div>
            <div className="fw-bold fs-4 mt-4">Change Password</div>
            <div className="fw-bold mt-3 fs-4">Old Password</div>
            <FormGroup>
              <Input
                id="examplePassword"
                className="mt-2 bg-secondary"
                name="password"
                placeholder="Enter Old Password"
                type="password"
              />
            </FormGroup>
            <div className="fw-bold mt-3 fs-4">New Password</div>
            <FormGroup>
              <Input
                id="examplePassword"
                className="mt-2 bg-secondary"
                name="password"
                placeholder="Enter New Password"
                type="password"
              />
            </FormGroup>
            <div className="d-flex justify-content-evenly my-3">
              <Button className="w-25 userProfileBtn">Cancel</Button>
              <Button className="w-25 userProfileBtn">Save</Button>
            </div>
          </Col>
          <Col>
            <div className="fs-4 mt-4 fw-bold">Education</div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">Name Of College : </span>
              <div className="ms-3  fs-5">Nirma university</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;
