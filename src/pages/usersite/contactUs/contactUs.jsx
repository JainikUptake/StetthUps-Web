import React from "react";
import "./contactUs.css";
import HeaderForPages from "../../headerForPages/headerForPages";
import { Col, Container, Row } from "reactstrap";
import {
  ChevronLeftSquare,
  Contact,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const ContactUs = () => {
  return (
    <>
      <HeaderForPages />
      <Container>
        <div className="d-flex align-items-center">
          <div>
            <ChevronLeftSquare size={50} strokeWidth={3} absoluteStrokeWidth />
          </div>
          <div className="fs-2 contactUs">Contact Us</div>
        </div>
        <Row>
          <Col md={6} sm={6}>
            <div className="mt-5 d-flex flex-column">
              <div className="d-flex align-items-center">
                <MapPin size={48} strokeWidth={1.25} />
                <div className="ms-3">
                  3342 Williams Mine Road Philadelphia, Missouri, <br />
                  United States
                </div>
              </div>
              <div className="d-flex align-items-center">
                <Contact size={48} strokeWidth={0.75} className="my-3" />
                <div className="ms-3">+1 503-227-8830</div>
              </div>
              <div className="d-flex align-items-center">
                <Mail size={48} strokeWidth={0.75} />
                <div className="ms-3">contact@revive.com</div>
              </div>
            </div>
          </Col>
          <Col md={6} sm={6}>
            <div className="fw-bold fs-5 text-center mt-5">Follow Us On</div>
            <div className="text-center mt-4 d-flex justify-content-center">
              <Linkedin size={48} strokeWidth={0.75} />
              <Facebook size={48} strokeWidth={0.75} className="mx-3" />
              <Instagram size={48} strokeWidth={0.75} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
