import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../components/usersite/header/header";
import "./userSummary.css";
import { GetQuizByCaseId } from "../../../redux-toolkit/caseQuizSlice";
import CaseQuestion from "../../../components/questions/caseQuestion";

const UserSummary = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getQuizByCaseId } = useSelector((state) => state.getQuizByCaseId);
  const getAllQuiz = getQuizByCaseId?.quiz;

  useEffect(() => {
    dispatch(GetQuizByCaseId(id));
  }, [dispatch, id]);

  return (
    <div className="bgImg">
      <Header />
      <div className="summary-container">
        <div className="userSummary-card">
            {/* <div className="fw-bold fs-2">Summary</div>
            <p>{getQuizByCaseId?.case_name}</p>
            <div
              className="summaryCaseAnalysis"
              dangerouslySetInnerHTML={{
                __html: getQuizByCaseId?.case_analysis,
              }}
            >

            </div> */}
          <div >
        {getAllQuiz?.map((quiz, index) => (
            <CaseQuestion subData={quiz} key={index} />
          ))}
          </div>
          
        </div>
            
      </div>
    </div>
  );
};

export default UserSummary;
