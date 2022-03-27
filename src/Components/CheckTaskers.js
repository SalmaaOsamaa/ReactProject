import React from 'react'
import { Link } from 'react-router-dom'

const CheckTaskers = () => {
  return (
    <div className='container my-5 text-center'>
        <div className='card w-50 m-auto p-5'>
        <h1>
            Check our featured taskers
        </h1>
        <Link className='btn btn-primary w-50 m-auto' to='/Taskers' >See Taskers</Link>
        </div>
    </div>
  )
}

export default CheckTaskers