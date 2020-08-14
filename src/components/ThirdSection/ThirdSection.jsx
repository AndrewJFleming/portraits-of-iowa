import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './ThirdSection.css';

export default class ThirdSection extends Component {

    render() {
        return (
            <Container id="third" className="page">
                <Row style={{padding: "70px 10px"}}>
                    <Col sm={12} md={4}>
                        <Image style={{maxWidth: "100%"}} src="assets/upper level.jpg"/>
                        <figcaption>
                            The sculpture will feature 340 photographs of Cedar Rapids and surrounding communities.
                        </figcaption>
                    </Col>
                    <Col sm={12} md={8}>
                        <p>We are looking for photographs that offer a local’s perspective— anything that might suggest the essence of Cedar Rapids, or of Iowa.</p>
                        <p>Rather than the overly beautiful tourist photos that fill brochures and marketing materials, we’re looking for everyday, ordinary, real places and things.</p>
                            <div className="thirdSection-r">
                                <img src="assets/IMG_7209.jpg"/>
                                <img src="assets/IMG_7210.jpg"/>
                                <img src="assets/IMG_7214.jpg"/>
                                <img className="d-none d-sm-block" src="assets/IMG_7208.jpg"/>
                                <img className="d-none d-sm-block" src="assets/IMG_7272.jpg"/>
                            </div>
                            <div className="thirdSection-r">
                                <img src="assets/IMG_7309.jpg"/>
                                <img src="assets/IMG_7310.jpg"/>
                                <img src="assets/IMG_7247.jpg"/>
                                <img src="assets/IMG_7220.jpg"/>
                                <img className="d-none d-sm-block" src="assets/IMG_7253.jpg"/>
                            </div>
                            <div className="thirdSection-r">
                                <img src="assets/IMG_7268.jpg"/>
                                <img src="assets/IMG_7254.jpg"/>
                                <img src="assets/IMG_7304.jpg"/>
                                <img className="d-none d-sm-block" src="assets/IMG_7274.jpg"/>
                            </div>
                        <p>You don’t need to be a professional photographer or own a special camera. A smartphone will work just fine, perhaps even better.</p>
                        <p>Go for a walk in your neighborhood and start taking pictures!</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}