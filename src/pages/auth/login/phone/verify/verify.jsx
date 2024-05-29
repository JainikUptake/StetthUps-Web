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
import "../phone.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyUser } from "../../../../../redux-toolkit/userSlice";
import Swal from "sweetalert2";

const Verify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  // const [phoneNum, setPhoneNum] = useState("")
  console.log(otp);

  const params = useParams();
  const phone = params.phone;

  const handleLoginWithPhone = async (e) => {
    console.log(phone, "lllll");
    console.log(otp, "jfgvfj");

    e.preventDefault();

    try {
      const userCredentials = {
        phone,
        otp,
      };
      console.log(userCredentials);
      const response = await dispatch(verifyUser(userCredentials));

      console.log(response);
      const status = response.payload.user;
      if (status) {
        Swal.fire({
          title: "Success!",
          text: `login Successful`,
          icon: "success",
        });
        navigate("user/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
    // Getting Value

    // if(phone)
  };

  return (
    <>
      <Container className="border border-5 border-dark w-50">
        <div className="text-center my-5">
          <h2>Login Phone Number Verification</h2>
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
                  readonly
                />
              </div>

              <div className="mb-4  d-flex justify-content-center">
                <Input
                  type="number"
                  placeholder=" Enter Your OtP "
                  className="form-control shadow-on-hover w-25"
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mb-4  d-flex justify-content-center">
                <button
                  className=" loginBtn w-25"
                  type="button"
                  onClick={handleLoginWithPhone}
                >
                  verify OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Verify;
