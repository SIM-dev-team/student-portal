import React, {Component} from 'react';
import {Modal, Button, Form, Col, Row} from 'react-bootstrap';

export class EditModal extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Edit Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className = "container">
                    <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                        Email
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="email" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Phone
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="Text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Address
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Index No</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Course</Form.Label>
                        <Form.Control as="select">
                            <option>Information Systems</option>
                            <option>Computer Science</option>
                            <option>Software Engineering</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="User Profile" />
                        <Form.Text id="passwordHelpBlock" muted>
                            Must be in png/jpeg format
                        </Form.Text>
                    </Form.Group>
                    
                    </Form>
                    
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div class="row">
                    <div className="col-sm-6 text-left">
                    <Button className="btn btn-primary">Update</Button>
                    </div>
                    <div className="col-sm-6 text-right">
                    <Button className="btn btn-secondary" onClick={this.props.onHide} >Close</Button>
                    </div>
                </div>
            </Modal.Footer>
            </Modal>
        );
    }
}