// import React from "react";
// import "./header.css";
// import { ArrowDownToLine, Container, LogOut } from "lucide-react";
// import images from "../../../assets";
// import { Navbar, NavbarBrand } from "reactstrap";
// import Swal from "sweetalert2";

// const Header = () => {
//   const handleLogOut = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, log out",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire({
//           title: "LOG OUT!",
//           text: " ",
//           icon: "success",
//         });
//       }
//     });
//   };
//   return (
//     <Navbar className="my-2" color="white" white container fixed="top">
//       <NavbarBrand href="/">
//         <img
//           alt="logo"
//           src={images.userHomeHeaderLogo}
//           className="userHeader"
//         />
//         <span>Steth Up</span>
//       </NavbarBrand>
//       <div>
//         <ArrowDownToLine
//           size={40}
//           strokeWidth={3}
//           absoluteStrokeWidth
//           className="mx-4"
//         />

//         <LogOut
//           size={40}
//           strokeWidth={3}
//           absoluteStrokeWidth
//           onClick={handleLogOut}
//         />
//       </div>
//     </Navbar>
//   );
// };

// export default Header;

// import React, { useState } from "react";
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

  return (
    <Navbar {...args} expand="lg" fixed="top" className="bg-white " container>
      <Link to="/" className="navbar-brand ">
        <img src={images.NavLogo} alt="" className="logo" />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem className="loginBtnMediaQuery loginBtn">
            <Button color="info" onClick={() => navigate("/auth/login/email")}>
              Log out
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
