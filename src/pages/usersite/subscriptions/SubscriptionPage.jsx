import React, { useEffect } from "react";
import Subscription from "../../../components/subscriptions/subscriptions";
import { useDispatch, useSelector } from "react-redux";
import { SubscriptionPlan, SubscriptionPlanByUser } from "../../../redux-toolkit/subscriptionsSlice";
import Header from "../../../components/usersite/header/header";
import './subscription.css';

const SubscriptionPage = () => {
  const dispatch = useDispatch();
  
  // Fetch subscription plans and user-specific subscription plans
  const { subscriptionPlans, loading: loadingPlans, error: errorPlans } = useSelector((state) => state.subscriptionPlan);
  const { subscriptionPlanByUser, loading: loadingUserPlans, error: errorUserPlans } = useSelector((state) => state.subscriptionPlanByUser);
  
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

  // Helper function to check if a plan is in the user's subscription plans
  const isInUserPlans = (plan) => {
    return subscriptionPlanByUser?.some(userPlan => userPlan.id === plan.id);
  };

  return (
    <div className="bgImg vh-100">
      <Header />
      <div className="dash-container">
        <div className="dash-card">
          {subscriptionPlans?.map((plan, index) => (
            <Subscription 
              subData={plan} 
              key={index} 
              disabled={isInUserPlans(plan)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
