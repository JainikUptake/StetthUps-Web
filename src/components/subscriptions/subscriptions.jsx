import { ChevronRight, CircleChevronRight } from "lucide-react";
import React from "react";
import "./subscriptions.css";
import { useNavigate } from "react-router-dom";

const Subscription = ({ subData, disabled }) => {
  console.log(disabled)
  const navigate = useNavigate();

  const handlePlan = (id) => {
    console.log("logs here");
    console.log(id, "subscription plan id");
    navigate(`/user/sub/plan/${id}`);
  };

  const handlePlanBuy = (id) => {
    console.log(id, "---id buy----");
  };

  return (
    <div className={`card card-shadow ${disabled ? "disabled" : ""}`} style={{ width: "auto" }}>
      <div className="card-body">
        <h5 className="card-title fs-3 text-center"> ₹ {subData.web_price} </h5>
        <h6 className="card-subtitle mb-3 text-center">{subData.slug}</h6>
        <div className="text-center fs-5 fw-bold">{subData.subscription_name}</div>
        <div className="d-flex justify-content-center my-2">
          <button 
            type="button" 
            onClick={() => handlePlan(subData.id)} 
            className="btnStart mt-3">
            Get Started
          </button>
         
        </div>
        <div className="d-flex justify-content-center my-2">

        <button 
            type="button" 
            onClick={() => handlePlanBuy(subData.id)} 
            className={`btnBuy mt-3 ${disabled ? "disabled" : ""}`} 
            disabled={disabled}
          >
            BUY
          </button>
          </div>

      </div>

    </div>
  );
};

export default Subscription;
