import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets'

function BecomeATasker() {
  return (
    <>
      <div className="container py-5 m-5">
        <div className="row g-4">
          <div className="col-md-7">
            <img src={img} alt="craftmen" className="w-100" />
          </div>
          <div className="col-md-5">
            <h1>Earn money your way</h1>
            <p className="fs-5">See how much you can maketasking on Sahla</p>
            <label className="fs-5 fw-bolder" htmlFor="city">
              Select your area
            </label>
            <select
              id="city"
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected value="1">
                Cairo
              </option>
              <option value="2">Giza</option>
              <option value="3">Alexandria</option>
            </select>
            <label className="fs-5 fw-bolder" htmlFor="city">
              Choose a Category
            </label>
            <select
              id="city"
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option selected value="1">
                Cleaning
              </option>
              <option value="2">Mounting</option>
              <option value="3">Delivery</option>
            </select>
            <h1 className="fw-bold d-inline-block mx-2">$34</h1>
            <span>/Hour</span>
            <br />
            <button className="btn btn-primary">Get Started</button>
            <p>Already have an account?</p>
            <Link to="/LogInOrSignUp" className="btn btn-primary">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BecomeATasker
