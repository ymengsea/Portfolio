import React from "react";
import myProfile from "../../assets/image/my-pic.jpg";
import { BsEmojiGrin } from "react-icons/bs";
import { BsEmojiWink } from "react-icons/bs";
const Me = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-7 d-flex align-items-center justify-content-center">
          <p className="px-5 lh-lg">
            <h1 style={{ fontFamily: "'Playball', cursive" }}>HI , My name is Meng Sea</h1>
            Nowadays i just a second-year student the Department of Information Technology at the National University of Management, by the ways I
            have been researching and practicing as a web developer for over 5 months, Honestly, i have taken many courses on the internet due to I
            can't afford to pay for part-time school, thankfully i can understand a little bit of English so decided to study by my self and i built
            about 5 basic website and of course my first website look weird {<BsEmojiWink style={{ color: "#FFC83D" }} />} , at least i can built this
            portfolio website using React JS which is the newest skill i have gain, i tell you one more thing i failed English subject{" "}
            {<BsEmojiGrin style={{ color: "#FFC83D" }} />} .
          </p>
        </div>
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img src={myProfile} alt="" className="img-thumbnail" />
        </div>
      </div>
    </div>
  );
};

export default Me;
