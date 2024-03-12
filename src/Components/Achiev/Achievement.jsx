import React from "react";
import "./Achievement.css";
import certificate from "../../assets/image/Certificate.png";
const Achievement = () => {
  return (
    <div className="container py-5 ">
      <div className="display-4 text-center py-5" style={{ fontFamily: "'Playball', cursive", color: "violet" }}>
        My Achievement
      </div>
      <div className="row g-0">
        <div className="col-md-6 px-5 py-5">
          <h4>Introduce to fron-end developer </h4>
          <p>
            After i complete the course i can build a simple website:
            <ul>
              <li>Responsive with bootstrap</li>
              <li>Portfolio</li>
              <li>Single page wedsite</li>
              <li>Multi-page</li>
            </ul>
          </p>
        </div>
        <div className="col-md-6">
          <img src={certificate} className="img-fluid " width="500" alt="Certificate" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
