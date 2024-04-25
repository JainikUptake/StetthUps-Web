import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import { Row, Col, Button } from "reactstrap";
const Home = () => {
  return (
    <>
      <Header />
      <Row className="homeBanner ">
        <Col xs="6" className="bg-white">
          <h2 className="homeContent">
            Only Audio Visual Question Bank Globally For Medical Students
          </h2>
          <h4>
            Unlock a world of knowledge with the ultimate audio visual question
            bank, followed analytics and more by our support team to ensure
            success in your medical exams.
          </h4>
          <div>
            <Button color="primary">Get Started </Button>{" "}
            <Button>Learn More </Button>
          </div>
        </Col>
        <Col xs="6"></Col>
      </Row>
    </>
  );
};

export default Home;
