import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
} from "reactstrap";
import "./register.css";
import { useDispatch, useSelector } from "react-redux";
import { registerClg } from "../../../redux-toolkit/userSlice";

const Register = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(registerClg());
  }, [dispatch]);

  return (
    <>
      <div className="fw-bold fs-3 text-center my-3">Register</div>
      <Container className="vh-100 signup-form">
        <Form>
          <Row>
            <Col lg={6}>
              <FormGroup className="mb-3">
                <Label for="firstName" className="d-flex text-muted">
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="form-control shadow-on-hover"
                />
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup className="mb-3">
                <Label for="lastName" className="d-flex text-muted">
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="form-control shadow-on-hover"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <FormGroup className="mb-3">
                <Label for="email" className="d-flex text-muted">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="form-control shadow-on-hover"
                />
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup className="mb-3">
                <Label for="phoneNo" className="d-flex text-muted">
                  Phone No
                </Label>
                <Input
                  type="tel"
                  id="phoneNo"
                  placeholder="Phone No"
                  className="form-control shadow-on-hover"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <FormGroup>
                <Label for="state" className="d-flex text-muted">
                  State
                </Label>
                <Input id="state" name="state" type="select">
                  <option>1</option>
                  <option>2</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup>
                <Label for="city" className="d-flex text-muted">
                  City
                </Label>
                <Input id="city" name="city" type="select">
                  <option>1</option>
                  <option>2</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <FormGroup className="mb-3">
                <Label for="password" className="d-flex text-muted">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="form-control shadow-on-hover"
                />
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup className="mb-3">
                <Label for="confirmPassword" className="d-flex text-muted">
                  Confirm Password
                </Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="form-control shadow-on-hover"
                />
              </FormGroup>
            </Col>
          </Row>
          <p>Academic Details</p>
          <Row>
            <Col lg={6}>
              <FormGroup>
                <Label for="collegeName" className="d-flex text-muted">
                  Name of College
                </Label>
                <Input id="collegeName" name="collegeName" type="select">
                  <option>1</option>
                  <option>2</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup>
                <Label for="currentYear" className="d-flex text-muted">
                  Current Year
                </Label>
                <Input id="currentYear" name="currentYear" type="select">
                  <option disabled selected>
                    Please select
                  </option>
                  <option value="1st year">1st year</option>
                  <option value="2nd year">2nd year</option>
                  <option value="3rd year">3rd year</option>
                  <option value="final Year">Final Year</option>
                  <option value="intern">Intern</option>
                  <option value="post intern">Post Intern</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <p>If Intern (optional)</p>
          <Row>
            <Col lg={6}>
              <FormGroup>
                <Label for="preparingFor" className="d-flex text-muted">
                  Preparing for
                </Label>
                <Input id="preparingFor" name="preparingFor" type="select">
                  <option disabled selected>
                    Please select
                  </option>
                  <option value="NEET/NEXT">NEET/NEXT</option>
                  <option value="FMGE">FMGE</option>
                  <option value="USMLE">USMLE</option>
                  <option value="PLAB">PLAB</option>
                  <option value="other">other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg={6}>
              <FormGroup>
                <Label for="interestedField" className="d-flex text-muted">
                  Interested Field
                </Label>
                <Input id="interestedField" name="interestedField" type="select">
                  <option disabled selected>
                    Please select
                  </option>
                  <option value="Anatomy">Anatomy</option>
                  <option value="Physiology">Physiology</option>
                  <option value="Biochemistry">Biochemistry</option>
                  <option value="Microbiology">Microbiology</option>
                  <option value="Pathology">Pathology</option>
                  <option value="Forensic Medicine">Forensic Medicine</option>
                  <option value="Preventive and social medicine">
                    Preventive and social medicine
                  </option>
                  <option value="E.N.T">E.N.T</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="MEDICINE">MEDICINE</option>
                  <option value="Psychiatry">Psychiatry</option>
                  <option value="Skin and Venereology">Skin and Venereology</option>
                  <option value="Respiratory Medicine">Respiratory Medicine</option>
                  <option value="Family Medicine">Family Medicine</option>
                  <option value="Emergency Medicine">Emergency Medicine</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Obstetrics and Gynaecology">Obstetrics and Gynaecology</option>
                  <option value="Surgery">Surgery</option>
                  <option value="Orthopaedics">Orthopaedics</option>
                  <option value="Anesthesia">Anesthesia</option>
                  <option value="Radiology">Radiology</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <p>Verification Details</p>
          <Row>
            <Col lg={6}>
              <FormGroup>
                <Label for="dateOfBirth" className="d-flex text-muted">
                  Date of Birth
                </Label>
                <Input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  className="form-control shadow-on-hover"
                />
              </FormGroup>
            </Col>
          </Row>
          <div className="text-center">
            <Button color="primary" className="btn-lg">
              Sign Up
            </Button>
          </div>
          <div className="text-center mt-3">
            <p>
              Already have an account? <a href="#">Login</a>
            </p>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default Register;
