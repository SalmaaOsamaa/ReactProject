import React, { useState } from 'react'
import logo from '../assets/images/logo.jpeg'
import { Formik} from 'formik';
import * as Yup from 'yup';
import '../assets/css/Login.css'
import TextField from '../Components/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Login() {
  
  const validateForm = Yup.object({
  email: Yup.string()
  .email('email is invalid')
  .required('Email is required'),
  password: Yup.string()
  .required('Password is required')
})
const navigate = useNavigate();
const [error, setError] = useState('')
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

      }).then((res)=>{
        if(res.data.msg !== "Successfully Authenticated"){
          setError(res.data.msg);
        }else {
          console.log(res);
          setError('');
          localStorage.setItem('userData' , JSON.stringify(res.data.user))
          navigate('/Profile' , {replace : true})
        }
      } );
    }}
    >
      {formik=>(
        <div className='form-background'>
        <div className="form-login-Con">
      <form className='formLogin d-flex flex-column justify-content-evenly align-item-center' onSubmit={formik.handleSubmit}>
      <img className='logo-chooser m-auto' src={logo} alt="logo"/>
      {error ? 
   <div className="alert alert-danger alertt" role="alert">
   {error}
 </div> : ''
    }
        <TextField label="Email" name="email" type="email" />
        <TextField label="password" name="password" type="password"/>
        <button className='main-Butt w-100' >Login</button>
        <Link to="/SignUp">
          If You Don't have an Account !
        </Link>
      </form>
      
  </div>
  </div>
      )}
      

    </Formik>
    </>
  )
}

export default Login
