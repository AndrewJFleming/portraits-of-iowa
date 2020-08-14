import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SecondSection.css';

export default class SecondSection extends Component {


    render() {
        return (
            <Container id="second" style={{backgroundColor: "#ddd"}} className="page">
                <Row style={{padding: "70px 10px"}}>
                    <Col sm={12} md={4} xl={5}>
                            <div>
                                <img src="assets/Lighting.jpg" style={{maxWidth: "100%"}}/>
                            </div>
                            <figcaption>
                                In the final installation, the portraits may rotate around their suspension cables. At night, the whole array will be illuminated by a color-changing LED lighting system.
                            </figcaption>
                    </Col>
                    <Col sm={12} md={8} xl={7}>
                        <div id="secondSection-r">
                            <img className="d-none d-lg-block" src="assets/p2_img2.jpg"/>
                            <img src="assets/p2_img3.jpg"/>
                            <img src="assets/p2_img4.jpg"/>
                        </div>
                        <figcaption>
                            The suspended sculpture will be composed of 300 dichroic prisms and 340 <span class="font-weight-bold font-italic">portraits of Iowa</span> printed on a acrylic sheets.
                        </figcaption>
                    </Col>
                </Row>
            </Container>
        );
    }
}