import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Tasker.css'


function Taskers(props) {
    let { taskers } = props;
    let [statuses,setStatuses] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/taskersStatuses').then(r => {  
            console.log(r.data)
            setStatuses(r.data)
        })
    }, [])
    
return (
    <>
     <div className="col-md-12 px-4 mt-3">
    {taskers ? taskers.map((tasker , indx) => <div key={indx} className="tasker row my-3">
  <div className="img-con col-md-6">
       <img className="taskerimg rounded-circle z-depth-2" src={tasker.img || tasker.image} alt="tasker" /> 
      <p className='hint'>You can chat with your Tasker, adjust task details, or change task time after booking.</p>
      </div>
      <div className="details-Con col-md-6 my-2">
          <div className="name-price d-flex justify-content-between align-items-center w-100">
              <h1 className="name">{tasker.name}</h1>
              <h1 className="price h3">{tasker.PricePerHour}</h1>
              </div>
              <div className="my-3">
              {/* <div className="detail d-flex justify-content-start align-items-center"><i className="fa-solid fa-circle-check"></i><p className="font-gray datails-font">{tasker.Skills.map((e) => `- ${e}`)}</p></div> */}
              <div className="detail d-flex justify-content-start align-items-center"><i className="fa-solid fa-star star"></i><p className="font-gray datails-font">{tasker.numberOfReviews} reviews</p></div>
              <div className="detail d-flex justify-content-start align-items-center"><i className="fa-solid fa-shield-blank"></i><p className="font-gray datails-font">{tasker.Reliable} Reliable</p></div>  
              <div className="detail d-flex justify-content-start align-items-center"><i className="fa-solid fa-truck-moving"></i><p className="font-gray datails-font">Vehicle: Minivan/SUV</p></div>
              {tasker?.isAvailable?<span>Available</span>:<span>Not Available</span>}
              {/* <div className="detail d-flex justify-content-start align-items-center"><i className="fa-solid fa-star star"></i><p className="font-gray datails-font">isAvailable: {tasker.isAvailable===false}</p></div>

              </>
              
            :''} */}
              </div>
          </div>
          </div>): <div className='spinner-Con'><i className="fa-solid fa-spinner fa-spin spinner"></i></div>}
          </div>
    </>
)
}

export default Taskers
