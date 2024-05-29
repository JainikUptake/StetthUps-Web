import React from "react";
import "./AboutUs.css";
import HeaderForPages from "../../headerForPages/headerForPages";
import { Container } from "reactstrap";
import { ChevronLeftSquare } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      <HeaderForPages />
      <Container>
        <div className="d-flex align-items-center">
          <div>
            <ChevronLeftSquare size={50} strokeWidth={3} absoluteStrokeWidth />
          </div>
          <div className="fs-2 contactUs">About Us</div>
        </div>
        <div className="mt-5 fs-5 fw-bold">Your Mission</div>
        <div className="mt-3 fs-5">
          You don’t need to outright say, “our mission is ____,” but you should
          convey the mission of your business in your About Us copy. This is key
          for attracting talent, as well as leads that have Corporate Social
          Responsibility (CSR) goals.
        </div>
        <div className="mt-5 fs-5 fw-bold">Your Story</div>
        <div className="mt-3 fs-5">
          Every business has an origin story worth telling, and usually, one
          that justifies why you even do business and have clients. Some
          centennial enterprises have pages of content that can fit in this
          section, while startups can tell the story of how the company was
          born, its challenges, and its vision for the future
        </div>
        <div className="mt-5 fs-5 fw-bold">Your Benefits</div>
        <div className="mt-3 fs-5">
          Of course, you have a homepage and dedicated pages for your products,
          but summarizing your offerings on the About Us page is crucial to tie
          them in with brand values in your messaging. Highlight the benefits
          and showcase what you do (and why it is unique).
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
