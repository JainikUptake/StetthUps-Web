import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className=" mt-5">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "black" }}
      >
        <div className="container p-4 pb-0">
          <section className>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Stethups
                </h6>
                <p>Only Audio Visual Question Bank for Medical Students</p>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                </a>
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  role="button"
                >
                  <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                </a>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Website
                </h6>
                <p className="text-white"> Pricing</p>
                <p className="text-white">About Us</p>
                <p className="text-white">contact</p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Resources
                </h6>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Support
                </h6>
                <p>
                  <i className="fas fa-home mr-3" /> Help Docs
                </p>
                <p>
                  <i className="fas fa-envelope mr-3" /> Templates
                </p>
                <p>
                  <i className="fas fa-phone mr-3" />
                  Community
                </p>
              </div>
            </div>
          </section>
          <hr className="my-2 container-fluid" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="p-3 text-center">© 2024 StetthUps</div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
