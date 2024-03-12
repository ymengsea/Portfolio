import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./ContactIcon.css";
const ContectIcon = () => {
  return (
    <div className="d-flex my-4">
      <a className="Contact_icon d-flex align-items-center justify-content-center me-2" href="https://t.me/Ymengsea" target="_blank" rel="noreferrer">
        <LiaTelegramPlane style={{ fontSize: 20 }} />
      </a>
      <a
        className="Contact_icon d-flex align-items-center justify-content-center me-2"
        href="https://web.facebook.com/meng.sea.7739/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF style={{ fontSize: 20 }} />
      </a>
      <a
        className="Contact_icon d-flex align-items-center justify-content-center me-2"
        href="https://www.linkedin.com/in/y-meng-sea-50476a29a/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn style={{ fontSize: 20 }} />
      </a>
    </div>
  );
};

export default ContectIcon;
