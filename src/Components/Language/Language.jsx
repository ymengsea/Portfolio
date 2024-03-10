import React from "react";

const Language = () => {
  return (
    <div className="container">
      <div className="title">
        <h1 style={{ color: "violet", fontFamily: "'Playball', cursive" }}>Language</h1>
      </div>
      <div className="language d-flex py-4">
        <div className="me-3 text-center">
          <h4>Khmer</h4>
          <p className="small">Mother-language</p>
        </div>
        <div className="me-3 text-center">
          <h4>English</h4>
          <p className="small">intermediate</p>
        </div>
      </div>
    </div>
  );
};

export default Language;
