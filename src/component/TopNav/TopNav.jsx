import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Container } from "react-bootstrap";
import "./TopNav.css";

const TopNav = ({ auth, signOut, currentUser }) => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <header>
      <Container>
        <div className="header-content">
          <div
            className={`header-content-left ${
              !currentUser && "unauthenticated"
            }`}
          >
            <HashLink id="branding" to="/#first">
              Portraits of Iowa
            </HashLink>
            <ul className="links-list">
              <li className="linkItem">
                <HashLink to="/#second">
                  <span className="hideText">about </span>the sculpture
                </HashLink>
              </li>
              <li className="linkItem">
                <HashLink to="/#third">
                  <span className="hideText">about </span>the photos
                </HashLink>
              </li>
              <li className="linkItem">
                <HashLink to="/#fourth">
                  more info<span className="hideTextAlt"> & questions</span>
                </HashLink>
              </li>
              <li className="linkItem">
                <Link className="completed-project" to="/completed-project">
                  completed project
                </Link>
              </li>
            </ul>
          </div>

          <ul className="buttons-wrapper">
            {currentUser ? (
              <li className="linkItem">
                <button id="logout-button" onClick={handleLogout}>
                  LOGOUT
                </button>
              </li>
            ) : (
              <React.Fragment>
                <li className="linkItem">
                  <Link to="/login">
                    <button>LOGIN</button>
                  </Link>
                </li>
                <li className="linkItem">
                  <Link to="/register">
                    <button>REGISTER</button>
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default TopNav;
