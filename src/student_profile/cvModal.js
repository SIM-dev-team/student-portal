import React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';

export class CVModal extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Upload Your CVs here...
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.File id="formcheck-api-regular">
                        <Form.File.Label>Submit your cv in <b>pdf</b> format</Form.File.Label>
                        <Form.File.Input />
                    </Form.File>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <div class="row">
                    <div className="col-sm-6 text-left">
                    <Button className="btn btn-primary">Submit</Button>
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