import React , {useState} from 'react';
import '../App.css';
import {Form} from 'react-bootstrap';
import { useHistory , Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
import {useFormik} from 'formik';
import axios from 'axios';

const initialValues = {
    password :'',
    repassword :''
}

const validate = values =>{
    let errors = {}
    if(!values.password){
        errors.password = 'password is required'
    }else if(values.password.toString().length < 6){
        errors.password = 'invalid password format ! minimum password length is 6 characters'
    }
    if(!values.repassword){
        errors.repassword = 'please re enter password'
    }else if(values.repassword.toString() !== values.password.toString()){
        errors.repassword = `Passwords don't match`
    }
    return errors;
}
const onSubmit = values =>{
    console.log(values);
}


function ResetPassword({match}) {

    const formik = useFormik({initialValues,onSubmit,validate});
    const [error, setError] = useState(null);
    const history = useHistory();

    const submitData = (e) =>{
        e.preventDefault();
        const data = { password : formik.values.password , token : match.params.token };
        // console.log(data);
        axios
          .post('http://localhost:5000/student/setPassword', data)
          .then(res => {
            if(res.data === 'password set successfully'){
                history.push('/login');
            }else{
                setError('something went wrong')
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
                    <div className="login-header">Set Password</div>
                    <div className="login-container">
                    <Form onSubmit={submitData}>
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
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Retype Password" 
                        id="repassword"
                        name="repassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.repassword}/>
                        {formik.errors.repassword && formik.touched.repassword ? <small className='text-danger'>{formik.errors.repassword}</small> : ''}
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    type="submit" 
                    style={{marginBottom:'20px',padding:'3px 30px'}}
                    disabled={formik.errors.repassword || formik.errors.password || !formik.touched.password || !formik.touched.repassword}
                    > 
                        Confirm
                    </Button>
                    <Form.Group>
                    <small className="text-danger">{error}</small>
                    </Form.Group>
                    </Form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ResetPassword;