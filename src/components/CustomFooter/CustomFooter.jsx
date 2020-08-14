import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './CustomFooter.css';

export default class CustomFooter extends Component {

  render() {
    return (
      <div className="main-footer">
          <Row className="justify-content-md-around">
            <Col className="text-center">
              <h4>John Fleming <span className="colon">:</span></h4>
              <ul className="list-unstyled">
                <li><a className="link-unstyled" href="http://www.johnflemingartist.com/wp">www.johnflemingartist.com</a></li>
                <li>Email: <a className="link-unstyled" href="mailto:johnfleming@seanet.com">johnfleming@seanet.com</a></li>
              </ul>
            </Col>
            <Col className="text-center">
              <h5>Sylvia Brueckert <span className="colon">:</span></h5>
              <ul className="list-unstyled">
                <li>Office: <a className="link-unstyled" href="tel:319-123-4567">319-123-4567</a></li>
                <li>Email: <a className="link-unstyled" href="mailto:j.doe@cedar-rapids.org">j.doe@cedar-rapids.org</a></li>
              </ul>
            </Col>
          </Row>
          <hr className="hr"/>
          <Row className="justify-content-md-center text-center">
            <Col md="auto">
              <p className="mt-4">
                &copy;{new Date().getFullYear()} John Fleming | All rights
              </p>
            </Col>
          </Row>
      </div>
    );
  }
}