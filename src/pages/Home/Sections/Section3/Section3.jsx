import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./Section3.css";

const Section3 = ({ section3 }) => {
  return (
    <div id="third" className="section">
      <Container>
        <Row>
          <Col xs="12" lg="4">
            <figure>
              <img
                src={section3?.images[0].src}
                alt={section3?.images[0].alt}
              />
              <figcaption>
                The sculpture will feature 340 photographs of Cedar Rapids and
                surrounding communities.
              </figcaption>
            </figure>
          </Col>
          <Col xs="12" lg="8">
            <p>
              We are looking for photographs that offer a local’s perspective—
              anything that might suggest the essence of Cedar Rapids, or of
              Iowa.
            </p>
            <p>
              Rather than the overly beautiful tourist photos that fill
              brochures and marketing materials, we’re looking for everyday,
              ordinary, real places and things.
            </p>
            <div className="gallery">
              <div className="d-flex justify-content-between">
                {section3?.images.slice(1, 6).map((image) => (
                  <img
                    key={image.id}
                    className={`${image.hideImage ? "hideImage" : ""}`}
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </div>
              <div className="d-flex justify-content-between">
                {section3?.images.slice(6, 11).map((image) => (
                  <img
                    key={image.id}
                    className={`${image.hideImage ? "hideImage" : ""}`}
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </div>
              <div className="d-flex justify-content-between">
                {section3?.images.slice(11, 16).map((image) => (
                  <img
                    key={image.id}
                    className={`${image.hideImage ? "hideImage" : ""}`}
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </div>
            </div>
            <p className="graphic-caption">
              You don’t need to be a professional photographer or own a special
              camera. A smartphone will work just fine, perhaps even better.
            </p>
            <p>Go for a walk in your neighborhood and start taking pictures!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section3;
