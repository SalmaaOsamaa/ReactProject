import React from 'react'

function TaskerType() {
  return (
    <>
    <div className='my-2'>
        <h6 className='my-4'>Tasker Type</h6>
        <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label font-gray" htmlFor="flexCheckDefault">
    Elite Tasker
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label font-gray" htmlFor="flexCheckChecked">
    Great Value
  </label>
</div>
    </div>
    
    </>
  )
}

export default TaskerType