import React from 'react'
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
import "../phone.css";


const Verify = () => {
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
              readonly
            />
          </div>


          <div className="mb-4  d-flex justify-content-center">
            <Input
              type="number"
              placeholder=" Enter Your OtP "
              className="form-control shadow-on-hover w-25"
            />
          </div>
          <div className="d-grid gap-2 mb-4  d-flex justify-content-center">
            <button className=" loginBtn w-25" type="button">
              verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  </Container>
  </>
  )
}

export default Verify