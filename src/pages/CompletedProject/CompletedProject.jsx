import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

import { Container, Row, Col } from "react-bootstrap";
import authBGImage from "../../assets/images/authBG.jpg";
import { completedProjectData } from "../../data";
import "./CompletedProject.css";

const CompletedProject = () => {
  const location = useLocation();
  //Render page at 0,0 scroll position after page redirects (login/register)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      className="section"
      id="completed-project-page-wrapper"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${authBGImage})`,
        backgroundPosition: "center top",
      }}
    >
      <Container>
        <h2>Completed Project</h2>
        {completedProjectData.rows.map((row) => (
          <React.Fragment>
            <Row>
              <Col>
                <h4>{row.title}</h4>
                <p>{row.paragraph}</p>
              </Col>
            </Row>
            <Row className="images-row">
              {row.images.map((completedProjectImage) => (
                <Col md="6" lg="6" className="row-paragraph-col">
                  <div className="completed-project-image-wrapper">
                    <img
                      src={completedProjectImage.src}
                      alt={completedProjectImage.caption}
                    />
                    <p>{completedProjectImage.caption}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </React.Fragment>
        ))}
        <Row>
          <Col>
            <h4>Special Thanks</h4>
            <p>
              Thank you to the Cedar Rapids City Development Committee and Cedar
              Rapids Visual Arts Commission for making the project a reality.
              Special thanks to the members of the community who participated in
              the photo submission process.
            </p>
            <h4>Learn More</h4>
            <p>
              To learn more about the Portaits of Iowa installation, check out
              this{" "}
              <a href="https://segd.org/portraits-iowa-%E2%80%93-community-light-fall">
                article
              </a>{" "}
              at The Society for Experiential Graphic Design's website.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CompletedProject;
