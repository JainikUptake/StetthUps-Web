import React, { useEffect, useState } from "react";
import "./play.css";
import Header from "../../../components/usersite/header/header";
import { useDispatch, useSelector } from "react-redux";
import {
  SubscriptionPlan,
  SubscriptionPlanByUser,
} from "../../../redux-toolkit/subscriptionsSlice";
import { useNavigate } from "react-router-dom";
import { Spinner, Alert } from "reactstrap";

const Play = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const {
    subscriptionPlans,
    loading: loadingPlans,
    error: errorPlans,
  } = useSelector((state) => state.subscriptionPlan);
  const {
    subscriptionPlanByUser,
    loading: loadingUserPlans,
    error: errorUserPlans,
  } = useSelector((state) => state.subscriptionPlanByUser);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await dispatch(SubscriptionPlan());
      await dispatch(SubscriptionPlanByUser());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  const isInUserPlans = (plan) => {
    return subscriptionPlanByUser?.some(
      (userPlan) => userPlan.subscription_id === plan.id
    );
  };

  const handlePlaybtn = () => {
    navigate("/user/subject");
  };

  return (
    <div className="bgImg vh-100">
      <Header />
      <div className="dash-container">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center loader-container">
            <Spinner color="primary" />
          </div>
        ) : errorPlans || errorUserPlans ? (
          <Alert color="danger">{errorPlans || errorUserPlans}</Alert>
        ) : (
          <div className="play-card">
            <div className="fs-4 fw-bold mb-3">Select Pack</div>
            <div className="plays-card">
              <ul className="list-group">
                {subscriptionPlans?.map((plan, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>{plan.subscription_name}</span>
                    <button
                      type="button"
                      onClick={handlePlaybtn}
                      className={`btn btn-outline-primary buttonPlay ${
                        !isInUserPlans(plan) ? "disabled" : ""
                      }`}
                      disabled={!isInUserPlans(plan)}
                    >
                      {isInUserPlans(plan) ? "Play" : "Buy"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Play;
