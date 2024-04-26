// import React, { useState } from "react";
import { useState } from "react";
import images from "../../assets";
import "./header.css";
import { Link } from "react-router-dom";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <div>
        <Navbar {...args} expand="sm">
          <Link to="/" className="navbar-brand">
            <img src={images.NavLogo} alt="" />
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              {" "}
              {/* Use ms-auto for margin-left: auto */}
              <NavItem>
                <Link to="/pricing" className="nav-item">
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
              <NavItem>
                <Button color="info">Log in</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
