import React from "react";
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
const Register = () => {
  return (
    <>
      <div className="fw-bold fs-3 text-center my-3">Login</div>
      <Container className="vh-100 signup-form">
        <Row>
          <Col lg={6}>
            <FormGroup className="mb-3">
              <Label for="exampleFirstName" className="d-flex text-muted">
                First Name
              </Label>
              <Input
                type="text"
                placeholder="First Name"
                className="form-control shadow-on-hover"
              />
            </FormGroup>
          </Col>
          <Col lg={6}>
            {" "}
            <FormGroup className="mb-3">
              <Label for="exampleLastName" className="d-flex text-muted">
                Last Name
              </Label>
              <Input
                type="text"
                placeholder="Last Name"
                className="form-control shadow-on-hover"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <FormGroup className="mb-3">
              <Label for="exampleEmail" className="d-flex text-muted">
                Email
              </Label>
              <Input
                type="email"
                placeholder="Email"
                className="form-control shadow-on-hover"
              />
            </FormGroup>
          </Col>
          <Col lg={6}>
            <FormGroup className="mb-3">
              <Label for="examplePhoneNo" className="d-flex text-muted">
                Phone No
              </Label>
              <Input
                type="tel"
                placeholder="Phone No"
                className="form-control shadow-on-hover"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <FormGroup>
              <Label for="exampleSelect" className="d-flex text-muted">
                State
              </Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>1</option>
                <option>2</option>
              </Input>
            </FormGroup>
          </Col>

          <Col lg={6}>
            <FormGroup>
              <Label for="exampleSelect" className="d-flex text-muted">
                city
              </Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>1</option>
                <option>2</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Label for="exampleEmail" className="d-flex text-muted">
              Password
            </Label>
            <FormGroup className="mb-3">
              <Input
                type="password"
                placeholder="Password"
                className="form-control shadow-on-hover"
              />
            </FormGroup>
          </Col>

          <Col lg={6}>
            <Label for="exampleEmail" className="d-flex text-muted">
              Confirm Password
            </Label>
            <FormGroup className="mb-3">
              <Input
                type="password"
                placeholder="Confirm Password"
                className="form-control shadow-on-hover"
              />
            </FormGroup>
          </Col>
        </Row>
        <p>Acadmic Details</p>
        <Row>
          <Col lg={6}>
            <FormGroup>
              <Label for="exampleSelect" className="d-flex text-muted">
                Name of Collage
              </Label>
              <Input id="exampleSelect" name="select" type="select">
                <option>1</option>
                <option>2</option>
              </Input>
            </FormGroup>
          </Col>

          <Col lg={6}>
            <FormGroup>
              <Label for="exampleSelect" className="d-flex text-muted">
                Current Year
              </Label>
              <Input id="exampleSelect" name="select" type="select">
              <option disabled selected>Please select</option>
                                                <option value="1st year">1st year</option>
                                                <option value="2nd year">2nd year </option>
                                                <option value="3rd year">3rd year </option>
                                                <option value="final Year">Final Year</option>
                                                <option value="intern">Intern </option>
                                                <option value="post intern">Post Intern</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <p>If Intern (optional)</p>
        <Row>
          <Col lg={6}>
            <FormGroup>
              <Label for="exampleSelect" className="d-flex text-muted">
                Preparing for
              </Label>
              <Input id="exampleSelect" name="select" type="select">
              <option disabled selected>Please select</option>
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
              <Label for="exampleSelect" className="d-flex text-muted">
                Interested Field
              </Label>
              <Input id="exampleSelect" name="select" type="select">
              <option disabled selected>Please select</option>
                                                <option value="Anatomy">Anatomy</option>
                                                <option value="Physiology">Physiology</option>
                                                <option value="Biochemistry">Biochemistry</option>
                                                <option value="Microbiology">Microbiology</option>
                                                <option value="Pathology">Pathology </option>
                                                <option value="Forensic Medicine">Forensic Medicine </option>
                                                <option value="Preventive and social medicine">Preventive and social
                                                    medicine </option>
                                                <option value="E.N.T">E.N.T</option>
                                                <option value="Ophthalmology">Ophthalmology </option>
                                                <option value="MEDICINE">MEDICINE </option>
                                                <option value="Psychiatry">Psychiatry </option>
                                                <option value="skin and venereology">Skin and venereology</option>
                                                <option value="Respiratory Medicine">Respiratory Medicine </option>
                                                <option value="Family Medicine">Family Medicine</option>
                                                <option value="Emergency Medicine">Emergency Medicine </option>
                                                <option value="Pediatrists">Pediatrists</option>
                                                <option value="Obstetrics and gynaecology">Obstetrics and gynaecology
                                                </option>
                                                <option value="Surgery">Surgery </option>
                                                <option value="Orthopaedics">Orthopaedics</option>
                                                <option value="Anesthesia">Anesthesia</option>
                                                <option value="Radiology">Radiology</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <p>Verification Details</p>
        <Row>
          <Col lg={12} md={12} className="w-50">
            <FormGroup>
              <label for="birthday" className="d-flex text-muted">
                Date of Birth
              </label>
              <Input type="date" id="birthday" name=""></Input>
            </FormGroup>
          </Col>
        </Row>
      </Container>
      <div>
        <Button color="primary" className="btn-lg d-flex ">
          Sign Up
        </Button>
      </div>
      <div>
        <p>
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </>
  );
};

export default Register;
