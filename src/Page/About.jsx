import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Skill from "../Components/Skill/Skill";
import Hobbies from "../Components/Hobbies/Hobbies";
import Language from "../Components/Language/Language";
import Footer from "../Components/Footer/Footer";
import htmlIcon from "../assets/image/html-5.png";
import cssIcon from "../assets/image/css-3.png";
import JsIcon from "../assets/image/JavaScript-logo.png";
import bootstrapIcon from "../assets/image/Bootstrap_logo.svg.png";
import reactIcon from "../assets/image/React_Logo_SVG.svg.png";
import photoshopIcon from "../assets/image/Adobe_Photoshop_CC_icon.svg.png";
import Me from "../Components/Me/Me";
import { MdMenuBook } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoIosMusicalNotes } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import Experience from "../Components/Experience/Experience";
import Achievement from "../Components/Achiev/Achievement";
const About = () => {
  return (
    <section>
      <Navbar />
      <Me />
      <div className="container py-3">
        <div className="display-4 text-decoration-underline text-center py-4" style={{ color: "violet", fontFamily: "'Playball', cursive" }}>
          Education & Experiences
        </div>
        <Experience />
      </div>
      <div className="container py-3">
        <div className="display-4 text-decoration-underline text-center py-4" style={{ color: "violet", fontFamily: "'Playball', cursive" }}>
          Technical skills
        </div>
        <div className="h1" style={{ color: "violet", fontFamily: "'Playball', cursive" }}>
          Coding skills
        </div>
        <div className="row mb-5">
          <div className="col-md-6">
            <Skill progress="80%" skill="HTML" icon={htmlIcon} />
            <Skill progress="50%" skill="CSS" icon={cssIcon} />
            <Skill progress="70%" skill="Bootstrap" icon={bootstrapIcon} />
            <Skill progress="30%" skill="JavaScript Basic" icon={JsIcon} />
            <Skill progress="35%" skill="React JS" icon={reactIcon} />
            <Skill progress="12%" skill="Photoshop" icon={photoshopIcon} />
          </div>
          <div className="col-md-6">
            <Language />
            <div className="h1" style={{ color: "violet", fontFamily: "'Playball', cursive" }}>
              Hobbies
            </div>
            <div className="d-flex justify-content-start">
              <Hobbies
                Hobbies_icon={<MdMenuBook />}
                MYhobbies={
                  <>
                    <h5 style={{ fontFamily: "'Playball', cursive" }}>Reading</h5>
                    {/* <p className="small">mind book is my favorite</p> */}
                  </>
                }
              />
              <Hobbies
                Hobbies_icon={<IoIosMusicalNotes />}
                MYhobbies={
                  <>
                    <h5 style={{ fontFamily: "'Playball', cursive" }}>Musics</h5>
                    {/* <p className="small">Chill, aesthetic</p> */}
                  </>
                }
              />
              <Hobbies
                Hobbies_icon={<IoGameControllerOutline />}
                MYhobbies={
                  <>
                    <h5 style={{ fontFamily: "'Playball', cursive" }}>Gammings</h5>
                  </>
                }
              />
              <Hobbies
                Hobbies_icon={<FaLaptopCode />}
                MYhobbies={
                  <>
                    <h5 style={{ fontFamily: "'Playball', cursive" }}>Coding</h5>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Achievement />
      <Footer />
    </section>
  );
};

export default About;
