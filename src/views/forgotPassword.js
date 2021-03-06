import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useFormik} from 'formik';

const initialValues = {
    reg_no :''
}

const onSubmit = values =>{
    console.log(values);
}

const validate = values =>{
    let errors = {}
    if(!values.reg_no){
        errors.reg_no = 'registration number is required'
    }else if(values.reg_no.toString().length < 9){
        errors.reg_no = 'invalid registration number format'
    }
    return errors;
}


function ForgotPassword() {

    const formik = useFormik({initialValues,onSubmit,validate});

    return (
        <React.Fragment>
            <div className="login-page">
                <div className="login-form">
                    <div className="login-header">Forgot Password</div>
                    <div className="login-container">
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Registration No</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Enter Registration number"
                        id="reg_no"
                        name="reg_no"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.reg_no}
                        />
                    {formik.errors.reg_no && formik.touched.reg_no ? <small className='text-danger'>{formik.errors.reg_no}</small> : ''}
                    </Form.Group>
                    <Form.Group style={{float:'right'}}>
                        <Link to="/login">Back to login</Link>
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    type="submit" 
                    style={{marginBottom:'20px',padding:'3px 30px'}}
                    disabled={formik.errors.reg_no || !formik.touched.reg_no}> 
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