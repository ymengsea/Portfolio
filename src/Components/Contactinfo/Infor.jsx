import React from "react";
import "./Info.css";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import picture from "../../assets/image/my-pic2.jpg";
const Infor = () => {
  return (
    <div className="container py-5 px-5">
      <h2 className="text-center mb-5 info">Info</h2>
      <div className="">
        <p>
          I'm so sorry you can't directly send an email to me by that form because sending email is working with the server side, unfortunately, I
          don't have any ideas about the server side yet, Any way you can contact me on my social media link below or the number and Email address
          above.
        </p>
        {/* <img src={picture} className="img-fluid" alt="" /> */}
        {/* <p>Contact</p>
        <div className="d-flex align-items-center mb-4">
          <IoIosMail className="me-3" style={{ fontSize: 30 }} />
          Ymengsea@gmail.com
        </div>
        <div className="d-flex align-items-center mb-4">
          <IoCall className="me-3" style={{ fontSize: 30 }} />
          +855 66787718
        </div> */}
        <div className="d-flex my-4">
          <a
            className="Contact_icon d-flex align-items-center justify-content-center me-2"
            href="https://t.me/Ymengsea"
            target="_blank"
            rel="noreferrer"
          >
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
      </div>
    </div>
  );
};

export default Infor;
