import React, { useEffect } from "react";
import "./userResult.css";
import Header from "../../../components/usersite/header/header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetResultByCaseId } from "../../../redux-toolkit/getResultByCaseId";
import { ArrowRight, BookAudio, CircleCheckBig, CircleX } from "lucide-react";

const UserResult = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getResultsByCaseId } = useSelector(
    (state) => state.getResultByCaseId
  );
  console.log(getResultsByCaseId, "-----get All case");

  useEffect(() => {
    dispatch(GetResultByCaseId(id));
  }, []);

  const handleSummary = (id) => {
    navigate(`/user/case/quiz/summary/${id}`);
  };

  return (
    <div className="bgImg vh-100">
      <Header />
      <div className="dash-container">
        <div className="userResult-card">
          <div className="fs-2  fw-bold my-2">Result</div>
          <div className="d-flex flex-wrap gap-4">
            <div
              md={12}
              className="card rightAnswerCard border-0
"
              style={{ width: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title rightLogoBgColor">
                  <CircleCheckBig size={100} strokeWidth={1.25} />
                </h5>
                <p className="card-text fs-1">{getResultsByCaseId?.score}</p>
                <p className="fs-3 fw-bold">Right Attempts</p>
              </div>
            </div>
            <div
              md={12}
              className="card resultDangerCard border-0 
"
              style={{ width: "18rem" }}
            >
              <div className="card-body ">
                <h5 className="card-title wrongLogoBgColor">
                  <CircleX size={100} strokeWidth={1.5} />
                </h5>
                <p className="card-text fs-1">
                  {getResultsByCaseId?.total_questions -
                    getResultsByCaseId?.score}
                </p>
                <p className="fs-3 fw-bold">Wrong Attempts</p>
              </div>
            </div>
          </div>
          <div className="resultBtnGroup">
            <button
              className="userSummaryBtn"
              type="button"
              onClick={() => handleSummary(id)}
            >
              <span>
                <BookAudio size={35} strokeWidth={1.75} />
              </span>
              Summary{" "}
            </button>

            <button
              onClick={() => navigate("/user/subject")}
              className="userGotoPageBtn"
            >
              Go to Main Page{" "}
              <span>
                <ArrowRight size={30} strokeWidth={1.75} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserResult;
