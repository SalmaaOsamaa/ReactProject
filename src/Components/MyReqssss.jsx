import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { TasksRequests } from '../TasksRequestsContext';


function MyReqssss() {
  let { loading ,  TaskersRequests , Customers , approvedTask , RejectedTask } = useContext(TasksRequests);
  console.log(TaskersRequests);
    const params = useParams()
    const [requsets, setRequsets] = useState([])
    const [Users, setUsers] = useState('')
    const FilterMyRequests = () => {
      let MyNewRequests = TaskersRequests.filter((request) => request.tasker === params.id)
      setRequsets(MyNewRequests)
      console.log(MyNewRequests);
    }
    const FilterUsers = (request) => {
      console.log(request);
      const newUser = Customers.data.filter((user) => user._id === request.customer)
      console.log(newUser);
      setUsers(newUser)
    }
    const RemoveFilterUser = () => {
      setUsers("");
    }
    useEffect(() => {
      FilterMyRequests();
    }, [TaskersRequests])
  return (
    <>
<div className="container marginTop">
    <div className="row my-5 g-3">
    {requsets.length > 0 ? requsets.map((requset , indx) =><div key={indx} className="card m-4 col-md-3">
    <div className="card-body">
      <h5 className="card-title">{requset.name}</h5>
      <p>Average Price : {requset.avgPrice}$</p>
      <p className="card-text">Payment Method : {requset.paymentmethod}</p>
      <p className="card-text">Task Appointment : {requset.taskappointment}</p>
      <p className="card-text">Task Status : {requset.status}</p>
      <button onClick={() => FilterUsers(requset)} className='btn btn-primary'>See Customer</button>{Users.length > 0 ? <button onClick={RemoveFilterUser} className='btn btn-primary mx-2'><i className="fa-solid fa-angle-up"></i></button>: ''}
      <div className='w-100 my-4 d-flex'>
        {Users.length > 0 ? <> <img src={Users[0].image} className="image-req" alt=""/>  <div className='mx-2'>
          <h6>{Users[0].name}</h6>
          <p className='mail'>{Users[0].email}</p>
          </div> </>: ""}
        </div>
      {requset.status === "pending" ? <><button onClick={() => { 
        approvedTask(requset._id , requset)
        FilterMyRequests();
        }} className='btn btn-warning mx-2'>Approve</button> 
        <button onClick={() => {
                  RejectedTask(requset._id , requset)
                  FilterMyRequests();
        }} className='btn btn-danger'>Reject</button></>
        : ''}
    </div>
  </div>):loading ? <div className="loading text-center"><i className='fas fa-spinner fa-spin spin text-primary'></i></div> :<h1>You Don't Have a Tasks Can show it</h1>}
    </div>
    </div>
    </>
  )
}

export default MyReqssss