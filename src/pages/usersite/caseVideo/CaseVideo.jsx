import React, { useEffect } from "react";
import "./CaseVideo.css";
import Header from "../../../components/header/header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetCaseByCaseId } from "../../../redux-toolkit/getCaseSlice";

const CaseVideo = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { getCaseByCaseId, loading, error } = useSelector(
    (state) => state.getCaseByCaseId
  );
  console.log(getCaseByCaseId, "-----ddd");

  useEffect(() => {
    dispatch(GetCaseByCaseId(id));
  }, [id]);

  const lastFile = getCaseByCaseId?.case_files;

  const lastchancenot = lastFile?.split(".").pop();
  console.log(JSON.stringify(lastchancenot));

  const file = (lastchancenot)?.toLowerCase();

  return (
    <>
      <div className="bgImg vh-100">
        <Header />
        <div className="dash-container">
          <div className="CaseVideo-card">
            <h1>{file}</h1>

            {file == "png"  ? (
              <img
                src={getCaseByCaseId?.case_files}
                className="casevideo-img"
                alt="not found"
              />
            ) : (
              <video
                src={getCaseByCaseId?.case_files}
                controls
                className="casevideo-video"
              ></video>
            )}

            {/* <div className="fs-4 fw-bold"> Select case </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseVideo;
