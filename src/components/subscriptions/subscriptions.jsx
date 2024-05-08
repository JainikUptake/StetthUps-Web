import { ChevronRight, CircleChevronRight } from "lucide-react";
import React from "react";
import "./subscriptions.css";

const Subscription = () => {
  return (
    <div className="card card-shadow" style={{ width: "12rem" }}>
      <div className="card-body">
        <h5 className="card-title text-center">NEET/NEXT </h5>
        <h6 className="card-subtitle mb-3 text-center">India</h6>
        <div className="text-center fw-bold">4899 ₹</div>
        <div className="text-center fw-bold">10m + 2m</div>
        <div className="d-flex justify-content-center my-2">
          <CircleChevronRight size={40} strokeWidth={3} absoluteStrokeWidth />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
