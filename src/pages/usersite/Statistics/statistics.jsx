import React, { useEffect } from "react";
import "./statistics.css";
import { SquareArrowLeft } from "lucide-react";
import Header from "../../../components/header/header";
import { useDispatch, useSelector } from "react-redux";
import { GetStatistics } from "../../../redux-toolkit/getStatisticsSlice";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

const Statistics = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getUserStatistics, loading, error } = useSelector(
    (state) => state.getStatistics
  );

  useEffect(() => {
    dispatch(GetStatistics());
  }, [dispatch]);

  const data = [
    { name: "Correct", value: getUserStatistics?.totalCorrect || 0 },
    { name: "Incorrect", value: getUserStatistics?.totalIncorrect || 0 },
  ];

  const COLORS = ["#16BFD6", "#000000"];

  return (
    <>
      <div className="bgImg">
        <div className="header-container">
          <Header />
        </div>
        <div className="state-container">
          <div className="statistics-card d-flex flex-column align-items-center">
            <div className="back-button" onClick={() => navigate("user/dashboard")}>
              <SquareArrowLeft size={40} strokeWidth={1} fill="green" />
              <span>Back</span>
            </div>
            <span className="fs-2 fw-bold">Statistics</span>
            <div className="row">
              <div className="col">
                <div className="statistics-content">
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height={400}>
                      <PieChart>
                        <Pie
                          data={data}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={150}
                          fill="#8884d8"
                          label
                        >
                          {data.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="stats-list">
                  <div className="fs-3 fw-bold d-flex justify-content-center scoreTextColor">Your Score</div>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <span className="fw-bold text-secondary">Total Attempts:</span> 
                      {getUserStatistics?.totalQuestions}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold text-secondary">Total Correct:</span>
                      <span className="text-success"> {getUserStatistics?.totalCorrect}</span>
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold text-secondary">Total Incorrect:</span>
                      <span className="text-danger"> {getUserStatistics?.totalIncorrect}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
