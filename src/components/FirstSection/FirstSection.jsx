import React, { Component } from 'react';
import { Form, Container, Row, Col, Image, Button } from 'react-bootstrap';
import firebase from '../../firebase.js';
import './FirstSection.css';

export default class FirstSection extends Component {

handleChange(event) {
    const file = Array.from(event.target.files);
    this.setState({ file });
}

fileuploadHandler = () => {
    const storageRef = firebase.storage().ref();
    this.state.file.forEach((file) => {
      storageRef
          .child(`images/${file.name}`)
          .put(file).then((snapshot) => {
      })
    });
    }

    render() {
        const contactForm = (
            this.props.user ?
                <Form.Group className="p-3">
                    <Form.File className="font-weight-bold" id="file" label="Choose images for upload" onChange={this.handleChange.bind(this)} required multiple />
                    <div className="mt-2">
                        <Button onClick={this.fileuploadHandler}>Upload</Button>
                    </div>
                </Form.Group>
                :
                <div>
                    <p>You must be logged in to submit images to the project.</p>
                    <Button onClick={this.props.login}>Log In</Button>    
                </div>
        )

        return (
            <Container id="first" className="page">
                <Row style={{padding: "70px 10px"}}>
                    <Col md={12}>
                        <h2>Photos of Cedar Rapids Wanted</h2>
                        <p> In September of 2020, artist John Fleming and the City of Cedar Rapids will install <span
                                className="font-weight-bold font-italic">Portraits of
                                Iowa</span> inside the Cedar Rapids U.S. Cellular Center. We are looking for photos to be suspended within the sculpture, photos that capture the essence of Cedar Rapids and surrounding communities.</p>
                        <p>Please scroll down for more information about the sculpture and how to participate as a photographer.</p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h2>How to submit</h2>
                        <h5>You may submit up to 5 photos, here in this green box.</h5>
                        <p>Upload color jpg’s, 2MB max per image. Please, no closeups of people. If we receive an over-abundance of images, we apologize in advance if one of yours is not selected.</p>
                        <p className="text-danger"> Submissions closed on July 10th, 2020.</p>
                        <Form id="contactForm">
                            {contactForm}
                        </Form>
                    </Col>
                    <Col sm={12} md={8}>
                        <Row>
                            <Col md={6}>
                                <div>
                                    <Image src="assets/Fleming-1.jpg" style={{maxWidth: "100%"}}/>
                                </div>
                                <figcaption><span
                                    className="font-italic">Portraits of Iowa</span> at night
                                </figcaption>
                            </Col>
                            <Col md={6}>
                                <div>
                                    <Image src="assets/Lantern-view-3.jpg" style={{maxWidth: "100%"}}/>
                                </div>
                                <figcaption>Photos suspended inside the Lantern</figcaption>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}