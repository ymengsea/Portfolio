import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Me from "../Components/Me/Me";
import Experience from "../Components/Experience/Experience";
import Skill from "../Components/Skill/Skill";
import htmlIcon from "../assets/image/html-5.png";
import cssIcon from "../assets/image/css-3.png";
import JsIcon from "../assets/image/JavaScript-logo.png";
import bootstrapIcon from "../assets/image/Bootstrap_logo.svg.png";
import reactIcon from "../assets/image/React_Logo_SVG.svg.png";
import photoshopIcon from "../assets/image/Adobe_Photoshop_CC_icon.svg.png";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Me />
      <Experience />
      <div className="container py-3">
        <div className="display-4 text-decoration-underline text-center py-4" style={{ color: "violet", fontFamily: "'Playball', cursive" }}>
          Technical skills
        </div>
        <div className="h1" style={{ color: "violet", fontFamily: "'Playball', cursive" }}>
          Coding skills
        </div>
        <Skill progress="80%" skill="HTML" icon={htmlIcon} />
        <Skill progress="50%" skill="CSS" icon={cssIcon} />
        <Skill progress="70%" skill="Bootstrap" icon={bootstrapIcon} />
        <Skill progress="30%" skill="JavaScript Basic" icon={JsIcon} />
        <Skill progress="35%" skill="React JS" icon={reactIcon} />
        <Skill progress="12%" skill="Photoshop" icon={photoshopIcon} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
