import React from "react";
import "./Social.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
const Socia = () => {
  return (
    <div className="contaienr">
      <ul className="list-unstyled d-flex">
        <li className="me-1">
          <a
            href="https://web.facebook.com/meng.sea.7739/"
            className="social_icon d-flex justify-content-center align-items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li className="me-1">
          <a
            href="https://www.instagram.com/mengxea/"
            className="social_icon d-flex justify-content-center align-items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li className="me-1">
          <a
            href="https://www.linkedin.com/in/y-meng-sea-50476a29a/"
            className="social_icon d-flex justify-content-center align-items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="me-1">
          <a
            href="https://github.com/ymengsea"
            className="social_icon d-flex justify-content-center align-items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socia;
