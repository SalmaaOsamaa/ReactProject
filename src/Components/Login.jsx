import React from 'react'
import logo from '../assets/images/Logo1.jpeg'
import { Formik} from 'formik';
import * as Yup from 'yup';
import '../assets/css/Login.css'
import TextField from '../Components/TextField';
import axios from 'axios';

function Login() {
  
  const validateForm = Yup.object({
  email: Yup.string()
  .email('email is invalid')
  .required('Email is required'),
  password: Yup.string()
  .required('Password is required')
})
  
  return (
    <>
    <Formik 
    initialValues={{
      email: '',
      password: ''
    }}
    validationSchema={validateForm}
    onSubmit={values=>{
      console.log(values);
      axios({
        method:"POST",
        data:values,
        withCredentials:true,
        url:"http://localhost:4000/login",

      }).then((res)=> console.log(res) );
    }}
    >
      {formik=>(
        <div className='home'>
        <div className="form-Con h-50">
    <img className='logo-chooser' src={logo} alt="logo"/>
      <form className='w-50 d-flex flex-column justify-content-evenly align-item-center' onSubmit={formik.handleSubmit}>
        <TextField label="Email" name="email" type="email" />
        <TextField label="password" name="password" type="password"/>
        <small><a href="/">Forget Password ? </a></small>
        <button className='main-Butt w-100' >Login</button>
        <p className='py-3'>Signed up with Facebook or Google ?<a href="/"> Tap here to create a password</a>.</p>
      </form>
      
  </div>
  </div>
      )}
      

    </Formik>
    </>
  )
}

export default Login
