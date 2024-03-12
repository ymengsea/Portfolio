import React from "react";
import "./Info.css";
import ContectIcon from "../ContactIcon/ContectIcon";

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
        <ContectIcon />
      </div>
    </div>
  );
};

export default Infor;
