import React, { useState } from 'react'
import logo from '../assets/images/logo.jpeg'
import { Field, Formik} from 'formik';
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
      password: '',
      role:''
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
        if(!res.data.msg){
          console.log(res);
          setError('');
          localStorage.setItem('userData' , JSON.stringify(res.data))
          navigate('/Profile' , {replace : true})
        }else {
          console.log(res , values);
          setError(res.data.msg);
        }
      } ).catch((error) => console.log(error.message));
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
      {/* <div className='my-2'>
  <label className="text-gray-500 font-bold m-2">
  <Field
    name="role"
    value="Tasker"
    className="mr-2 leading-tight m-1 form-check-input"
    type="radio"
  />
  <span className="text-sm">Tasker</span>
</label>
<label className="text-gray-500 font-bold m-2">
  <Field
    name="role"
    value="Customer"
    className="mr-2 leading-tight m-1 form-check-input"
    type="radio"
  />
  <span className="text-sm">Customer</span>
</label>
</div> */}
        <TextField label="Email" name="email" type="email" />
        <TextField label="Password" name="password" type="password"/>
        <br />
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
