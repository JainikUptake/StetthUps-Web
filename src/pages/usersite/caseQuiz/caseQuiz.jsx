import React, { useEffect, useState } from "react";
import "./caseQuiz.css";
import Header from "../../../components/usersite/header/header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetQuizByCaseId } from "../../../redux-toolkit/caseQuizSlice";
import { ReduceLifeLineByUser } from "../../../redux-toolkit/reduceLifeLineSlice";
import { makeResult } from "../../../redux-toolkit/makeResultByQuizSlice";
import { userProfile } from "../../../redux-toolkit/profileSlice";

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
  const navigate = useNavigate()

  const { getQuizByCaseId, loading, error } = useSelector(
    (state) => state.getQuizByCaseId
  );
  console.log(getQuizByCaseId,"-----response get per")

  const getQuizByCaseIdQuiz = getQuizByCaseId?.quiz
  
  const { reduceLifeLine } = useSelector((state) => state.reduceLifeLine);
  const { profile } = useSelector((state) => state.userDetails);

  useEffect(() => {
    dispatch(GetQuizByCaseId(id));
    dispatch(userProfile());
  }, [dispatch, id]);

  const handleNextClick = () => {
    if (disabledButton) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      resetQuestionState();
    }
  };

  const handleBackClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    resetQuestionState();
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

  const resetQuestionState = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setCorrectOption(null);
    setDisabledButton(false);
    setLifeLineMessage("");
    setLifeLine("");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!getQuizByCaseIdQuiz || getQuizByCaseIdQuiz.length === 0) {
    return <div>No quiz data available.</div>;
  }

  const currentQuestion = getQuizByCaseIdQuiz[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === getQuizByCaseIdQuiz.length - 1;

  const handleUserResult = async (e) => {
    e.preventDefault();
    try {
      const userScore = {
        score: correctCount,
        total_questions: getQuizByCaseIdQuiz.length,
        total_attempted_questions: getQuizByCaseIdQuiz.length,
        is_completed: 1,
        case_id: id,
        user_id: profile.id,  // Use profile.id or appropriate user id field
      };
      console.log(userScore, "-------user score");
      const response = await dispatch(makeResult(userScore));
      console.log(response, "response in status");

      const status = response?.payload?.status
      console.log(status,"------status code")

      if (status === 200) {
        navigate(`/user/case/quiz/result/${id}`)
        
      }
    

      
    } catch (error) {
      console.log(error);
    }
  };

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
            <button onClick={handleNextClick} disabled={!disabledButton || isLastQuestion}>
              Next
            </button>
            <button onClick={handleUserResult} disabled={!isLastQuestion}>
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseQuiz;
