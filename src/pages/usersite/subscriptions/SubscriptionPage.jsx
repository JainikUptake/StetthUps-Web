import React, { useEffect } from "react";
import Subscription from "../../../components/subscriptions/subscriptions";
import { ArrowLeft } from "lucide-react";
import { Container } from "reactstrap";
import HeaderForPages from "../../headerForPages/headerForPages";
import { useDispatch, useSelector } from "react-redux";
import { SubscriptionPlan } from "../../../redux-toolkit/subscriptionsSlice";

const SubscriptionPage = () => {
  const dispatch = useDispatch()
  const {subscriptionPlans , loading , error } = useSelector((state)=>state.subscriptionPlan)
console.log(subscriptionPlans,"---paln in page")
  useEffect(()=>{
    dispatch(SubscriptionPlan())
  },[dispatch])
  

  return (
    <>
      <HeaderForPages />

      <div className="fw-bold fs-4 text-center">Subscriptions</div>

      <Container>
        <ArrowLeft size={40} strokeWidth={3} absoluteStrokeWidth />
        <span>Back</span>
      </Container>

      <div className="d-flex flex-wrap justify-content-evenly mt-3">
        {
          subscriptionPlans?.map((getAllPlans,index)=>(
            <Subscription subData={getAllPlans} key={index} />
          ))
        }


      
      </div>
    </>
  );
};

export default SubscriptionPage;
