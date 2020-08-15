import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


function ResetPassword() {

    return (
        <React.Fragment>
            <div className="login-page">
                <div className="login-form">
                    <div className="login-header">Set Password</div>
                    <div className="login-container">
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Registration No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Registration number" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group style={{float:'right'}}>
                        <Link to="/forgotPassword">forgot password</Link>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{marginBottom:'20px',padding:'3px 30px'}}> 
                        Login
                    </Button>
                    </Form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ResetPassword;