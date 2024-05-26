import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderForPages from "../../headerForPages/headerForPages";
import "./sub.css";
import { useDispatch, useSelector } from "react-redux";
import { SubscriptionPlanById } from "../../../redux-toolkit/subscriptionsSlice";
import Header from "../../../components/usersite/header/header";
const SubPlans = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { subscriptionPlanById, loading, error } = useSelector(
    (state) => state.subscriptionPlanById
  );
  console.log(subscriptionPlanById, "-----ddd");

  useEffect(() => {
    dispatch(SubscriptionPlanById(id));
  }, [id]);

  {
    /* <div>subPlans{id}</div> */
  }
  return (
    <>
      <div className="bgImg vh-100">
        <Header />
        <div className="dash-container">
          <div className="subPlans-card">
            <h2 className="subscription-title">
              {subscriptionPlanById?.subscription_name}
            </h2>
            <p className="subscription-duration">
              Month Included: <span>{subscriptionPlanById?.slug}</span>
            </p>
            <p className="subscription-price">
              Subscription Price:{" "}
              <span>₹{subscriptionPlanById?.web_price}</span>
            </p>
            <p className="subscription-lifelines">
              Lifelines Provide: <span>{subscriptionPlanById?.lifeline}</span>
            </p>
            <div
              className="subscription-description"
              dangerouslySetInnerHTML={{
                __html: subscriptionPlanById?.description,
              }}
            >
              {/* {subscriptionPlanById?.description} */}
            </div>
            {/* <button className="buy-button">Buy This Plan</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubPlans;
