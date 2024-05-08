import React from "react";
import Subscription from "../../../components/subscriptions/subscriptions";
import Header from "../../../components/usersite/header/header";
import "./dashboard.css";
import { Button, Card, CardText, CardTitle, Container } from "reactstrap";

const Dashboard = () => {
  return (
    <>
      <div className="bgImg vh-100">
        <Header />
        <div>
          <Card
            body
            className="my-2"
            style={{
              width: "18rem",
            }}
          >
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button color="primary">Go somewhere</Button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
