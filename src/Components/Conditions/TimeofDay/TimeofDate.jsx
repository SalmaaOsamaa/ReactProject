import React from 'react'
function TimeofDate() {
  return (
    <>
    <div className='my-4'>
        <h6>Time of Day</h6>
        <div className="form-check form-switch py-1">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label font-gray" htmlFor="flexSwitchCheckDefault">Morning (8am - 12p)</label>
</div>
<div className="form-check form-switch py-1">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
        <label className="form-check-label font-gray" htmlFor="flexSwitchCheckChecked">Afternoon (12pm - 5pm)</label>
</div>
<div className="form-check form-switch py-1">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled"/>
        <label className="form-check-label font-gray" htmlFor="flexSwitchCheckDisabled">Evening (5pm - 9:30pm)</label>
</div>
    </div>
    </>
)
}

export default TimeofDate