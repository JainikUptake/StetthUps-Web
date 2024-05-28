import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../../components/usersite/header/header";
import "./userSummary.css";
import { GetQuizByCaseId } from "../../../redux-toolkit/caseQuizSlice";

const UserSummary = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getQuizByCaseId } = useSelector((state) => state.getQuizByCaseId);
  console.log(getQuizByCaseId, "-----get All case");

  const getAllQuiz = getQuizByCaseId?.quiz
  console.log(getAllQuiz ,"all quiz")

  // const allCombo = getAllQuiz?.question 

  useEffect(() => {
    dispatch(GetQuizByCaseId(id));
  }, []);
  return (
    <div className="bgImg vh-100">
      <Header />
      <div className="dash-container">
        <div className="userSummary-card">
          <div className="fw-bold fs-2">Summary</div>
          <p>{getQuizByCaseId?.case_name}</p>
          <div
          className="summaryCaseAnalysis"
            dangerouslySetInnerHTML={{
              __html: getQuizByCaseId?.case_analysis,
            }}
          ></div>
          {/* question answerr and  explanation */}
          {
            getAllQuiz?.map((getAllQue)=>(
              <>
              <div>{ getAllQue?.question}</div>
              <div>{getAllQue?.correct_ans}</div>
              <textarea name="" id="" cols="30" rows="10">{getAllQue?.explanation}</textarea>
              </>
            
             
            ))

          }
        </div>
      </div>
    </div>
  );
};

export default UserSummary;
