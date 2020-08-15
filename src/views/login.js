import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useFormik} from 'formik';

const initialValues = {
    reg_no :'',
    password :''
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
    if(!values.password){
        errors.password = 'password is required'
    }else if(values.password.toString().length < 6){
        errors.password = 'invalid password'
    }
    return errors;
}

function Login() {

    const formik = useFormik({initialValues,onSubmit,validate});

    return (
        <React.Fragment>
            <div className="login-page">
                <div className="login-form">
                    <div className="login-header">Login</div>
                    <div className="login-container">
                    <Form onSubmit={formik.handleSubmit}>
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

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}/>
                        {formik.errors.password && formik.touched.password ? <small className='text-danger'>{formik.errors.password}</small> : ''}
                    </Form.Group>
                    <Form.Group style={{float:'right'}}>
                        <Link to="/forgotPassword">forgot password</Link>
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    type="submit" 
                    style={{marginBottom:'20px',padding:'3px 30px'}}
                    disabled={
                        formik.errors.reg_no ||
                        formik.errors.password ||
                        !formik.touched.reg_no ||
                        !formik.touched.password
                    }> 
                        Login
                    </Button>
                    </Form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login