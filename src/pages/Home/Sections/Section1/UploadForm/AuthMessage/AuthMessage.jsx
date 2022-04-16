import React from "react";
import { Link } from "react-router-dom";

import "./AuthMessage.css";

const AuthMessage = ({ isPassedDeadline, deadline }) => {
  return isPassedDeadline ? (
    <div className="auth-message-wrapper">
      <p className="passed-deadline-message">
        &#10033; The submission period closed on{" "}
        <span style={{ fontWeight: 700 }}>{deadline.toDateString()}</span>.
      </p>
      <p>
        Click <Link to="/completed-project">here</Link> to explore brief
        documentation of the completed project.
      </p>
    </div>
  ) : (
    <div className="auth-message-wrapper">
      <h5 className="serif-text">Upload Files</h5>
      <p className="auth-message">
        Please <Link to="/login">login</Link> or{" "}
        <Link to="/register">register</Link> to upload images to the project.
      </p>
    </div>
  );
};

export default AuthMessage;
