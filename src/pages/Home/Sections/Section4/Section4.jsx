import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import arrow from "../../../../assets/images/magenta-arrow.svg";
import "./Section4.css";

const Section4 = ({ section4 }) => {
  return (
    <div id="fourth" className="section">
      <Container>
        <Row>
          <Col xs="12" md="12" lg="3" xl="4">
            <h3>Questions?</h3>
            <p>
              Please contact <em>Sylvia Brueckert</em>:
              <br />
              Planner, Community Development & Planning Department of the City
              of Cedar Rapids
            </p>
            <ul id="contact-details">
              <li>
                Office: <a href="tel:319-286-5428">319-286-5428</a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:s.brueckert@cedar-rapids.org">
                  s.brueckert@cedar-rapids.org
                </a>
              </li>
            </ul>
            <h3>Gallery exhibition</h3>
            <p>
              In addition to our installation inside the U.S. Cellular Center,
              we’d like to assemble a gallery show with all 340 portraits.
            </p>
            <p>
              At the very least, considering the current times, we’ll put
              together a virtual exhibition online.
            </p>
            <h3>About the Artist</h3>
            <p>
              John Fleming is a nationally recognized artist living in Seattle,
              Washington. He enjoys working closely with local communities to
              create site-specific installations that evoke a sense of place.
            </p>
            <p>
              To see more of his work, please visit{" "}
              <a href="http://www.johnflemingartist.com/wp">
                www.johnflemingartist.com
              </a>
            </p>
          </Col>
          <Col xs="12" md="12" lg="9" xl="8">
            <div className="gallery">
              {section4?.rows.map((row) => (
                <div className="gallery-flex" key={row.id}>
                  {row.pairs.map((pair) => (
                    <div
                      className={`${
                        pair.hidePair ? "hideImage" : ""
                      } gallery-flex-inner`}
                      key={pair.id}
                    >
                      <img src={pair.images[0].src} alt={pair.images[0].alt} />
                      <img
                        className="magenta-arrow"
                        src={arrow}
                        alt="Right direction magenta arrow"
                      />
                      <img src={pair.images[1].src} alt={pair.images[0].alt} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <h5 className="pt-2" style={{ fontSize: "1.2em" }}>
              Don’t worry about formatting
            </h5>
            <p>
              Once we choose all the images for our collection, we will crop and
              adjust them so they work together in the 36-foot-tall sculpture.
              Each photo will be printed onto clear acrylic sheets varying in
              size from 8 to 18 inches.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section4;
