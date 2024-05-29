import { ChevronLeftSquare } from "lucide-react";
import React, { useState } from "react";
import { Container } from "reactstrap";
import "./setting.css";
import HeaderForPages from "../headerForPages/headerForPages";

const SettingsPage = () => {
  return (
    <>
      <HeaderForPages />
      <Container>
        <div className="d-flex">
          <div>
            <ChevronLeftSquare size={48} strokeWidth={3} absoluteStrokeWidth />
          </div>

          <div className="fs-3">Settings</div>
        </div>
        <ol className="settingList fs-4 text-center">
          <li>
            <span className="settingItem">Sound</span>
          </li>
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

export default SettingsPage;
