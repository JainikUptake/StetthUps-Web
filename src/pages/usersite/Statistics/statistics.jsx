import React, { PureComponent } from "react";
import "./statistics.css";

import { Col, Row, Container } from "reactstrap";
import { ChevronLeftSquare } from "lucide-react";


const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
// const data02 = [
//   { name: "A1", value: 100 },
//   { name: "A2", value: 300 },
//   { name: "B1", value: 100 },
//   { name: "B2", value: 80 },
//   { name: "B3", value: 40 },
//   { name: "B4", value: 30 },
//   { name: "B5", value: 50 },
//   { name: "C1", value: 100 },
//   { name: "C2", value: 200 },
//   { name: "D1", value: 150 },
//   { name: "D2", value: 50 },
// ];

const Statistics = () => {
  return (
    <>
      <Container>
        <div className="d-flex align-items-center">
          <div>
            <ChevronLeftSquare size={50} strokeWidth={3} absoluteStrokeWidth />
          </div>
          <div className="fs-2 contactUs">Statistics</div>
        </div>
        <Row>
          <Col>
            {/* <ResponsiveContainer width="100%" height="100%">
              <PieChart height={400} width={400}>
                <Pie
                  data={data01}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                />
                <Pie
                  data={data02}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </ResponsiveContainer> */}

            <div className="fs-3">93%</div>
            <div className="fw-bold fs-4">Correct</div>
          </Col>
          <Col>
            <div className="fs-3 mt-4 fw-bold">Your Score</div>
            <div className="fs-5 text-muted">
              Total Attempted :{" "}
              <span className=" fs-5 fw-bold statisticsValue  p-2">1998 </span>
            </div>
            <div className="fs-5 text-muted my-3">
              Total Correct : <span className=" fs-5 fw-bold statisticsValue totalStatisticsValue p-1 ">1800 </span>
            </div>
            <div className="fs-5 text-muted">
              Total Incorrect : <span className="fs-5 fw-bold statisticsValue p-1">98 </span>
            </div>

            {/* <div className="d-flex align-items-center mt-3">
              <span className="fs-5 text-muted">Total Attempted : </span>
              <div className=" fs-5"> 1998</div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fs-5 text-muted">Total Correct : </span>
              <div className=" fs-5"> 1800</div>
            </div>
            <div className="d-flex align-items-center mt-3">
              <span className="fs-5 text-muted">Total Incorrect : </span>
              <div className="fs-5"> 98</div>
            </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Statistics;
