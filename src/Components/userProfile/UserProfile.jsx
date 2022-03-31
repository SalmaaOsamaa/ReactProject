import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TasksRequests } from '../../TasksRequestsContext';
import './UserProfle.css'

function UserProfile() {
  let { RequestsCount , RequestsUserCount , countTasks} = useContext(TasksRequests);

  const userData = JSON.parse(localStorage.getItem("userData")) 
  useEffect(() => {
    countTasks();
  }, [])
  return (
    <>
    {userData ?     <div className="container account-card w-75 m-auto my-5">
    <h1 className='m-5'>Your Account</h1>
    <div className="row g-3 acc-Con">
        <div className="col-md-4">
        <img src={userData.image || userData.img} className="w-100 rounded-circle" alt="" />
        </div>
        <div className="user-info col-md-8 mt-5">
            <div className="info-Con d-flex">
        <i className="fa-solid fa-user"></i><h1>{userData.name}</h1>
        </div>
        <div className="info-Con d-flex">
        <i className="fa-solid fa-envelope"></i><p>{userData.email}</p>
        </div>
        <div className="info-Con d-flex">
        <i className="fa-solid fa-location-dot"></i><p>{userData.role}</p>
        </div>
        {userData.role === 'Customar' ? <Link className='btn btn-primary mx-5 position-relative' to={`/UserReq/${userData._id}`}>Check Your Task Requests
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {RequestsUserCount.length}
    <span className="visually-hidden">unread messages</span>
  </span></Link> : <Link className='btn btn-primary mx-5 position-relative' to={`/TaskerReqs/${userData._id}`}>Check Your Task Requests
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {RequestsCount.length}
    <span className="visually-hidden">unread messages</span>
  </span></Link>}
        <div className="info-Con d-flex">
        {userData.task && userData.task.length > 0 ? <> <i className="fa-solid fa-house"></i><p>{ userData.task.map((e) => e)}</p></>: userData.tasks && userData.tasks.length > 0 ? <> <i className="fa-solid fa-house"></i><p>{ userData.tasks.map((e) => e)}</p></> : ''}
        </div>
        </div>
    </div>
    </div> : ''}

    </>
  )
}

export default UserProfile