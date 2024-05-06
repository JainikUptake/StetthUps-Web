import {
  ArrowDownToLine,
  BarChart3,
  Flame,
  LogOut,
  Play,
  Podcast,
  Settings,
} from "lucide-react";
import React from "react";
import "./HomePage.css";
import images from "../../../assets";
import { Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import Header from "../../../components/usersite/header/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="vh-100 d-flex justify-content-center align-items-center ">
        <Container className="d-flex justify-content-between flex-wrap ">
          <div>
            <Podcast size={58} absoluteStrokeWidth />
            <div>Subscription</div>
          </div>
          <div>
            <BarChart3 size={58} absoluteStrokeWidth />
            <div>Statistics</div>
          </div>
          <div>
            <Play size={58} absoluteStrokeWidth />
            <div className="text-center">Play</div>
          </div>
          <div>
            <Settings size={58} absoluteStrokeWidth />
            <div>Settings</div>
          </div>
          <div>
            <Flame size={58} absoluteStrokeWidth />
            <div>Streaks</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
