import React from "react";
import homeLogo from "./images/homeLogo.png";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container ">
          <div className="">
            <div className="d-flex ">
              <img
                src={homeLogo}
                alt="logo image"
                width="150px"
                className="mt-5 footer-img"
              />
              <p className="mt-5 footer-text">
                We are teams of creatives who are thrilled to create,
                <br />
                <span className="footer-main-text">
                  ignite and succeed your business with all things digital
                </span>
              </p>
            </div>
            <p className="footer-mail mt-4">Email Us</p>
            <p className="footer-address">xyz@mediaicon.com</p>
            <p className="footer-mail mt-4 pt-4">Contact Us</p>
            <p className="footer-contact">+91-1234567890</p>
            <div className="d-flex flex-column justify-content-center align-items-center w-25 footer-material">
              <span className="footer-item-first">
                Quick Links
                <hr />
              </span>
              <span className="footer-item">About</span>
              <span className="footer-item">Careers</span>
              <span className="footer-item">Make Payment</span>
              <span className="footer-item">Reach us</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
