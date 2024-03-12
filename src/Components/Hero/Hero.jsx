import React from "react";
import "./Hero.css";
import ContactIcon from "../ContactIcon/ContectIcon";
import profile from "../../assets/image/my-pic2.jpg";
const Hero = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <div className="display-5">HI , I'm Meng Sea </div>
          <p>
            I'm a beginner front-end web developer and I'm a second-year student in the Information Technology Department, As well as i have been
            self-study on many online platforms i can build a simple website with HTML CSS JavaScript, and React JS
          </p>
          <div className="Tping-container d-flex">
            <h1 className="unchangeText text pe-2">I'm</h1>
            <h1 className="changetext text">Web dev</h1>
          </div>
          <ContactIcon />
        </div>
        <div className="col-md-6 text-center ">
          <div className="profile">
            <img src={profile} className="img-fluid " alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
