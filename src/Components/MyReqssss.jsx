import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { TasksRequests } from '../TasksRequestsContext';


function MyReqssss() {
  let { loading ,  TaskersRequests , Customers , approvedTask , RejectedTask } = useContext(TasksRequests);
    const params = useParams()
    const [requests, setRequests] = useState([])
    const [Users, setUsers] = useState('')
    const FilterMyRequests = () => {
      const userData = JSON.parse(localStorage.getItem("userData")) 
      console.log(TaskersRequests)
      setRequests(TaskersRequests.filter((request) => request.tasker === params.id))


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
    {requests.length > 0 ? requests.map((request , indx) =><div key={indx} className="card m-4 col-md-3">
    <div className="card-body">
      <h5 className="card-title">{request.name}</h5>
      <p>Average Price : {request.avgPrice}$</p>
      <p className="card-text">Payment Method : {request.paymentmethod}</p>
      <p className="card-text">Task Appointment : {request.taskappointment}</p>
      <p className="card-text">Task Status : {request.status}</p>
      <button onClick={() => FilterUsers(request)} className='btn btn-primary'>See Customer</button>{Users.length > 0 ? <button onClick={RemoveFilterUser} className='btn btn-primary mx-2'><i className="fa-solid fa-angle-up"></i></button>: ''}
      <div className='w-100 my-4 d-flex'>
        {Users.length > 0 ? <> <img src={Users[0].image} className="image-req" alt=""/>  <div className='mx-2'>
          <h6>{Users[0].name}</h6>
          <p className='mail'>{Users[0].email}</p>
          </div> </>: ""}
        </div>
      {request.status === "pending" ? <><button onClick={() => { 
        approvedTask(request._id , request)
        FilterMyRequests();
        }} className='btn btn-warning mx-2'>Approve</button> 
        <button onClick={() => {
                  RejectedTask(request._id , request)
                  FilterMyRequests();
        }} className='btn btn-danger'>Reject</button></>
        : ''}
        {request.status==="approved"? request.status==="inprogress" : ''} 
        {request.status==="inprogress"? <>
        <p className='text-center'>task is in-progress</p>
        </>:''}
    </div>
  </div>):loading ? <div className="loading text-center"><i className='fas fa-spinner fa-spin spin text-primary'></i></div> :<h1>You Don't Have a Tasks Can show it</h1>}
    </div>
    </div>
    </>
  )
}

export default MyReqssss