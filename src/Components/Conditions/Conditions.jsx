import React from 'react'
import Date from './Date/Date'
import Price from './Price/Price'
import TaskerType from './TaskerType/TaskerType'
import TimeofDate from './TimeofDay/TimeofDate'
import './Conditions.css'

function Conditions() {
  return (
    <>
    <div className='conditions-div my-3 col-md-4'>
      <Date/>
      <hr />
      <TimeofDate/>
      <hr />
      <Price/>
      <hr />
      <TaskerType/>
      </div>
    </>
  )
}

export default Conditions