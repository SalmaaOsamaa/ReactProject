import React from 'react'
import location from '../assets/images/earth.png'
import '../assets/css/city.css';

const City = () => {
  return (


    <div className='main-cont my-5 py-5'>
      <div className='search-cont'>
        <h2 className='h1 text-center' >cities where we work-sahla</h2>
        <br />
      </div>
      <div className='city' >
        <div className="city-list" >
          <div className='list'>
            <img src={location} className="earth" alt="logo" />
            <br />
            <p className='p-location'>
              Sahla's Locations
            </p>
            <ul className='list-group location-ul  m-3 p-5'>
              <li className='list-group-item fw-bold  border-0 h3' >Cairo</li>
              <li className='list-group-item border-0 text-primary' >nasr city</li>
              <li className='list-group-item border-0 text-primary' >new cairo</li>
              <li className='list-group-item border-0 text-primary' >maadi</li>
              <li className='list-group-item border-0 text-primary' >zayton</li>


            </ul>

            <ul className='list-group  location-ul flex m-3 p-5'>
              <li className='list-group-item fw-bold  border-0 h3' >Cairo</li>
              <li className='list-group-item border-0 text-primary' >nasr city</li>
              <li className='list-group-item border-0 text-primary' >new cairo</li>
              <li className='list-group-item border-0 text-primary' >maadi</li>
              <li className='list-group-item border-0 text-primary' >zayton</li>


            </ul>
            <ul className='list-group location-ul flex m-3 p-5'>
              <li className='list-group-item fw-bold  border-0 h3' >Cairo</li>
              <li className='list-group-item border-0 text-primary' >nasr city</li>
              <li className='list-group-item border-0 text-primary' >new cairo</li>
              <li className='list-group-item border-0 text-primary' >maadi</li>
              <li className='list-group-item border-0 text-primary' >zayton</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default City