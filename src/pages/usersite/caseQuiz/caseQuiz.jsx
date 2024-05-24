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

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleFinishQuiz = () => {
    //  quiz finish 
    console.log("Quiz finished");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const currentQuestion = getQuizByCaseId?.question
  console.log(currentQuestion,"---current question")

  return (
    <div className="bgImg vh-100">
      <Header />
      <div className="dash-container">
        <div className="CaseQuiz-card">
          {currentQuestion ? (
            <div>
              <h2>{currentQuestion.question}</h2>
              <ul>
                {currentQuestion.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
              {currentQuestionIndex < getQuizByCaseId.questions.length - 1 ? (
                <button onClick={handleNextQuestion}>Next</button>
              ) : (
                <button onClick={handleFinishQuiz}>Finish</button>
              )}
            </div>
          ) : (
            <div>No questions available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CaseQuiz;
