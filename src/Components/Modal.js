import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Modal.css'
const Modal = ({closeModal}) => {

  return (
    <>
  <div className='modalBackground'>
<div className='modalContainer'>
    <div className='modalTitle'>
        <h1>Task has been submitted successfully</h1>
    </div>
    <div className='modalBody'>
        Hope you will be satisfied with our service
    </div>
    <div className='modalFooter'>
        <button onClick={closeModal} className='btn btn-primary m-3 ' >Cancel</button>
        <Link className='btn btn-primary' to='/home'>continue</Link>
    </div>
</div>
  </div>
    </>
  )
}

export default Modal