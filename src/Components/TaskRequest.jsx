import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Field, Formik } from 'formik';
import PayPal from './PayPal';
import Modal from './Modal'

const TaskRequest = (props) => {
  const [tasks, setTasks] = useState([])
  const [workareas, setAdresses] = useState([])
  const [taskers, setTaskers] = useState([])
  const [taskerChosen, setTaskerChosen] = useState('')
  const [total, setTotal] = useState(0)
  const [openModal, setOpenModal] = useState(false);
  const modalHandler = () => {
    setOpenModal(false)
  }

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
    console.log(taskerId);
    const  tasker  = taskers.find(t => t._id === taskerId)
    console.log(tasker);
    setTaskerChosen(tasker);
  }
  const taskSelectHandler = (taskId) => {
    console.log(taskId);
    // const task = tasks.find(t => t._id === taskId)
    // console.log(task);
    // setTotal(avgPrice);
  }
  return (
    <>

      <Formik

        initialValues={{
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
              <select  name='name' className="form-select mt-5" aria-label="Default select example" onChange={(e) => {
                handleChange(e)
                taskSelectHandler(e.target.value)
              }} onBlur={handleBlur} value={values.task}>

                {tasks.map((task , indx) =>
                  <option key={indx} value={task}>{task.name}</option>
                )
                }

              </select>
              <label htmlFor="exampleFormControlTextarea1">Description of your task requirments:</label>
              <Field
                name='description'
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className=' m-3'
              />
              <select name='workarea' className="form-select" aria-label="Default select example" onChange={handleChange} onBlur={handleBlur} value={values.workarea} placeholder='Enter your zone'>

                {workareas.map((workarea , indx) =>
                  <option key={indx} value={workarea._id}>{workarea.name}</option>
                )}

              </select>
              <select name='city' className="form-select my-3" aria-label="Default select example" onChange={handleChange} onBlur={handleBlur} value={values.city} placeholder='Enter your city'>
                {workareas?.find(el => el._id === values.workarea)?.city?.map((city , indx) =>
                  <option key={indx} value={city}>{city}</option>
                )}
              </select>

              <label htmlFor="exampleFormControlTextarea1" className='mx-1'>Pick ( date and time ) for your task :</label>
              <input type="datetime-local" name="taskappointment" onChange={handleChange} onBlur={handleBlur} value={values.taskappointment} />

              <select name='tasker' className="form-select my-3"  aria-label="Default select example" onChange={(e) => {
                handleChange(e)
                taskerSelectHandler(e.target.value)
              }} onBlur={handleBlur} value={values.tasker} placeholder='Enter your zone'>
                {taskers.map((tasker , indx) =>
                  <option key={indx} value={tasker._id}>Name: {tasker.name}, Skills: {tasker.Skills.join(', ')}</option>
                )}

              </select>
              <div className="d-flex">
              {taskerChosen && taskerChosen.img  || taskerChosen.image ? <img className='m-3 rounded-3' alt='tasker' width={200} height={240} src={taskerChosen.img || taskerChosen.image}></img>:null}
              <div className='my-3'>
              {taskerChosen && taskerChosen.name ?<><h3>{taskerChosen.name}</h3></>:null}
              {taskerChosen && taskerChosen.numberOfReviews ?<><i className="fa-solid fa-star star mx-2"></i><span>{taskerChosen.numberOfReviews} Reviews</span></>:null}
              {taskerChosen && taskerChosen.PricePerHour ?<><h6 className='m-2'>Price Per Hour : {taskerChosen.PricePerHour} $/hr</h6></>:null}
              {taskerChosen && taskerChosen.Skills.length > 0 ?<><h6 className='m-2'>Skills : {taskerChosen.Skills.map((ele) => ` ${ele} `)}</h6></>:null}
              {taskerChosen && taskerChosen.About ?<><h6 className='m-2'>{taskerChosen.About}</h6></>:null}
              </div>
              </div>
              <div><p className='d-inline mx-1 fw-bolder'>Total :</p>{total} L.E</div>
              <div id="my-radio-group"><p className='d-inline mx-1 fw-bolder'>Pick your payment method : </p></div>
              <label>
              <Field type="radio" name="paymentmethod" value="cash" className='mx-3' />
              Cash on delivery
            </label>
            <label>
              <Field type="radio" name="paymentmethod" value="paypal"/>
            </label>
              <button type="submit"  className="btn btn-primary d-block w-75 m-auto my-2">submit</button>
            </form>
            </div>
            </div>

            
          )
        }

      </Formik>
      {openModal? <Modal closeModal={modalHandler}/>:null}


      


    </>

  )
}

export default TaskRequest