import { ChevronRight, CircleChevronRight } from "lucide-react";
import React from "react";
import "./subscriptions.css";

const Subscription = () => {
  return (
    <div className="card card-shadow" style={{ width: "auto" ,height:"20rem" }}>
      <div className="card-body">
        <h5 className="card-title fs-3 text-center">4899 ₹ </h5>
        <h6 className="card-subtitle mb-3 text-center">10m + 2m</h6>
        <div className="text-center fs-5 fw-bold">NEET / NEXT(india)</div>
        <div className="d-flex justify-content-center my-2">
          <button type="button" className="btnStart mt-3">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
