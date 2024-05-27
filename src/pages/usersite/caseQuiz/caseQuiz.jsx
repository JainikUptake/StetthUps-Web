import React, { useEffect, useState } from "react";
import "./caseQuiz.css";
import Header from "../../../components/usersite/header/header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetQuizByCaseId } from "../../../redux-toolkit/caseQuizSlice";
import { ReduceLifeLineByUser } from "../../../redux-toolkit/reduceLifeLineSlice";

const CaseQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);
  const [lifeLineMessage, setLifeLineMessage] = useState("");
  const [lifeLine, setLifeLine] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { getQuizByCaseId, loading, error } = useSelector(
    (state) => state.getQuizByCaseId
  );

  useEffect(() => {
    dispatch(GetQuizByCaseId(id));
  }, [dispatch, id]);

  const {
    reduceLifeLine,
    loading: loadingLifeLine,
    error: errorLifeLine,
  } = useSelector((state) => state.reduceLifeLine);

  const handleNextClick = () => {
    if (disabledButton) {
      if (currentQuestionIndex < getQuizByCaseId.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null);
        setIsCorrect(null);
        setCorrectOption(null);
        setDisabledButton(false);
        setLifeLineMessage("");
        setLifeLine("");
      } else {
        alert(
          `Quiz Finished! Total Questions: ${getQuizByCaseId.length}, Correct: ${correctCount}, Incorrect: ${incorrectCount}`
        );
      }
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setCorrectOption(null);
      setDisabledButton(false);
      setLifeLineMessage("");
      setLifeLine("");
    }
  };

  const handleOptionClick = (option) => {
    if (!disabledButton) {
      setSelectedOption(option);
      setDisabledButton(true);
      const correctOption =
        currentQuestion[`option_${currentQuestion.correct_ans.toLowerCase()}`];

      setIsCorrect(option === correctOption);
      setCorrectOption(correctOption);

      if (option === correctOption) {
        setCorrectCount(correctCount + 1);
      } else {
        setIncorrectCount(incorrectCount + 1);
        dispatch(ReduceLifeLineByUser(id)).then((action) => {
          if (action.payload) {
            setLifeLine(action.payload.lifeline);
            setLifeLineMessage(action.payload.message);
          }
        });
      }
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
            {["a", "b", "c", "d"].map((optionKey) => {
              const option = currentQuestion[`option_${optionKey}`];
              return (
                <li
                  key={optionKey}
                  onClick={() => handleOptionClick(option)}
                  style={{ position: "relative", cursor: "pointer" }}
                >
                  {option}
                  {selectedOption === option && (
                    <span
                      style={{
                        color: isCorrect ? "green" : "red",
                        marginLeft: "10px",
                      }}
                    >
                      {isCorrect ? "Correct!" : "Incorrect!"}
                    </span>
                  )}

                  {!isCorrect &&
                    correctOption === option &&
                    selectedOption !== option && (
                      <span style={{ color: "green", marginLeft: "10px" }}>
                        Correct Answer!
                      </span>
                    )}
                </li>
              );
            })}
          </ul>
          {lifeLineMessage && <div>{lifeLineMessage}</div>}
          {lifeLine && <div>{lifeLine}</div>}
          <div className="button-group d-flex justify-content-between">
            {currentQuestionIndex > 0 && (
              <button onClick={handleBackClick}>Back</button>
            )}
            <button onClick={handleNextClick} disabled={!disabledButton}>
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
