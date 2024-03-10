import React from "react";
import "./Footer.css";
import Social from "../Socialmedia/Socia";
import { FaRegHandPointDown } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container-fluid bg-black py-5">
      <div className="container text-white ">
        <div className="row">
          <div className="col-md-4">
            <h4 style={{ fontFamily: "'Playball', cursive" }}>Y Meng Sea </h4>
            <p>
              Hi , My name is meng sea i am a beginner of front-end web developer , you can follow me on my social media below
              <FaRegHandPointDown className="ms-1" />
            </p>
            <Social />
          </div>

          <div className="col-md-4">
            <h4>About me </h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="a-link text-decoration-none">
                  <h6>Skills</h6>
                </a>
              </li>
              <li>
                <a href="#" className="a-link text-decoration-none">
                  <h6>Experiens</h6>
                </a>
              </li>
              <li>
                <a href="#" className="a-link text-decoration-none">
                  <h6>Education</h6>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h4>Contact me </h4>
            <h6>Email</h6>
            <form action="" className="contact_form d-flex ">
              <input type="text" placeholder="messages" className="message" />
              <input type="submit" value={"Send"} className="submit_btn" />
            </form>
          </div>
        </div>
      </div>
      <div className="container justify-content-center d-flex pt-4 text-white">
        <p className="me-2">&copy; 2024 </p>
        <p className="me-2" style={{ fontFamily: "'Playball', cursive" }}>
          Y Meng Sea.
        </p>
        <p> All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
