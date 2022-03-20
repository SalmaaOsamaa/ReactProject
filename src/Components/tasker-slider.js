import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import taskerpp from '../img/taskerPP.jpg'

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
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 50/hr',
      services: ['Cleaning'],
    },
    {
      imageSrc: taskerpp,
      name: 'Andrew K.',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 40/hr',
      services: ['Shopping', 'Delivery'],
    },
    {
      imageSrc: taskerpp,
      name: 'Ronald J.',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 15/hr',
      services: ['Pet sitting', 'Delivery'],
    },
    {
      imageSrc: taskerpp,
      name: 'Adriano M.',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 60/hr',
      services: ['Help moving', 'Furniture assembly', 'Moving heavy furniture'],
    },
  ]

  return (
    <div className="content mx-4 my-4">
      {/* <button onCLick={sliderRef?.slickPrev()}>
          <FaChevronLeft />
        </button>
        <button onCLick={sliderRef?.slickNext()}>
          <FaChevronRight />
        </button> */}
      <Slider ref={setSliderRef} {...sliderSettings}>
        {taskerCards.map((card, index) => (
          <div key={index}>
            <h2>{card.name}</h2>
            <img
              alt={card.name}
              src={card.imageSrc}
              width="100"
              height="100"
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
//  <div className="row mx-4 my-4">
//         {[...Array(n)].map((el, i) => (
//           <div className='col'>
//             <MDBCard style={{ width: '18rem' }}>
//               <MDBCardImage variant="top" src={taskerpp} />
//               <MDBCardBody>
//                 <MDBCardTitle>John B.</MDBCardTitle>
//                 <MDBCardText className="border-bottom">
//                   Cleanning <br /> $50/hr
//                 </MDBCardText>
//                 <MDBCardText className="border-bottom">
//                   <h6>I'm the right person for the job:</h6>
//                   <p>Everyone who tried my service, keeps it regular.</p>
//                 </MDBCardText>
//                 <button className="btn btn-primary">Go somewhere</button>
//               </MDBCardBody>
//             </MDBCard>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }
