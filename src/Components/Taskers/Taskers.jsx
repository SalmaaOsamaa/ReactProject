import React from 'react'
import img from './fpjgbjkbyrfkkowev608.jpg'
import './Tasker.css'
import taskersData from '../DataofTaskers/DataofTaskers.json';


function Taskers() {
return (
    <> 
    {taskersData ? taskersData.map((tasker , indx) => <div key={indx} className="tasker row my-3">
  <div className="img-con col-md-4">
      <img className="taskerimg rounded-circle z-depth-2" src={img} alt="tasker" />
      <p><a href="/" className='link'>View Profile & Reviews</a></p>
      <button className='butt tasker-butt'>Select & Continue</button>
      <p className='hint'>You can chat with your Tasker, adjust task details, or change task time after booking.</p>
      </div>
      <div className="details-Con col-md-8 my-2">
          <div className="name-price d-flex justify-content-between align-items-center w-100">
              <h1 className="name">{tasker.name}</h1>
              <h1 className="price h3">{tasker.PricePerHour}</h1>
              </div>
              <div className="my-3">
              <div className="detail d-flex justify-content-start align-items-center"><i className="fa-solid fa-circle-check"></i><p className="font-gray datails-font">2 Babyproofing Tasks</p></div>
              <div className="detail d-flex justify-content-start align-items-center"><i className="fa-solid fa-star star"></i><p className="font-gray datails-font">{tasker.review} (1 review)</p></div>
              <div className="detail d-flex justify-content-start align-items-center"><i className="fa-solid fa-shield-blank"></i><p className="font-gray datails-font">{tasker.Reliable} Reliable</p></div>  
              <div className="detail d-flex justify-content-start align-items-center"><i className="fa-solid fa-truck-moving"></i><p className="font-gray datails-font">Vehicle: Minivan/SUV</p></div>
              </div>
          </div>
          </div>): <div className='spinner-Con'><i className="fa-solid fa-spinner fa-spin spinner"></i></div>}

    </>
)
}

export default Taskers
