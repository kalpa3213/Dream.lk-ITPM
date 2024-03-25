import React from "react";
import {Col, Container, Row} from "reactstrap";

import logo from "../../assets/imgs/dark-logo.png";
import paymentLogo from "../../assets/imgs/payment-method.png";
import {NavLink} from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import {MdKeyboardArrowRight} from "react-icons/md";
import {AiFillHome} from "react-icons/ai";
import SocialIcon from "../../common/components/Icons/SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-light pt-4">
      {/* FooterInfo */}
      <Container>
        <Row>
          <Col lg={6}>
            <img src={logo} alt="Logo" width={157} height={50} />
            <p className="my-3">
            Welcome to our online fashion haven, where chic meets comfort. Explore curated collections for timeless looks that won't break the bank. Connect with us on social media for the latest trends, promotions, and style inspiration:
            </p>
            <div className="d-flex align-items-center">
              {[
                {Icon: FaFacebookF, bgColor: "#3b5998"},
                {Icon: FaInstagram, bgColor: "#ac2bac"},
                {Icon: FaTiktok, bgColor: "#000"},
                {Icon: FaTwitter, bgColor: "#55acee"},
              ].map((item, idx) => (
                <SocialIcon key={idx} {...item} />
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col md={6}>
                <h5 className="mt-3">Information</h5>
                <ul>
                  {[
                    "About us",
                    "FAQ",
                    "Terms & Conditions",
                    "Contact Us",
                    "Help",
                  ].map((item) => (
                    <li key={item} className="mb-2 d-flex align-items-center">
                      <MdKeyboardArrowRight />
                      <NavLink to="/" className={"nav-link"}>
                        {item}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={6}>
                <h5 className="mt-3">Contact</h5>
                <ul>
                  {[
                    {Icon: AiFillHome, text: "Malabe, Kurunegala"},
                    {Icon: FaEnvelope, text: "support.dream.lk"},
                    {Icon: FaPhoneAlt, text: "+94 00 000 000 00"},
                  ].map(({Icon, text}) => (
                    <li className="mb-3" key={text}>
                      <Icon size={20} className="me-2" /> {text}
                    </li>
                  ))}
                </ul>
                <div>
                  <img
                    src={paymentLogo}
                    alt="stripe-logo"
                    width={"170px"}
                    height={"24px"}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* MadeText */}
      <div className="text-center p-3 bg-light mt-3">
      © 2024 Dream.lk. All rights reserved. 
        
      </div>
    </footer>
  );
};

export default Footer;
