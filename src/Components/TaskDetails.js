import { React, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from '../assets/images/logo.jpg'
import Tasks from './Tasks'
import StepNavigation from './StepNavigation'

export default function TaskDetails() {
  const stepsArray = [
    'Describe your task',
    'Browse Taskers & prices',
    'Choose date & time',
    'Confirm details',
  ]
  const [currentStep, setCurrentStep] = useState(1)
  const updateCurrentStep = (step) => {
    setCurrentStep(step)
  }

  var id = useParams();
  var taskName;
  switch (parseInt(id.id)) {
    case 1:
      taskName = 'Furniture Assembly';
    break;
    case 2:
      taskName = 'Mounting';
    break;
    case 3:
      taskName = 'Home Repairs';
    break;
    case 4:
      taskName = 'Help Moving';
    break;
    case 5:
      taskName = 'Delivery';
    break;
    case 6:
      taskName = 'Cleaning';
    break;
  }
  return (
    <>
      <div>
        <div className="taskDetailsHeader bg-white px-5">
          <div className="d-flex justify-content-start mx-5">
            <Link to="/" className="logo mx-5 my-4">
               <img src={logo} alt="Logo"></img> 
            </Link>
            <div className="m-5">
              <StepNavigation
                stepsArray={stepsArray}
                currentStep={currentStep}
                updateCurrentStep={updateCurrentStep}
              />
            </div>
          </div>
          <hr style={{ height: 3 }} />
          <p className="text-center">
            <i className="bi bi-journal-plus"></i> Tell us about your task. We
            use these details to show Taskers in your area who fit your needs.
          </p>
        </div>
        <div className="container my-5 px-5">
          <h5>{taskName}</h5>
          <Tasks taskName={taskName} />
        </div>
      </div>
    </>
  )
}
