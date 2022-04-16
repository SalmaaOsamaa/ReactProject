import React, { useState, useEffect } from 'react'
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import logo from '../assets/images/logo.jpeg'
import TextField from './TextField';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';



const UserSignup = () => {
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
  task: Yup.string().notRequired()
  });
  const navigate = useNavigate();
  const [error, setError] = useState('')
  const [tasks, setTasks] = useState([])
const [chosenRole, setChosenRole] = useState('')
const changeHandler = (e) => {
  setChosenRole(e.target.value)
}
useEffect(()=>{
  axios.get("http://localhost:4000/tasks").then((res)=>{

    setTasks(res.data);
  })
})

   
    return (
      <>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            Zip: '',
            role: '',
            task:''
          }}
          validationSchema={validate}
          onSubmit={values => {
            console.log(values);
            axios({
              method: "POST",
              data: values,
              withCredentials: true,
              url: "http://localhost:4000/register"
            }).then((res) => {
              if (res.data.msg !== "User Created" && res.data.msg!== "Tasker Created") {
                setError(res.data.msg);
              } else {
                console.log(res);
                setError('');
                localStorage.setItem('userData', JSON.stringify(res.data.user || res.data.Tasker))
                navigate('/Profile', { replace: true })
              }
            });
          }}

        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <div className='mt-3 form-background'>
              <div className="form-Con">
                <form className='d-flex flex-column justify-content-evenly align-item-center formSignUp' onSubmit={handleSubmit}>
                  <img className='logo-chooser' src={logo} alt="logo" />
                  {error ?
                    <div className="alert alert-danger alertt" role="alert">
                      {error}
                    </div> : ''
                  }
                  <TextField label=" Name" name="name" type="text" />
                  <TextField label="Email" name="email" type="email" />
                  <TextField label="password" name="password" type="password" />
                  <TextField label="confirm" name="confirmPassword" type="password" />
                  <TextField label="Zip" name="Zip" type="text" />
                  <div className='my-2'>
                    <label className="text-gray-500 font-bold m-2">
                      <Field
                        onChange={(e) => {
                          handleChange(e)
                          changeHandler(e)
                        }}
                        name="role"
                        value="Tasker"
                        className="mr-2 leading-tight m-1 form-check-input"
                        type="radio"

                      />
                      <span className="text-sm">Tasker</span>
                    </label>
                    <label className="text-gray-500 font-bold m-2">
                      <Field
                        onChange={(e) => {
                          handleChange(e)
                          changeHandler(e)
                        }}
                        name="role"
                        value="Customer"
                        className="mr-2 leading-tight m-1 form-check-input"
                        type="radio"
                      />
                      <span class="text-sm">Customer</span>
                    </label>
                    {chosenRole == 'Tasker' ? <select onChange={handleChange} name='task' class="form-select" aria-label="Default select example">
                      <option value="">Choose Task</option>
                      {tasks.map(task =>
                        <option value={task._id}>{task.name}</option>
                      )
                      }
                    </select> : null}
                  </div>
                  <button className='main-Butt w-100'>Create Account</button>
                  <Link to="/SignUp" className='mx-2'>
                    If You Already have an Account !
                  </Link>
                </form>
              </div>
            </div>
          )}

        </Formik>
      </>
    )
  }
export default UserSignup
