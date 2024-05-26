import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { ChevronLeftSquare } from "lucide-react";
import { Button, Col, Container, FormGroup, Input, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  userProfile,
  userProfileChangePassword,
} from "../../../redux-toolkit/profileSlice";
import Swal from "sweetalert2";

const UserProfile = () => {
  const [oldpassword, setOldpassword] = useState("");
  const [newPassword, setnewPassword] = useState("");

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.userDetails);
  // console.log(profile,"-----userrrprofile")

  useEffect(() => {
    dispatch(userProfile());
  }, []);

  const handleChangePass = async (e) => {
    e.preventDefault();
    try {
      // console.log(oldpassword,newPassword ,"passwords")
      const password = {
        old_password: oldpassword,
        new_password: newPassword,
      };

      const response = await dispatch(userProfileChangePassword(password));

      console.log(response, "timepassssssssssss");
      // console.log(password);

      if (response.payload.status == 200) {
        Swal.fire({
          title: "Success!",
          text: `change password Successful`,
          icon: "success",
        });
      }
    } catch (error) {
      // console.log(error,"error in show-------")
      Swal.fire({
        title: "failed!",
        text: `something went wrong`,
        icon: "error",
      });
    }
  };

  return (
    <>
      <Container>
        <div className="d-flex align-items-center">
          <div>
            <ChevronLeftSquare size={50} strokeWidth={3} absoluteStrokeWidth />
          </div>
          <div className="fs-2 contactUs">My Account</div>
        </div>
        <Row>
          <Col>
            <div className="fs-4 mt-4 fw-bold">Personal Information</div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">Name : </span>
              <div className="ms-3 fs-5">{profile?.first_name}</div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">Email :</span>
              <div className="ms-3 fs-5">{profile?.email}</div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">Phone No : </span>
              <div className="ms-3 fs-5">{profile?.phone}</div>
            </div>
          </Col>
          <Col>
            <div className="fs-4 mt-4 fw-bold">Location</div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">State : </span>
              <div className="ms-3 fs-5">Gujarat</div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">City : </span>
              <div className="ms-3 fs-5">{profile?.city_id}</div>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            {" "}
            <div className="fs-4 mt-4 fw-bold">Other Information</div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">D.O.B : </span>
              <div className="ms-3 fs-5"> {profile?.birth_date}</div>
            </div>
            {/* current year */}
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">current_year : </span>
              <div className="ms-3 fs-5"> {profile?.current_year}</div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">preparing_for : </span>
              <div className="ms-3 fs-5"> {profile?.preparing_for}</div>
            </div>
            <div className="fw-bold fs-5 mt-4">Purchased Subscription </div>
            <div className="mt-4">
              {" "}
              <Button className="">NEET/JEE</Button>
            </div>
            <div className="mt-2">
              <Button className="">USMLE</Button>
            </div>
            <div className="fw-bold fs-4 mt-4">Change Password</div>
            <div className="fw-bold mt-3 fs-4">Old Password</div>
            <FormGroup>
              <Input
                onChange={(e) => setOldpassword(e.target.value)}
                id="examplePasswordd"
                className="mt-2 bg-secondary"
                name="password"
                placeholder="Enter Old Password"
                type="password"
              />
            </FormGroup>
            <div className="fw-bold mt-3 fs-4">New Password</div>
            <FormGroup>
              <Input
                onChange={(e) => setnewPassword(e.target.value)}
                id="examplePassword"
                className="mt-2 bg-secondary"
                name="password"
                placeholder="Enter New Password"
                type="password"
              />
            </FormGroup>
            <div className="d-flex justify-content-evenly my-3">
              <Button className="w-25 userProfileBtn">Cancel</Button>
              <Button
                className="w-25 userProfileBtn"
                onClick={handleChangePass}
              >
                Save
              </Button>
            </div>
          </Col>
          <Col>
            <div className="fs-4 mt-4 fw-bold">Education</div>
            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">Name Of College : </span>
              <div className="ms-3  fs-5">{profile?.college_id}</div>
            </div>

            <div className="d-flex align-items-center mt-3">
              <span className="fw-bold fs-5">interested_field : </span>
              <div className="ms-3  fs-5">{profile?.interested_field}</div>
            </div>

            {/*  */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;
