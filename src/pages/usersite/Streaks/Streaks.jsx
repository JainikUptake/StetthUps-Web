import { ChevronLeftSquare, Equal, Flame, HeartPulse } from "lucide-react";
import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "./Streaks.css";
import HeaderForPages from "../../headerForPages/headerForPages";

const Streaks = () => {
  return (
    <>
      <HeaderForPages />
      <Container>
        <div className="d-flex">
          <div>
            <ChevronLeftSquare size={48} strokeWidth={3} absoluteStrokeWidth />
          </div>

          <div className="fs-3">Streaks</div>
        </div>
        <div className="mt-5">
          <Row>
            <Col sm={3}>
              <span className="fw-bold score">1</span>

              <Flame size={100} strokeWidth={0.5} />

              <div className="fw-bold fs-2">Streaks</div>
            </Col>
            <Col sm={3}>
              <Equal size={100} strokeWidth={2.25} />
            </Col>
            <Col sm={3}>
              <span className="fw-bold score">1</span>
              <HeartPulse size={100} strokeWidth={0.75} />
              <div className="fw-bold fs-2">Lifeline</div>
            </Col>
            <Col sm={3} className="d-flex flex-column align-items-center">
              <span className="fw-bolder fs-2">Total Lifeline</span>

              <div>
                <HeartPulse size={100} strokeWidth={0.75} />
                <div className="fw-bold fs-4 totalLifeLine">92</div>
              </div>
            </Col>
          </Row>
        </div>
        <Button className="custom-button fs-4">Claim</Button>
      </Container>
    </>
  );
};

export default Streaks;
