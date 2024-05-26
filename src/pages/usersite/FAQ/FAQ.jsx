import React, { useEffect, useState } from "react";
import "./FAQ.css";
import HeaderForPages from "../../headerForPages/headerForPages";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  UncontrolledAccordion,
} from "reactstrap";
import Header from "../../../components/header/header";
import { useDispatch, useSelector } from "react-redux";
import { userQuestion } from "../../../redux-toolkit/faqsSlice";

const FAQs = () => {
  const dispatch = useDispatch();
  const { faqs, loading, error } = useSelector((state) => state.faqs);
  console.log(faqs, "faqs into jsx");

  useEffect(() => {
    dispatch(userQuestion());
  }, [dispatch]);

  // State to control open/close state of each accordion item
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <>
      <div className="bgImg vh-100">
        <Header />
        <div className="dash-container">
          <div className="faqs-card">
            {faqs?.map((faq, index) => (
              <UncontrolledAccordion
                key={index}
                defaultOpen={openAccordion === index}
              >
                <AccordionItem>
                  <AccordionHeader
                    targetId={`accordion-${index}`}
                    onClick={() =>
                      setOpenAccordion(openAccordion === index ? null : index)
                    }
                  >
                    <span className="fw-bold">{faq.question}</span>
                  </AccordionHeader>
                  <AccordionBody accordionId={`accordion-${index}`}>
                    {faq.answer}
                  </AccordionBody>
                </AccordionItem>
              </UncontrolledAccordion>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
