import React, { useState } from "react";
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
  NavLink,
  NavbarText,
} from "reactstrap";

const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <div>
        <Navbar {...args} expand="sm">
          <img src={images.NavLogo} alt="" />
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link to="" className="nav-items">
                  Pricing
                </Link>
              </NavItem>
              <NavItem>
                <Link to="" className="nav-items">
                  About us
                </Link>
              </NavItem>
              <NavItem>
                <Link to="" className="nav-items">
                  Contact
                </Link>
              </NavItem>
            </Nav>

            <Button color="info">Log in</Button>
          </Collapse>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
