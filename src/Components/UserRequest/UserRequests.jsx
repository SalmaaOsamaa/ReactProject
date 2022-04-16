import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { TasksRequests } from '../../TasksRequestsContext';
import TaskRequest from '../TaskRequest';



function UserRequests() {
  

  let { TasksRequest , loading , Taskers } = useContext(TasksRequests);

    let params = useParams();
    const [MyRequests, setRequests] = useState([])
    const [TaskerReq, setTaskerReq] = useState('')
    const FilterMyRequests = () => {
      setRequests(TasksRequest.filter((request) => request.customer === params.id))
    }
    const FilterReqTasker = (request) => {
      const newTasker = Taskers.data.filter((tasker) => tasker._id === request.tasker)
      setTaskerReq([...newTasker])
    }
    const removeTaskerDetails = () => {
      setTaskerReq('')
    }
    useEffect(() => {
      FilterMyRequests();
    }, [TasksRequest])

    

  return (
    <>
  <div className="container marginTop">
      <div className="row my-5 g-3">
    {MyRequests.length > 0 ? MyRequests.map((request , indx) =>    <div key={indx} className="card m-4 col-md-3">
    <div className="card-body">
      <h5 className="card-title">{request.name}</h5>
      <p className="card-text">Description : {request.description}</p>
      <p>Total: {request.avgPrice}</p>
      <p className="card-text">Payment Method : {request.paymentmethod}</p>
      <p className="card-text">Task Appointment : {request.taskappointment}</p>
       <p className="card-text">Task Status : {request.status} </p>
      {request.status==="approved"? <>
      <p className='progresspara'>in progress Tasker is on the way</p>
      </>:''}
      
      <button className='btn btn-primary' onClick={() => FilterReqTasker(request)}>See Tasker</button>
      {TaskerReq ? <button className='btn btn-primary mx-3' onClick={removeTaskerDetails}><i class="fa-solid fa-angle-up"></i></button> : ''}
      <div className='w-100 my-4 d-flex'>
        {TaskerReq ? <> <img src={TaskerReq[0].img} className="image-req" alt=""/> <div className='mx-2'>
          <h6>{TaskerReq[0].name}</h6>
          <i className="fa-solid fa-star star2 mx-1"></i><p className='d-inline review-req'>{TaskerReq[0].numberOfReviews} Reviews</p>
          <p className='review-req mx-4'>Age : {TaskerReq[0].age}</p>
          </div> </>: ""}
        </div>
     </div>
   </div>):loading ? <div className="loading text-center"><i className='fas fa-spinner fa-spin spin text-primary'></i></div> :<h1>You Don't Have a Tasks Can show it</h1>}
    </div>
    </div>
    </>
  )
}

export default UserRequests

