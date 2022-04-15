import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./Section2.css";

const Section2 = ({ section2 }) => {
  return (
    <div id="second" className="section">
      <Container>
        <Row>
          <Col xs="12" lg="4" className="left-column">
            <Row>
              <Col md="8" lg="12">
                <img
                  src={section2?.images[0].src}
                  alt={section2?.images[0].alt}
                />
              </Col>
              <Col md="4" lg="12">
                <p className="graphic-caption">
                  In the final installation, the portraits may rotate around
                  their suspension cables. At night, the whole array will be
                  illuminated by a color-changing LED lighting system.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs="12" lg="8" className="right-column">
            <div className="d-flex justify-content-between">
              {section2?.images.slice(1, 4).map((image) => (
                <img
                  key={image.id}
                  className={`${image.hideImage ? "hideImage" : ""}`}
                  src={image.src}
                  alt={image.alt}
                />
              ))}
            </div>
            <p className="graphic-caption">
              The suspended sculpture will be composed of 300 dichroic prisms
              and 340 <span className="italicBold">portraits of Iowa</span>{" "}
              printed on a acrylic sheets.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
