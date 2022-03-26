import React from 'react'
import { Link } from 'react-router-dom'
import img from './pngegg.png'

function NotFound() {
  return (
    <div class="container text-center">
        <img src={img} alt="not found" className='w-75' />
        <Link to="/home"><button className='btn btn-primary'>Back to Home Page</button></Link>
    </div>
  )
}

export default NotFound
