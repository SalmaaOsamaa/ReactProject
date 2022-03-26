import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Field, Formik } from 'formik';
import PayPal from './PayPal';

import * as Yup from 'yup';
const TaskRequest = (props) => {
  const [tasks, setTasks] = useState([])
  const [workareas, setAdresses] = useState([])
  const [taskers, setTaskers] = useState([])
  const [total, setTotal] = useState(0)
  

  useEffect(() => {
    Axios.get("http://localhost:4000/tasks").then((res) => {

      setTasks(res.data);
    })
    Axios.get("http://localhost:4000/workAreas").then((res) => {

      setAdresses(res.data);

    })
    Axios.get("http://localhost:4000/taskers").then((res) => {
      setTaskers(res.data.data);

    })
    

  }, [])
  const taskerSelectHandler = (taskerId) => {
    const tasker = taskers.find(t => t._id == taskerId)
    setTaskers(taskers)
  }
  const taskSelectHandler = (taskId) => {
    const { avgPrice } = tasks.find(t => t._id == taskId)
    setTotal(avgPrice)
  }
  return (
    <>

      <Formik

        initialValues={{
          task: '',
          description: '',
          workarea: '',
          city: '',
          taskappointment: '',
          tasker: '',
          paymentmethod:''
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log("submit", data);
          setSubmitting(false);
          resetForm();
          Axios({
            method:"POST",
            data:data,
            withCredentials: true,
            url: "http://localhost:4000/createTaskrequests"
          }).then((res)=>console.log(res));
        }}
      >
        {
          ({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <select name='task' class="form-select m-3" aria-label="Default select example" onChange={(e) => {
                handleChange(e)
                taskSelectHandler(e.target.value)
              }} onBlur={handleBlur} value={values.task}>
                 <option value="" disabled selected>Select your Task</option>

                {tasks.map(task =>
                  <option value={task._id}>{task.name}</option>
                )
                }

              </select>
              <label for="exampleFormControlTextarea1">Description of your task requirments:</label>
              <Field
                name='description'
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                class=' m-3'

              />
              <select name='workarea' class="form-select m-3" aria-label="Default select example" onChange={handleChange} onBlur={handleBlur} value={values.workarea} placeholder='Enter your zone'>
              <option value="" disabled selected>Select your Area</option>

                {workareas.map(workarea =>
                  <option value={workarea._id}>{workarea.name}</option>
                )}

              </select>
              <select name='city' class="form-select m-3" aria-label="Default select example" onChange={handleChange} onBlur={handleBlur} value={values.city} placeholder='Enter your city'>
                {workareas?.find(el => el._id == values.workarea)?.city?.map(city =>
                  <option value={city}>{city}</option>
                )}
              </select>



              <label for="exampleFormControlTextarea1">pick (date and time) for your task: </label>
              <input type="datetime-local" name="taskappointment" onChange={handleChange} onBlur={handleBlur} value={values.taskappointment} />

              <select name='tasker' class="form-select m-3"  aria-label="Default select example" onChange={(e) => {
                handleChange(e)
                taskerSelectHandler(e.target.value)
              }} onBlur={handleBlur} value={values.tasker} placeholder='Enter your zone'>
                {taskers.map(tasker =>
                  <option value={tasker._id}>Name: {tasker.name}, Skills: {tasker.Skills.join(', ')}</option>
                )}

              </select>
              {taskers?.img?<img className='m-3 rounded border border-primary' width={200} height={240} src={taskers.img}></img>:null}
              {taskers?.numberOfReviews?<span>{taskers.numberOfReviews} Reviews</span>:null}
              <div>Total : {total} L.E</div>
              <div id="my-radio-group">Pick your payment method</div>
              <label>
              <Field type="radio" name="paymentmethod" value="cash" />
              Cash
            </label>
            <label>
              <Field type="radio" name="paymentmethod" value="paypal" />
              <PayPal/>
            </label>
            
            
              <button type="submit" disabled={isSubmitting} class="btn btn-primary">submit</button>

            </form>
          )
        }

      </Formik>


      {/* <select class="form-select" aria-label="Default select example">
      {tasks.map(task=>
        <option value={task._id}>{task.name}</option>

      
      )

      }
  
</select>
<div className="form-group">
    <label for="exampleFormControlTextarea1">Description of your task requirments</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <select class="form-select" aria-label="Default select example" onChange={setAddressHandler} placeholder='Enter your zone'>
  {addresses.map(address=>
    <option value={address._id}>{address.name}</option>
    )}
  
</select>





<label for="birthdaytime">pick (date and time):</label>
<input type="datetime-local" id="birthdaytime" name="birthdaytime"/> */}


    </>

  )
}

export default TaskRequest