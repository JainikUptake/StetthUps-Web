import React, { useEffect, useState } from "react";
import "./subject.css";
import Header from "../../../components/usersite/header/header";
import { useDispatch, useSelector } from "react-redux";
import { GetSubject } from "../../../redux-toolkit/subjectSlice";
import { Link } from "react-router-dom";
import { Spinner, Alert } from "reactstrap";

const Subject = () => {
  const dispatch = useDispatch();
  const { getSubject, loading, error } = useSelector(
    (state) => state.getSubject
  );

  useEffect(() => {
    dispatch(GetSubject());
  }, [dispatch]);

  return (
    <div className="bgImg vh-100">
      <Header />
      <div className="subject-container d-flex justify-content-center align-items-center">
        {loading ? (
          <div className="loader-container d-flex justify-content-center align-items-center">
            <Spinner color="primary" />
          </div>
        ) : error ? (
          <Alert color="danger">{error}</Alert>
        ) : (
          <div className="subject-card">
            <div className="fs-4 fw-bold mb-3">Select Subject</div>
            <ul className="list-group">
              {getSubject?.map((getAllSubject, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <Link to={`/user/topic/${getAllSubject?.id}`}>
                    {getAllSubject?.subject_name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subject;
