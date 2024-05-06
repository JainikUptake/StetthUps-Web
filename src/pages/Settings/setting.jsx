import { ChevronLeft } from "lucide-react";
import { Container } from "reactstrap";
import React from "react";
import "./setting.css";
import HeaderForPages from "../headerForPages/headerForPages";

const Setting = () => {
  return (
    <>
      <HeaderForPages />
      <Container>
        <ChevronLeft size={48} strokeWidth={3} absoluteStrokeWidth />
        <span className="fs-3">Settings</span>
        <ol className="settingList fs-4 text-center">
          <li>Sound</li>
          <li>Contact Us</li>
          <li>Font Size</li>
          <li>About Us</li>
          <li>Feedback</li>
          <li>My Account</li>
          <li>FAQs</li>
        </ol>
      </Container>
    </>
  );
};

export default Setting;
