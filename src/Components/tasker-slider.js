import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import taskerpp from '../assets/images/taskerPP.jpg'

function TaskerSlider() {
  const [sliderRef, setSliderRef] = useState(null)
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    infinite: true,
  }
  const taskerCards = [
    {
       imageSrc: taskerpp,
      name: 'John B.',
      description: 'i have been using Sahla for so long and i have served alot of clients it has been a life changer',
      pricingText: 'USD 50/hr',
      services: ['Cleaning'],
    },
    {
       imageSrc: taskerpp,
      name: 'Andrew K.',
      description: 'i have been using Sahla for so long and i have served alot of clients it has been a life changer',
      pricingText: 'USD 40/hr',
      services: ['Shopping', 'Delivery'],
    },
    {
       imageSrc: taskerpp,
      name: 'Ronald J.',
      description: 'i have been using Sahla for so long and i have served alot of clients it has been a life changer',
      pricingText: 'USD 15/hr',
      services: ['Pet sitting', 'Delivery'],
    },
    {
       imageSrc: taskerpp,
      name: 'Adriano M.',
      description: 'i have been using Sahla for so long and i have served alot of clients it has been a life changer',
      pricingText: 'USD 60/hr',
      services: ['Help moving', 'Furniture assembly', 'Moving heavy furniture'],
    },
  ]

  return (
    <div className="content mx-4 my-4">
       <button onCLick={sliderRef?.slickPrev()}>
          <FaChevronLeft />
        </button>
        <button onCLick={sliderRef?.slickNext()}>
          <FaChevronRight />
        </button> 
      <Slider ref={setSliderRef} {...sliderSettings}>
        {taskerCards.map((card, index) => (
          <div key={index}>
            <h2>{card.name}</h2>
             <img
              alt={card.name}
              src={card.imageSrc}
              width="100"
              height="100"
              className=''
            /> 
            <p>{card.description}</p>
            <ul>
              {card.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default TaskerSlider

