import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginWithPhone } from "../../../../redux-toolkit/userSlice";
import Swal from "sweetalert2";

const Phone = () => {
  const { user, loading, error } = useSelector((state) => state.user);

  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhoneNum = async (e) => {
    e.preventDefault();
    try {
      const userPhone = {
        phone,
      };
      console.log(userPhone, "in phone");
      const response = await dispatch(loginWithPhone({ userPhone }));
      console.log(response);
      // const message = response.payload.message
      const status = response.payload.status;
      if (status == 200) {
        Swal.fire({
          title: "Success!",
          text: `${response.payload.data.message}`,
          icon: "success",
        });
        navigate(`/auth/login/phone/verify/${phone}`);
      }
      // console.log(message,"messsage")
      console.log(status, "status");

      return response;
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "User Not Found!",
        icon: "error",
      });
    }
  };
  //   if(phone){
  //     const response = await dispatch(loginWithPhone(phone))
  //     console.log(response,"-----------mmm----------------")

  //   const message = response.Payload.message
  //   const status = response.Payload.status
  //   console.log(message,"messsage")
  // }

  return (
    <>
      <Container className="border border-5 border-dark w-50">
        <div className="text-center my-5">
          <h2>Login With Phone Number</h2>
        </div>

        <div>
          <div>
            <form>
              <div className="mb-4  d-flex justify-content-center">
                <Input
                  type="tel"
                  placeholder=" Enter Your Phone No "
                  className="form-control shadow-on-hover w-25"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="d-grid gap-2 mb-4  d-flex justify-content-center">
                <button
                  className=" loginBtn w-25"
                  type="button"
                  onClick={handlePhoneNum}
                >
                  Send OTP
                </button>
              </div>
              <div className="mb-4">
                <p className=" d-flex justify-content-center text-muted">
                  Not a user?{" "}
                  <Link to="auth/register" className=" signUpLink mx-1">
                    Sign Up
                  </Link>
                </p>
              </div>
              <div className="mb-4">
                <p className=" d-flex justify-content-center text-muted">
                  Or Login through{" "}
                  <Link to="auth/login/email" className="signUpLink mx-1">
                    Email
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
