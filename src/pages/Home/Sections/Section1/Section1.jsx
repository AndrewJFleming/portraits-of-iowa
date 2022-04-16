import React, { useState } from "react";

import UploadForm from "./UploadForm/UploadForm";
import { Container, Row, Col } from "react-bootstrap";
import "./Section1.css";

const Section1 = ({ section1, user, deadline, isPassedDeadline }) => {
  return (
    <div id="first" className="section">
      <Container>
        <Row>
          <Col md="12">
            <h2>Photos of Cedar Rapids Wanted</h2>
            <p>
              In September of 2020, artist John Fleming and the City of Cedar
              Rapids will install{" "}
              <span className="italicBold">Portraits of Iowa</span> inside the
              Cedar Rapids U.S. Cellular Center. We are looking for photos to be
              suspended within the sculpture, photos that capture the essence of
              Cedar Rapids and surrounding communities.
            </p>
            <p>
              Please scroll down for more information about the sculpture and
              how to participate as a photographer.
            </p>
          </Col>
          <Col xs="12" md="12" lg="6" id="upload-form-col">
            <h2>How to submit</h2>
            <h4>You may submit up to 5 photos, here in this green box.</h4>
            <p>
              Upload color jpg’s, 2MB max per image. Please, no closeups of
              people. If we receive an over-abundance of images, we apologize in
              advance if one of yours is not selected.
            </p>
            {!isPassedDeadline && (
              <p style={{ color: "red" }}>
                Submissions will be accepted until{" "}
                <span style={{ fontWeight: 700 }}>
                  {deadline.toDateString()}
                </span>
                .
              </p>
            )}
            <UploadForm
              user={user}
              isPassedDeadline={isPassedDeadline}
              deadline={deadline}
            />
          </Col>
          <Col xs="12" md="12" lg="6" className="d-flex" id="figures-col">
            {section1?.images.map((item) => (
              <figure key={item.id}>
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
