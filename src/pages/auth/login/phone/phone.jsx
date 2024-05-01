import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import "./phone.css";
import { Link } from "react-router-dom";

const Phone = () => {
  return (
    <>
      <Container className="border border-5 border-dark w-50">
        <div className="text-center my-5">
          <h2>Login</h2>
        </div>

        <div>
          <div>
            <form>
              <div className="mb-4  d-flex justify-content-center">
                <Input
                  type="tel"
                  placeholder=" Enter Your Phone No "
                  className="form-control shadow-on-hover w-25"
                />
              </div>
              <FormGroup check className="mb-4 d-flex justify-content-center">
                <Input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" className="form-check-label mx-3">
                  Remember Me
                </label>
              </FormGroup>

              <div className="d-grid gap-2 mb-4  d-flex justify-content-center">
                <button className=" loginBtn w-25" type="button">
                  Send OTP
                </button>
              </div>
              <div className="mb-4">
                <p className=" d-flex justify-content-center text-muted">
                  Not a user?{" "}
                  <Link to="" className=" signUpLink mx-1">
                    Sign Up
                  </Link>
                </p>
              </div>
              <div className="mb-4">
                <p className=" d-flex justify-content-center text-muted">
                  Or Login through{" "}
                  <Link to="" className="signUpLink mx-1">
                    Phone No
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>

    // <Container className="mt-5 login ">
    //   <Row className="justify-content-center">
    //     <Col xs={12}>
    //       <div className="text-center py-4">
    //         <h2 className="text-black fs-3 ">Login</h2>
    //       </div>
    //     </Col>
    //   </Row>
    //   <Row className="justify-content-center">
    //     <Col xs={12} md={6} className="text-center">
    // <Form>
    //   <FormGroup className="mb-3">
    //     <Input
    //       type="tel"
    //       placeholder="Phone Number"
    //       className="form-control shadow-on-hover "
    //     />
    //   </FormGroup>
    // <FormGroup check className="mb-3 d-flex justify-content-center">
    //   <Input type="checkbox" id="rememberMe" />
    //   <label htmlFor="rememberMe" className="form-check-label mx-3">
    //     Remember Me
    //   </label>
    // </FormGroup>
    //   <Button color="primary" className="btn-lg w-50 mb-3">
    //     Send OTP
    //   </Button>
    //   <p className="mb-0">
    //     Not a user?{" "}
    //     <Link to="" className="signup-link">
    //       Sign Up
    //     </Link>
    //   </p>
    //   <Link to="" className="signup-link">
    //     <p>Login with Email</p>
    //   </Link>
    // </Form>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default Phone;
