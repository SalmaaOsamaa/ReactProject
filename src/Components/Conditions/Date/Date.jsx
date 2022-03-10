import React, { useEffect } from 'react'
import './Date.css'

function Date() {

  useEffect(() => {
    let dates = document.querySelectorAll('.button-date')
    console.log(dates);
    dates.forEach((ele , indx) => {
      ele.addEventListener('click' , (e) => {
        ele.classList.toggle('active');
        for(let i=0; i < dates.length; i++){
          if (i !== indx){
            dates[i].classList.remove('active')
          }
        }
      })
    })
  }, [])


  return (
    <>
    <div className='my-4'>
        <h6>Date</h6>
        <div className="butt-date-Con w-100">
        <div key={1} className="button-date"><p>Today</p></div>
        <div key={2} className="button-date"><p>Within 3 Days</p></div>
        <div key={3} className="button-date"><p>Within A Week</p></div>
        <div key={4} className="button-date"><p>Choose Dates</p></div>
        </div>
    </div>
    </>
  )
}

export default Date