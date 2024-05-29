import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import images from "../../assets";
import "./headerForPages.css";
import Swal from "sweetalert2";
import { LogOut } from "lucide-react";

const HeaderForPages = () => {
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "LOG OUT!",
          text: " ",
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <Container>
        <Navbar className="my-2" color="white" white sticky="top">
          <NavbarBrand href="/" className="d-flex align-items-center">
            <img
              alt="logo"
              src={images.userHomeHeaderLogo}
              className="headerPages img-fluid "
            />
            <span className="fs-2 mx-3"> Steth Up</span>
          </NavbarBrand>
          <LogOut
            size={48}
            strokeWidth={3}
            absoluteStrokeWidth
            onClick={handleLogOut}
          />
        </Navbar>
      </Container>
    </>
  );
};

export default HeaderForPages;
