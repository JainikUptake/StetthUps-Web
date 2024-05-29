import React from "react";
import { Input } from "reactstrap";
import "./verify.css";
const Verify = () => {
  return (
    <div className="verifyNumber my-5">
      <div>Verify your number</div>
      <div className="mt-3">Enter OTP sent to your Email Address</div>
      <Input
        className="otpVerification w-25"
        id="exampleNumber"
        name="number"
        placeholder="number placeholder"
        type="number"
      />
      <button className=" loginBtnVerifyNum mb-3" type="button">
        Log In
      </button>
    </div>
  );
};

export default Verify;
