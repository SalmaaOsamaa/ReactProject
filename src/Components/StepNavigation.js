import {React} from "react";

export default function StepNavigation(props){

    return <>
    <div className="stepWrapper mx-5">
        {props.stepsArray.map((item,index)=>{
            return <div key={index}>
                <div className={`stepBlock mx-5${props.currentStep === index+1 ? " selected" : ""}`}>
                    <div className="circleWrapper" onClick={()=>{props.updateCurrentStep(index+1)}}>
                        
                        <div className="circle text-center">{index+1}</div>
                    </div>
                    <span className="d-none d-xl-block">{item}</span>
                </div>
            </div>
        })}
        <div className="progress"></div>
    </div>
    </>
}
