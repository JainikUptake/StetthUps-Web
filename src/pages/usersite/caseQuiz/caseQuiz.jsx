import React, { useEffect, useState } from "react";
import "./caseQuiz.css";
import Header from "../../../components/usersite/header/header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetQuizByCaseId } from "../../../redux-toolkit/caseQuizSlice";

const CaseQuiz = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getQuizByCaseId, loading, error } = useSelector(
    (state) => state.getQuizByCaseId
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    dispatch(GetQuizByCaseId(id));
  }, [dispatch, id]);

  const handleNextClick = () => {
    if (currentQuestionIndex < getQuizByCaseId.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz Finished!");
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!getQuizByCaseId || getQuizByCaseId.length === 0) {
    return <div>No quiz data available.</div>;
  }

  const currentQuestion = getQuizByCaseId[currentQuestionIndex];

  return (
    <div className="bgImg vh-100">
      <Header />
      <div className="dash-container">
        <div className="CaseQuiz-card">
          <div className="CaseQuizQuestion-card">
            <h1>{currentQuestion.question}</h1>
          </div>
          <ul>
            <li>{currentQuestion.option_a}</li>
            <li>{currentQuestion.option_b}</li>
            <li>{currentQuestion.option_c}</li>
            <li>{currentQuestion.option_d}</li>
          </ul>
          <div className="button-group d-flex justify-content-between">
            {currentQuestionIndex > 0 && (
              <button onClick={handleBackClick}>Back</button>
            )}
            <button onClick={handleNextClick}>
              {currentQuestionIndex < getQuizByCaseId.length - 1
                ? "Next"
                : "Finish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseQuiz;
