import React from "react";
import "./Experience.css";
const Experience = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {/* ------------------ Education ------------------*/}
          <div className="col-md-6">
            <h1 className="mb-5 py-3" style={{ fontFamily: "'Playball', cursive" }}>
              Education
            </h1>
            <div className="container timelinecontainer py-3">
              <div className="container content">
                <div className="py-2 px-3">
                  <div className="d-flex justify-content-between">
                    <h2>Online</h2>
                    <p>2022-present</p>
                  </div>
                  <p>I confortable with online course and practice with online platform such as Udemy, Coursera, Edx </p>
                  <p style={{ color: "green" }}>I can built this portfolio 99% because of online course, thank you </p>
                </div>
              </div>
            </div>
            <div className="container timelinecontainer py-3">
              <div className="container content">
                <div className="py-2 px-3">
                  <div className="d-flex justify-content-between">
                    <h2>Collage</h2>
                    <p>2022-present</p>
                  </div>
                  <p>bachelor's degree in Information Technology at National University of Management </p>
                  <p>GPA 3.5</p>
                </div>
              </div>
            </div>
            <div className="container timelinecontainer py-3">
              <div className="container content">
                <div className="py-2 px-3">
                  <div className="d-flex justify-content-between">
                    <h2>High School</h2>
                    <p>2019-2022</p>
                  </div>
                  <p>Student of Poi Pet krong High School, interested in Science and modern-day's Technology</p>
                  <p>Grade B </p>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------ Expereince ------------------*/}
          <div className="col-md-6">
            <h1 className="mb-5 py-3" style={{ fontFamily: "'Playball', cursive" }}>
              Expereince
            </h1>
            <div className="container timelinecontainer py-3">
              <div className="container content">
                <div className="py-2 px-3">
                  <div className="d-flex justify-content-between">
                    <h2>Practice</h2>
                    <p>Present</p>
                  </div>
                  <p>Nowadays am research and practice with my own project as web developer to be better and hope i got a job.</p>
                  <p>No status</p>
                </div>
              </div>
            </div>
            <div className="container timelinecontainer py-3">
              <div className="container content">
                <div className="py-2 px-3">
                  <div className="d-flex justify-content-between">
                    <h2>Internship</h2>
                    <p>9/2023-1/2024</p>
                  </div>
                  <p>I also uoe to train and work as an Intership with a startup company but i resign due to bad situation</p>
                  <p>Position Fron-end</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
