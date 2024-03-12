import React from "react";
import "./DownResume.css";
import Resume from "../../assets/image/localhost_3000_Resume.png";
import { MdOutlineFileDownload } from "react-icons/md";
const DownResume = () => {
  return (
    <>
      <div className="container text-center py-5">
        <div className="p my-5">You can download my Resume as image directly or read without download in this page</div>
        <a href={Resume} className="download_resume_btn" download={"My Resume"}>
          Download Resume <MdOutlineFileDownload style={{ fontSize: 20 }} />
        </a>
      </div>
    </>
  );
};

export default DownResume;
