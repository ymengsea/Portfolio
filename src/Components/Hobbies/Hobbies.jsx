import React from "react";

const Hobbies = (props) => {
  return (
    <div className="text-center">
      <ul className="list-unstyled">
        <li>
          <div className="container">
            <div className="hobbieIcon" style={{ fontSize: 30, color: "violet" }}>
              {props.Hobbies_icon}
            </div>
            <div className="hobbiesName">{props.MYhobbies}</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
