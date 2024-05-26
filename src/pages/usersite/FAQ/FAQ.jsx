import React, { useEffect } from "react";
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

  // Fetch all subscription plans
  useEffect(() => {
    dispatch(userQuestion());
  }, [dispatch]);

  return (
    <>
      <div className="bgImg vh-100">
        <Header />
        <div className="dash-container">
          <div className="faqs-card">
            {faqs?.map((allQuestion, i) => (
              <>
                <UncontrolledAccordion defaultOpen="1" className="">
                  <AccordionItem>
                    <AccordionHeader targetId="1">
                      <span className="fw-bold">{allQuestion.question}</span>
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                      {allQuestion.answer}
                    </AccordionBody>
                  </AccordionItem>
                </UncontrolledAccordion>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
