import React, { useEffect } from "react";
import "./play.css";
import Header from "../../../components/usersite/header/header";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  SubscriptionPlan,
  SubscriptionPlanByUser,
} from "../../../redux-toolkit/subscriptionsSlice";
import { useNavigate } from "react-router-dom";

const Play = () => {
  const dispatch = useDispatch();
  const navigate  = useNavigate()

  // Fetch subscription plans and user-specific subscription plans
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

  // Fetch all subscription plans
  useEffect(() => {
    dispatch(SubscriptionPlan());
  }, [dispatch]);

  // Fetch subscription plans by user
  useEffect(() => {
    dispatch(SubscriptionPlanByUser());
  }, [dispatch]);

  console.log(subscriptionPlans, "---plans in page");
  console.log(subscriptionPlanByUser, "---sub plan user api data");

  const isInUserPlans = (plan) => {
    console.log(plan, "only plan");
    return subscriptionPlanByUser?.some(
      (userPlan) => userPlan.subscription_id === plan.id
    );
  };

  // redirect to subject page
  const handlePlaybtn =  () =>{
    navigate("/user/subject")   

  }

  return (
    <>
      <div className="bgImg vh-100">
        <Header />
        <div className="dash-container">
          <div className="play-card">
            <div className="fs-4 fw-bold">Select Pack</div>
            <div className="plays-card">
              <ul className="list-group">
                {subscriptionPlans?.map((plan, index) => (
                  <li key={index} className="list-group-item">
                    <span>{plan.subscription_name}</span>{" "}
                    <button
                      type="button"
                      onClick={handlePlaybtn}
                      className={`btn btn-outline-primary buttonPlay ${!isInUserPlans(plan) ? "disabled" : ""}`}
                      disabled={!isInUserPlans(plan)}
                    >
                      {isInUserPlans(plan) ? "Play" : "Buy"}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Play;
