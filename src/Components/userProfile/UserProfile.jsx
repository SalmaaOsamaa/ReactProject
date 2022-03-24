import React from 'react'
import img from './default_avatar.png'
import './UserProfle.css'

function UserProfile() {
  return (
    <>
    <div className="container account-card w-75 m-auto my-5">
    <h1 className='m-5'>Your Account</h1>
    <div className="row g-3 acc-Con">
        <div className="col-md-4">
        <img src={img} className="w-100 rounded-circle" alt="" />
        </div>
        <div className="user-info col-md-8 mt-5">
            <div className="info-Con d-flex">
        <i className="fa-solid fa-user"></i><h1>Your Name</h1>
        </div>
        <div className="info-Con d-flex">
        <i className="fa-solid fa-envelope"></i><p>midodarwesh285@gmail.com</p>
        </div>
        <div className="info-Con d-flex">
        <i className="fa-solid fa-location-dot"></i><p>42534</p>
        </div>
        <div className="info-Con d-flex">
        <i className="fa-solid fa-house"></i><p>Personal Tasks</p>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default UserProfile