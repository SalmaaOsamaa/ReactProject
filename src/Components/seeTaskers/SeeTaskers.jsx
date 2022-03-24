import React from 'react'
import Conditions from '../Conditions/Conditions'
import Taskers from '../Taskers/Taskers'

function SeeTaskers() {
  return (
      <div className="container">
    <div className='row justify-content-between'>
        <Conditions/>
        <Taskers/>
    </div>
    </div>
  )
}

export default SeeTaskers