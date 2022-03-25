import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Field, Formik} from 'formik';

import * as Yup from 'yup';
const TaskRequest = () => {
    const [tasks, setTasks] = useState([])
    const [addresses, setAdresses] = useState([])
    // const [adressId,setAddress] = useState({})
    // const setAddressHandler = (e) => {
    //     setAddress(e.target.value)
    // }
    useEffect(()=>{
        Axios.get("http://localhost:4000/tasks").then((res)=>{
            console.log(res);
            setTasks(res.data);
        })
        Axios.get("http://localhost:4000/workAreas").then((res)=>{
            console.log(res);
            setAdresses(res.data);
            
        })

    },[])

    
  return (
    <>
  
   <Formik 
   initialValues={{task:'',
   description:'',
   address:'',
   taskappointment:''
}}
   onSubmit={data=>{
       console.log(data);
   }}
   >
       { 
           ({values,handleChange,handleBlur,handleSubmit})=>(
               <form onSubmit={handleSubmit}>
                   <select name='task' class="form-select" aria-label="Default select example" onChange={handleChange} onBlur={handleBlur} value={values.task}>
      {tasks.map(task=>
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
    class='w-100 h-100'
    
    />
     <select name='address' class="form-select" aria-label="Default select example" onChange={handleChange} onBlur={handleBlur} value={values.address} placeholder='Enter your zone'>
  {addresses.map(address=>
    <option value={address._id}>{address.name}</option>
    )}
  
</select>
<select name='address' class="form-select" aria-label="Default select example" onChange={handleChange} onBlur={handleBlur} value={values.address} placeholder='Enter your zone'>
  {addresses.map(address=>
    <option value={address._id}>{address.city}</option>
    )}
  
</select>


<label for="exampleFormControlTextarea1">pick (date and time) for your task: </label>
<input type="datetime-local" name="taskappointment" onChange={handleChange} onBlur={handleBlur} value={values.taskappointment} />

<button >go to taskers</button>
               
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

{
    adressId ?<select class="form-select" aria-label="Default select example" placeholder='Enter your zone'>
    {addresses.find(el => el._id == adressId)?.city?.map(city=>
      <option value={city}>{city}</option>
      )}
    
  </select>:null
}



<label for="birthdaytime">pick (date and time):</label>
<input type="datetime-local" id="birthdaytime" name="birthdaytime"/> */}

    
   </>
  
  )
        }

export default TaskRequest