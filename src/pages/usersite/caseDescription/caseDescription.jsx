import React, { useEffect, useState } from "react";
import "./caseDescription.css";
import Header from "../../../components/usersite/header/header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetCaseByCaseId } from "../../../redux-toolkit/getCaseSlice";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

const CaseDescription = () => {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const { getCaseByCaseId, loading, error } = useSelector(
    (state) => state.getCaseByCaseId
  );

  useEffect(() => {
    dispatch(GetCaseByCaseId(id));
  }, [ dispatch]);

  const getCaseDescription = getCaseByCaseId?.case_description;
  console.log(getCaseDescription,"----------------")

  const handleCaseId=(id)=>{
console.log(id)
  }
  return (
    <>
     <div className="bgImg vh-100">
        <Header />
        <div className="dash-container">
          <div className="CaseVideo-card">
          {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {getCaseDescription?.map((allCaseDescription, i) => (

        <div key={allCaseDescription?.id}>
          <Accordion flush open={open} toggle={() => toggle(allCaseDescription?.id.toString())}>
            <AccordionItem>
              <AccordionHeader targetId={allCaseDescription?.id.toString()}>{allCaseDescription?.title}</AccordionHeader>
              <AccordionBody accordionId={allCaseDescription?.id.toString()}>
                {allCaseDescription?.description}
              <img src={allCaseDescription?.description_file} alt="" />
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
    
  
      ))}
      <button type="submit" onClick={()=>handleCaseId(id)}>next</button>
</div></div></div>
    </>
  );
};

export default CaseDescription;
