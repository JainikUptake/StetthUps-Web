import React, { useEffect, useState } from "react";
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
  NotebookPen,
  Heart,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import {
  GetAllColleges,
  GetAllStateAndCity,
  RegisterUser,
} from "../../../redux-toolkit/auth/registerSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allStateAndCity } = useSelector((state) => state.GetStateAndCity);
  const { allCollege } = useSelector((state) => state.GetAllColleges);
  console.log(allCollege, "all clg");

  useEffect(() => {
    dispatch(GetAllStateAndCity());
    dispatch(GetAllColleges());
  }, [dispatch]);

  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    state_id: "",
    city_id: "",
    college_id: "",
    current_year: "",
    preparing_for: "",
    interested_field: "",
    birth_date: "",
  });
  console.log(formData, "formdataa");

  // new way to take updated value from user [if there is multiple value take from user then use this method]
  function handleChange(e) {
    // formData["first_name"] = "suraj"
    // formData["last_name"] = "pithva"
    // formData["email"] = "sjsjsssjs"

    // formData[name] = value

    let { name, value } = e.target;
    console.log(name, "---", value);
    setFormData((prev) => ({ ...prev, [name]: value }));
    // setFormData((prev) => (formData[name] = value ));

    if (name == "state_id") {
      console.log(value);
      console.log(allStateAndCity?.data[0].id, "----------state");
      const selectedStateData = allStateAndCity?.data.find(
        (state) => state.id == value
      );
      console.log(selectedStateData, "-----------");
      setCities(selectedStateData?.cities || []);
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const {
      first_name,
      last_name,
      email,
      phone,
      password,
      confirmPassword,
      state_id,
      city_id,
      college_id,
      current_year,
      preparing_for,
      interested_field,
      birth_date,
    } = formData;

    // Ensure that all required fields are filled out
    if (
      first_name &&
      last_name &&
      email &&
      phone &&
      password &&
      confirmPassword &&
      state_id &&
      city_id &&
      college_id &&
      current_year &&
      preparing_for &&
      interested_field &&
      birth_date
    ) {
      // Check if password and confirmPassword match
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Make the API call to register the user
      try {
        const response = await dispatch(
          RegisterUser({
            first_name,
            last_name,
            email,
            phone,
            password,
            state_id,
            city_id,
            college_id,
            current_year,
            preparing_for,
            interested_field,
            birth_date,
          })
        );

        console.log(
          response?.payload?.response?.data?.message,
          "---------------sign up responseeee-----------"
        );

        // Handle the response, e.g., show a success message, redirect, etc.
        if (response?.payload?.status === 200) {
          Swal.fire({
            title: "Good job!",
            text: "Registration successful!",
            icon: "success",
          });
          navigate("/auth/login/email");
          // Redirect or perform other actions as needed
        } else {
          const errorMessage = response.payload.response.data.message.email;
          Swal.fire({
            title: `${{ errorMessage }}`,
            text: "Registration failed!",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Error during registration:", error);
        alert("An error occurred during registration. Please try again.");
      }
    } else {
      alert("Please fill out all required fields.");
    }
  };

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
                    onChange={handleChange}
                    value={formData.first_name}
                    id="firstName"
                    name="first_name"
                    placeholder="First Name"
                    type="text"
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <UserRound />
                  </InputGroupText>
                  <Input
                    onChange={handleChange}
                    value={formData.last_name}
                    id="lastName"
                    name="last_name"
                    placeholder="Last Name"
                    type="text"
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <UserRound />
                  </InputGroupText>
                  <Input
                    onChange={handleChange}
                    value={formData.phone}
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    type="tel"
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <Mail />
                  </InputGroupText>
                  <Input
                    onChange={handleChange}
                    value={formData.email}
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <Lock />
                  </InputGroupText>
                  <Input
                    onChange={handleChange}
                    value={formData.password}
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <Lock />
                  </InputGroupText>
                  <Input
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    id="confirmPassword"
                    name="confirmPassword"
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
                  <Input
                    id="state"
                    name="state_id"
                    type="select"
                    onChange={handleChange}
                    value={formData.state_id}
                  >
                    <option selected disabled>
                      Select Your State
                    </option>
                    {allStateAndCity?.data?.map((ele, index) => (
                      <option value={ele.id} key={index}>
                        {ele?.state_name}
                      </option>
                    ))}
                  </Input>
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <MapPin />
                  </InputGroupText>
                  <Input
                    id="city"
                    name="city_id"
                    type="select"
                    onChange={handleChange}
                    value={formData.city_id}
                  >
                    <option selected disabled>
                      Select Your City
                    </option>
                    {cities.map((city, index) => (
                      <option value={city.id} key={index}>
                        {city.city_name}
                      </option>
                    ))}
                  </Input>
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <NotebookPen />
                  </InputGroupText>
                  <Input
                    id="college"
                    name="college_id"
                    type="select"
                    onChange={handleChange}
                    value={formData.college_id}
                  >
                    <option selected disabled>
                      Select Your Colleges
                    </option>
                    {allCollege?.data?.map((allClg, index) => (
                      <option value={allClg.id} key={index}>
                        {allClg?.college_name}
                      </option>
                    ))}
                  </Input>
                </InputGroup>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <InputGroup>
                  <InputGroupText>
                    <BookOpenText />
                  </InputGroupText>
                  <Input
                    id="currentYear"
                    name="current_year"
                    type="select"
                    onChange={handleChange}
                    value={formData.current_year}
                  >
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
                  <Input
                    id="preparingFor"
                    name="preparing_for"
                    type="select"
                    onChange={handleChange}
                    value={formData.preparing_for}
                  >
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
                  <InputGroupText>
                    <Heart />
                  </InputGroupText>
                  <Input
                    id="interestedField"
                    name="interested_field"
                    type="select"
                    onChange={handleChange}
                    value={formData.interested_field}
                  >
                    <option selected disabled>
                      Please select interested field
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
                    <option value="Medicine">Medicine</option>
                    <option value="Psychiatry">Psychiatry</option>
                    <option value="Skin and venereology">
                      Skin and venereology
                    </option>
                    <option value="Respiratory Medicine">
                      Respiratory Medicine
                    </option>
                    <option value="Family Medicine">Family Medicine</option>
                    <option value="Emergency Medicine">
                      Emergency Medicine
                    </option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Obstetrics and gynaecology">
                      Obstetrics and gynaecology
                    </option>
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
                    onChange={handleChange}
                    value={formData.birth_date}
                    id="birthDate"
                    name="birth_date"
                    placeholder="Birth Date"
                    type="date"
                    required
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
                  <Button className="register-btn" onClick={handleSignUp}>
                    Sign Up
                  </Button>
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
