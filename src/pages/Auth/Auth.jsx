import React from "react";

import authBGImage from "../../assets/images/authBG.jpg";
import "./Auth.css";

const Auth = ({
  error,
  isLoading,
  title,
  desc,
  buttonName,
  emailRef,
  passwordRef,
  handleSubmit,
}) => {
  return (
    <div
      className="auth-page-wrapper"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${authBGImage})`,
        backgroundPosition: "center top",
      }}
    >
      <div className="auth-form-wrapper">
        <h4>{title}</h4>
        <p>{desc}</p>
        <form className="auth-form" id="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" ref={emailRef} />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
            />
            <div className="auth-button-wrapper">
              <button disabled={isLoading} type="submit">
                {buttonName}
              </button>
            </div>
          </div>
        </form>
        {error && (
          <div id="auth-error-message">
            <h6>{error}</h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
