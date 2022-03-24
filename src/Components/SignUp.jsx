import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/images/logo.jpeg'

import TextField from './TextField';
import axios from 'axios';
import { useNavigate } from 'react-router';



const UserSignup=()=> {
const validate = Yup.object({
  name: Yup.string()
  .max(15 , "Must be 15 characters")
  .min(2, 'Must be 2 or more characters')
  .required('Required Field'),
email: Yup.string()
.email('email is invalid')
.required('Email is required'),
password: Yup.string()
.min(6, 'Password must be atleast 6 charcaters')
.required('Password is required'),
confirmPassword:Yup.string()
.oneOf([Yup.ref('password'),null],'password is not matching')
.required('confirming your password is required'),
Zip:Yup.string()
.required('Required Field'),
});
const navigate = useNavigate();

return (
    <>
    <Formik 
    initialValues={{
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
                Zip: ''
    }}
    validationSchema={validate}
    onSubmit={values=>{
      console.log(values);
      navigate("/profile", { replace: true });
      axios({
        method:"POST",
        data:values,
        withCredentials: true,
        url: "http://localhost:4000/register"
      }).then((res)=>console.log(res));
    }}
    
    >
      { formik =>(
        <div className='home form-background'>
        <div className="form-Con h-75 my-5">
  <img className='logo-chooser' src={logo} alt="logo"/>
  <form className='w-50 d-flex flex-column justify-content-evenly align-item-center' onSubmit={formik.handleSubmit}>
  <TextField label=" Name" name="name" type="text"/>
  
  <TextField label="Email" name="email" type="email"/>
  <TextField label="password" name="password" type="password"/>
  <TextField label="confirm" name="confirmPassword" type="password"/>
  <TextField label="Zip" name="Zip" type="text"/>
   
    <small>By clicking below and creating an account, I agree to Sahla's <a href="http://">Terms of Service</a> and <a href="/">Privacy Policy</a>.</small>
    <button className='main-Butt w-100'>Create Account</button>
  </form>
</div>
</div>
      )}

    </Formik>
    </>
)
}

export default UserSignup
