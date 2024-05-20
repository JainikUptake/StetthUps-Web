import React from "react";
import Subscription from "../../../components/subscriptions/subscriptions";
import { ArrowLeft } from "lucide-react";
import { Container } from "reactstrap";
import HeaderForPages from "../../headerForPages/headerForPages";

const SubscriptionPage = () => {
  return (
    <>
      <HeaderForPages />

      <div className="fw-bold fs-4 text-center">Subscriptions</div>

      <Container>
        <ArrowLeft size={40} strokeWidth={3} absoluteStrokeWidth />
        <span>Back</span>
      </Container>

      <div className="d-flex flex-wrap justify-content-evenly mt-3">
        <Subscription />
      </div>
    </>
  );
};

export default SubscriptionPage;
