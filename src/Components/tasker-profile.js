import taskerpp from '../assets/images/taskerPP.jpg'
import unknown from '../assets/images/Unknown_person.jpg'
import star from '../assets/images/star.png'
import React from "react"
const n = 5
function TaskerProfile(props) {
  return (
    <>
      <div className='mt-5'>
        <div className="container-sm p-4 border rounded">
          <div className="row gx-4 border-bottom" padding={20}>
            <div className="col-auto">
              <img
                src={taskerpp}
                className="rounded-circle z-depth-2"
                width={120}
                height={120}
              />
            </div>
            <div className="col-4">
              <h3>John B.</h3>
              <h4>$50/hr</h4>
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-primary m-4" >
                Select & Continue
              </button>
            </div>
          </div>
          <div className="row pt-4 gx-4" padding={20}>
            <h4>Skills and Experience</h4>
            <p>Everyone who tried my service, keeps it regular.</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="container p-4 border rounded">
          <h4>Reviews</h4>
          <div className="row">
            <div className="col">
              <img
                src={unknown}
                className="rounded-circle z-depth-2"
                width={50}
                height={50}
              />
            </div>
            <div className="col-11">
              James B. <br />
              {[...Array(n)].map((el, i) => (
                <img src={star} width={20} height={20} />
              ))}
            </div>
            <div>“excellent. thank you !”</div>
            <div className='blockquote-footer'>March 3, 2022</div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src={unknown}
                className="rounded-circle z-depth-2"
                width={50}
                height={50}
              />
            </div>
            <div className="col-11">
              Julia S. <br />
              {[...Array(n)].map((el, i) => (
                <img src={star} width={20} height={20} />
              ))}
            </div>
            <div>“good service. thank you !”</div>
            <div className='blockquote-footer'>February 1, 2022</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default TaskerProfile
