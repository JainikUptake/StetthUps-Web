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

const Register = () => {
  return (
    <div className="background-image">
      <div className="register-container">
        <div className="register-card">
          <div className="register-title">
            <h3>Sign Up</h3>
            <span>Create your account here for a great experience.</span>
          </div>

          <Form className="register-form">
            <Row className="register-row">
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <UserRound />
                  </InputGroupText>
                  <Input
                    id="firstName"
                    name="first name"
                    placeholder="First Name"
                    type="text"
                    required
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <UserRound />
                  </InputGroupText>
                  <Input
                    id="lastName"
                    name="last name"
                    placeholder="Last Name"
                    type="text"
                    required
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <UserRound />
                  </InputGroupText>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    type="tel"
                    required
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <Mail />
                  </InputGroupText>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <Lock />
                  </InputGroupText>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <Lock />
                  </InputGroupText>
                  <Input
                    id="confirmPassword"
                    name="confirm password"
                    placeholder="Confirm Password"
                    type="password"
                    required
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <MapPin />
                  </InputGroupText>
                  <Input id="state" name="state" type="select">
                    <option selected disabled>
                      Select Your State
                    </option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <MapPin />
                  </InputGroupText>
                  <Input id="city" name="city" type="select">
                    <option selected disabled>
                      Select Your City
                    </option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>@</InputGroupText>
                  <Input id="college" name="college" type="select">
                    <option selected disabled>
                      Select
                    </option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <BookOpenText />
                  </InputGroupText>
                  <Input id="currentYear" name="current_year" type="select">
                    <option disabled selected>
                      Please select current year
                    </option>
                    <option value="1st year">1st year</option>
                    <option value="2nd year">2nd year </option>
                    <option value="3rd year">3rd year </option>
                    <option value="final Year">Final Year</option>
                    <option value="intern">Intern </option>
                    <option value="post intern">Post Intern</option>
                  </Input>
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <MessageCircleHeart />
                  </InputGroupText>
                  <Input id="preparingFor" name="preparing_for" type="select">
                    <option selected disabled>
                      Please select preparing for
                    </option>
                    <option value="NEET/NEXT">NEET/NEXT</option>
                    <option value="FMGE">FMGE</option>
                    <option value="USMLE">USMLE</option>
                    <option value="PLAB">PLAB</option>
                    <option value="other">Other</option>
                  </Input>
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>@</InputGroupText>
                  <Input id="interestedField" name="interested_field" type="select">
                    <option selected disabled>
                      Please select interested field
                    </option>
                    <option value="Anatomy">Anatomy</option>
                    <option value="Physiology">Physiology</option>
                    <option value="Biochemistry">Biochemistry</option>
                    <option value="Microbiology">Microbiology</option>
                    <option value="Pathology">Pathology</option>
                    <option value="Forensic Medicine">Forensic Medicine</option>
                    <option value="Preventive and social medicine">Preventive and social medicine</option>
                    <option value="E.N.T">E.N.T</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Psychiatry">Psychiatry</option>
                    <option value="Skin and venereology">Skin and venereology</option>
                    <option value="Respiratory Medicine">Respiratory Medicine</option>
                    <option value="Family Medicine">Family Medicine</option>
                    <option value="Emergency Medicine">Emergency Medicine</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Obstetrics and gynaecology">Obstetrics and gynaecology</option>
                    <option value="Surgery">Surgery</option>
                    <option value="Orthopaedics">Orthopaedics</option>
                    <option value="Anesthesia">Anesthesia</option>
                    <option value="Radiology">Radiology</option>
                  </Input>
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <Calendar />
                  </InputGroupText>
                  <Input
                    id="birthDate"
                    name="birth date"
                    placeholder="Birth Date"
                    type="date"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row className="register-submit">
              <Col>
                <InputGroup check>
                  <Input id="termsCheck" name="check" type="checkbox" />
                  <Label check for="termsCheck" className="mx-2">
                    I agree to the Terms & Conditions and Privacy Policy
                  </Label>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="d-flex justify-content-center">
                  <Button className="register-btn">Sign Up</Button>
                </InputGroup>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
