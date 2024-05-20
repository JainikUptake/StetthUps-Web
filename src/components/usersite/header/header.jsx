
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
import { useDispatch } from "react-redux";
import { logout } from "../../../redux-toolkit/ProfileSlice";
import Swal from 'sweetalert2';
const Header = (args) => {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
  
    try {
      const response = await dispatch(logout()).unwrap(); // Use unwrap to handle the fulfilled value directly
      console.log(response, "Logout response");
      
      // If the logout is successful, you can show a success message and navigate
      Swal.fire({
        title: "Success!",
        text: "Logout Successful",
        icon: "success"
      });
      localStorage.removeItem('token')
      // navigate("/auth/login"); // Navigate to login page or other appropriate route
    } catch (error) {
      console.log(error, "Logout error");
      Swal.fire({
        title: "Error!",
        text: "Logout Failed!",
        icon: "error"
      });
    }
  };
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
