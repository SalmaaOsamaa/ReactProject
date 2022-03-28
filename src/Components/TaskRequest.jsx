import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Field, Formik } from 'formik';
import PayPal from './PayPal';
import Modal from './Modal'

const TaskRequest = (props) => {
  const [tasks, setTasks] = useState([])
  const [workareas, setAdresses] = useState([])
  const [taskers, setTaskers] = useState([])
  const [total, setTotal] = useState(0)
  const [openModal, setOpenModal] = useState(false);
  const modalHandler = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    let isMounted = true
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
    const avgPrice = tasks.find(t => t._id == taskId)
    setTotal(avgPrice);
  }
  return (
    <>

      <Formik

        initialValues={{
          name: '',
          image: tasks.image,
          avgPrice: tasks.avgPrice,
          description: '',
          workarea: '',
          city: '',
          taskappointment: '',
          tasker: '',
          paymentmethod:'',
          customer: JSON.parse(localStorage.getItem("userData"))._id
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
          }).then((res)=>{
            setOpenModal(true)
          });
        }}
      >
        {
          ({ values, handleChange, handleBlur, handleSubmit }) => (
            <div className="form-background">
            <div className="container marginTop">
            <form className='bg-light p-3 m-auto form-cont' onSubmit={handleSubmit}>
              <select name='name' className="form-select mt-5" aria-label="Default select example" onChange={(e) => {
                handleChange(e)
                taskSelectHandler(e.target.value)
              }} onBlur={handleBlur} value={values.task}>
                <option value="" disabled selected>Select your Task</option>

                {tasks.map(task =>
                  <option value={task.name}>{task.name}</option>
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
              <select name='workarea' class="form-select" aria-label="Default select example" onChange={handleChange} onBlur={handleBlur} value={values.workarea} placeholder='Enter your zone'>
              <option value="" disabled selected>Select your Area</option>

                {workareas.map(workarea =>
                  <option value={workarea._id}>{workarea.name}</option>
                )}

              </select>
              <select name='city' class="form-select my-3" aria-label="Default select example" onChange={handleChange} onBlur={handleBlur} value={values.city} placeholder='Enter your city'>
                {workareas?.find(el => el._id == values.workarea)?.city?.map(city =>
                  <option value={city}>{city}</option>
                )}
              </select>

              <label for="exampleFormControlTextarea1" className='mx-1'>Pick ( date and time ) for your task :</label>
              <input type="datetime-local" name="taskappointment" onChange={handleChange} onBlur={handleBlur} value={values.taskappointment} />

              <select name='tasker' class="form-select my-3"  aria-label="Default select example" onChange={(e) => {
                handleChange(e)
                taskerSelectHandler(e.target.value)
              }} onBlur={handleBlur} value={values.tasker} placeholder='Enter your zone'>
                {taskers.map(tasker =>
                  <option value={tasker._id}>Name: {tasker.name}, Skills: {tasker.Skills.join(', ')}</option>
                )}

              </select>
              {taskers && taskers.img  || taskers.image ? <img className='m-3 rounded border border-primary' width={200} height={240} src={taskers.img || taskers.image}></img>:null}
              {taskers?.numberOfReviews?<span>{taskers.numberOfReviews} Reviews</span>:null}
              <div><p className='d-inline mx-1 fw-bolder'>Total :</p>{total} L.E</div>
              <div id="my-radio-group"><p className='d-inline mx-1 fw-bolder'>Pick your payment method : </p></div>
              <label>
              <Field type="radio" name="paymentmethod" value="cash" className='mx-3' />
              Cash on delivery
            </label>
            <label>
              <Field type="radio" name="paymentmethod" value="paypal"/>
              <PayPal/>
            </label>
              <button type="submit"  class="btn btn-primary d-block w-75 m-auto my-2">submit</button>
            </form>
            </div>
            </div>

            
          )
        }

      </Formik>
      {openModal? <Modal closeModal={modalHandler}/>:null}


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