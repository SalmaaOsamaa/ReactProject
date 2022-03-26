import React from 'react'
import { Link } from 'react-router-dom'
import './UserProfle.css'

function UserProfile() {
  const userData = JSON.parse(localStorage.getItem("userData")) 
  console.log(userData);
  return (
    <>
    {userData ?     <div className="container account-card w-75 m-auto my-5">
    <h1 className='m-5'>Your Account</h1>
    <div className="row g-3 acc-Con">
        <div className="col-md-4">
        <img src={userData.image} className="w-100 rounded-circle" alt="" />
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
        <Link className='btn btn-primary' to='/myreq'>check your task requests</Link>
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