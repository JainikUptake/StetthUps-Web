// import React, { useState } from "react";
import { useState } from "react";
import images from "../../assets";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
  Container,
} from "reactstrap";

const Header = (args) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar {...args} expand="lg" fixed="top" className="bg-white " container>
      <Link to="/" className="navbar-brand ">
        <img src={images.NavLogo} alt="" />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Link to="/pricing" className="nav-item ">
              Pricing
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-item">
              About us
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" className="nav-item">
              Contact
            </Link>
          </NavItem>
          <NavItem className="loginBtnMediaQuery loginBtn">
            <Button color="info" onClick={() => navigate("/auth/login/email")}>
              Log in
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
