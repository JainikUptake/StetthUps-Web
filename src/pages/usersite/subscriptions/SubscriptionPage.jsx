import React from "react";
import Subscription from "../../../components/subscriptions/subscriptions";
import { ArrowLeft } from "lucide-react";
import { Container } from "reactstrap";
import HeaderForPages from "../../headerForPages/headerForPages";

const SubscriptionPage = () => {
  return (
    <>
      <HeaderForPages />

      <Container>
        <ArrowLeft size={40} strokeWidth={3} absoluteStrokeWidth />
        <span>Subscriptions</span>
      </Container>

      <div className="d-flex justify-content-evenly mt-3">
        <Subscription />
        <Subscription />
        <Subscription />
        <Subscription />
      </div>
    </>
  );
};

export default SubscriptionPage;
