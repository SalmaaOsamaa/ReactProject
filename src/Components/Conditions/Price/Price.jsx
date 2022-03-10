import React from 'react'

function Price() {
  return (
    <>
    <div className="my-3">
    <h6>Price</h6>
      <input type="range" className="form-range" min="0" max="150" step="5" id="customRange3"></input>
      <div className="d-flex justify-content-between">
      <label htmlFor="customRange3" className="form-label fw-bold">$10</label>
    <label htmlFor="customRange3" className="form-label fw-bold">$150</label>
        </div>
    <p className='text-center'>The average hourly rate is <span className='fw-bold'>$45/hr</span></p>
        </div>
        
    </>
  )
}

export default Price