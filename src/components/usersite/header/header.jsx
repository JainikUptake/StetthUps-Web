
import { useState } from "react";
import images from "../../../assets";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

const Header = (args) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
const handleLogout =() =>{
  
}
  return (
    <Navbar {...args} expand="lg" fixed="top" className="bg-white " container>
      <Link to="/" className="navbar-brand ">
        <img src={images.NavLogo} alt="" className="logo" />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem className="loginBtnMediaQuery loginBtn">
            <Button color="info" onClick={handleLogout}>
              Log out
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
