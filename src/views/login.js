import React , {useState} from 'react';
import '../App.css';
import { useHistory , Link } from "react-router-dom";
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useFormik} from 'formik';
import axios from 'axios';

import auth from '../auth';

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
    const history = useHistory();

    const [error, setError] = useState(null);

    const submitData = (e) =>{
        e.preventDefault();
        console.log(formik.values);
        axios
          .post('http://localhost:5000/student/login', formik.values)
          .then(res => {
            console.log(res.data);
            if(res.data === 'no user data found'){
                setError('no user data found')
            }else if(res.data ==='incorrect password'){
                setError('incorrect password')
            }else if(res.data ==='not verified'){
                setError('not verified account')
            }
            else{
                localStorage.setItem('StudentToken' , res.data);
                auth.setAuthenticatedTrue();
                history.push('/');
            }
            
          })
          .catch(err => {
              setError('something went wrong')
              console.log(err.data);
          });
    }

    return (
        <React.Fragment>
            <div className="login-page">
                <div className="login-form">
                    <div className="login-header">Login</div>
                    <div className="login-container">
                    <Form onSubmit={submitData}>
                    <Form.Group>
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

                    <Form.Group>
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
                    <Form.Group>
                    <small className="text-danger">{error}</small>
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