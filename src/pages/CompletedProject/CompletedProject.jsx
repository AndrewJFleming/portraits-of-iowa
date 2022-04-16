import React from "react";

import authBGImage from "../../assets/images/authBG.jpg";

const CompletedProject = () => {
  return (
    <div
      className="auth-page-wrapper"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${authBGImage})`,
        backgroundPosition: "center top",
      }}
    >
      <div className="auth-form-wrapper">
        <h4>Completed Project</h4>
        <p>Lorem ipsum</p>
      </div>
    </div>
  );
};

export default CompletedProject;
