import React from "react";
import "./FAQ.css";
import HeaderForPages from "../../headerForPages/headerForPages";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  UncontrolledAccordion,
} from "reactstrap";

const FAQs = () => {
  return (
    <>
      <HeaderForPages />
      <Container className="">
        <UncontrolledAccordion defaultOpen="1">
          <AccordionItem>
            <AccordionHeader targetId="1">
              <span className="fw-bold text-white"> How To Play ? </span>
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>This is the first item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem className="my-3">
            <AccordionHeader targetId="2" className="">
              <span className="fw-bold text-white"> How To Play ? </span>
            </AccordionHeader>
            <AccordionBody accordionId="2">
              <strong>This is the second item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3" className="fw-bold">
              <span className="fw-bold text-white   "> How To Play ? </span>
            </AccordionHeader>
            <AccordionBody accordionId="3">
              <strong>This is the third item's accordion body.</strong>
              You can modify any of this with custom CSS or overriding our
              default variables. It's also worth noting that just about any HTML
              can go within the <code>.accordion-body</code>, though the
              transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion>
      </Container>
    </>
  );
};

export default FAQs;
