import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


function ForgotPassword() {

    return (
        <React.Fragment>
            <div className="login-page">
                <div className="login-form">
                    <div className="login-header">Forgot Password</div>
                    <div className="login-container">
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Registration No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Registration number" />
                    </Form.Group>
                    <Form.Group style={{float:'right'}}>
                        <Link to="/login">Back to login</Link>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{marginBottom:'20px',padding:'3px 30px'}}> 
                        Confirm
                    </Button>
                    </Form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ForgotPassword