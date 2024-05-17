import React, { useState } from 'react'
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
import { useParams } from 'react-router-dom';



const Verify = () => {
  const handleLoginWithPhone = ()=>{
    
  }



const [otp, setOtp] = useState('')
console.log(otp)
const params = useParams()
// console.log(params.phone)
const phone =params.phone


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
            <button className=" loginBtn w-25" type="button" onClick={handleLoginWithPhone}>
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