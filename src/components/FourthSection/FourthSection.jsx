import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FourthSection.css';

export default class FourthSection extends Component {

    render() {
        return (
            <Container id="fourth" style={{backgroundColor: "#ddd"}} className="page">
                <Row style={{padding: "70px 10px"}}>
                    <Col sm={12} md={4}>
                        <Container>
                        <h3>Questions?</h3>
                        <p>
                            Please contact Sylvia Brueckert:<br/>
                            Planner, Community Development and Planning Department of the City of Cedar Rapids<br/>
                        </p>
                        <p>
                            Office: <a href="tel:319-123-4567">319-123-4567</a><br/>
                            Email: <a href="mailto:j.doe@cedar-rapids.org">j.doe@cedar-rapids.org</a>
                        </p>
                        </Container>
                        <Container>
                            <h3>Gallery exhibition</h3>
                            <p>
                                In addition to our installation inside the U.S. Cellular Center, we’d like to assemble a gallery show with all 340 portraits.<br/><br/>
                                At the very least, considering the current times, we’ll put together a virtual exhibition online.
                            </p><br/>
                        </Container>
                        <Container>
                        <h3>About the Artist</h3>
                        <p>
                            John Fleming is a nationally recognized artist living in Seattle,
                            Washington. He enjoys working closely with local communities
                            to create site-specific installations that evoke a sense of place.<br/>
                            To see more of his work, please visit <a href="http://www.johnflemingartist.com/wp">www.johnflemingartist.com</a>
                        </p>
                        </Container>
                    </Col>
                    <Col sm={12} md={8}>
                        <figure style={{backgroundColor: "#999"}}>
                            <div className="fourthSection-r">
                                <img src="assets/trans1.jpg"/>
                                <img className="d-none d-sm-block" src="assets/trans2.jpg"/>
                                <img className="d-none d-sm-block" src="assets/trans3.jpg"/>
                            </div>
                            <div className="fourthSection-r">
                                <img className="d-none d-sm-block" src="assets/trans4.jpg"/>
                                <img src="assets/trans5.jpg"/>
                            </div>
                            <div className="fourthSection-r">
                                <img src="assets/trans6.jpg"/>
                                <img className="d-none d-sm-block" src="assets/trans7.jpg"/>
                            </div>
                        </figure>
                        <p>
                            <span style={{fontSize: "1.2em"}}>Don’t worry about formatting</span><br/>
                            Once we choose all the images for our collection, we will crop and adjust them so they work
                            together in the 36-foot-tall sculpture. Each photo will be printed onto clear acrylic sheets
                            varying in size from 8 to 18 inches.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}