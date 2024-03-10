import React from "react";
import "./Skill.css";
const Skill = (props) => {
  return (
    <div className="container">
      <div className="skill-container py-2">
        <div className="skill-title py-2">
          {props.skill}
          <img className="mx-1" src={props.icon} alt="HTML" />
        </div>
        <div className="skill-bar">
          <div className="per-skill html" style={{ width: props.progress }}>
            <span className="tooltips">{props.progress}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
