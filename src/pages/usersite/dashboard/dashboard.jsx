import React from "react";
import Subscription from "../../../components/subscriptions/subscriptions";
import Header from "../../../components/usersite/header/header";
import "./dashboard.css";
import { Button, Card, CardText, CardTitle, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="bgImg vh-100">
        <Header />
        <div className="dash-container">
          <div className="dash-container">
            <div className="dash-card">
              <Card className="card-item" onClick={() => handleNavigation('/user/play')}>
                <div className="icon play-icon"></div>
                <CardTitle className="card-title">Play</CardTitle>
              </Card>
              <Card className="card-item" onClick={() => handleNavigation('/user/statistics')}>
                <div className="icon statistics-icon" ></div>
                <CardTitle className="card-title">Statistics</CardTitle>
              </Card>
              <Card className="card-item" onClick={() => handleNavigation('/user/sub')}>
                <div className="icon subscription-icon"></div>
                <CardTitle className="card-title">Subscription</CardTitle>
              </Card>
              <Card className="card-item" onClick={() => handleNavigation('/user/download')}>
                <div className="icon downloads-icon"></div>
                <CardTitle className="card-title">Downloads</CardTitle>
              </Card>
              <Card className="card-item" onClick={() => handleNavigation('/user/Streaks')}>
                <div className="icon streaks-icon"></div>
                <CardTitle className="card-title">Streaks</CardTitle>
              </Card>
              <Card className="card-item" onClick={() => handleNavigation('/user/setting')}>
                <div className="icon setting-icon"></div>
                <CardTitle className="card-title">Setting</CardTitle>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
