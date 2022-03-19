import { React, useState } from "react";

export default function Tasks(props){

    const [userData, setUserData] = useState({
        street:"",
        unit:"",
        endStreet:""
    });
    const [errors, setErrors] = useState({
        streetErr:"",
        endStreetErr:""
    });

    const changeData = (e) =>{
        if(e.target.name === "street"){
            setUserData({
                ...userData,
                street: e.target.value
            })
            setErrors({
                ...errors,
                streetErr:
                e.target.value.length === 0 ? "Location is required"
                :null
            })
        }else if(e.target.name === "unit"){
            setUserData({
                ...userData,
                unit: e.target.value
            })
        }else if(e.target.name === "endStreet"){
            setUserData({
                ...userData,
                endStreet: e.target.value
            })
            setErrors({
                ...errors,
                endStreetErr:
                e.target.value.length === 0 ? "Location is required"
                :null
            })
        }
    };

    const showEndAddress = ()=>{
        if(props.taskName === "Help Moving" || props.taskName === "Delivery"){
            return true;
        }
        return false;
    }
    const showTaskOptionsAndDetails = ()=>{
        if(props.taskName === "Mounting" || props.taskName === "Help Moving" || props.taskName === "Cleaning" || props.taskName === "Delivery" || props.taskName === "Home Repairs"){
            return true;
        }
        return false;
    }

    const [done, setDone] = useState(false);
    const showNext = ()=>{
        if(done === false){
            setDone(true);
            if(props.taskName !== "Help Moving" && props.taskName !== "Delivery"){
                showNext1();
            }
        }else{
            setDone(false);
            if(props.taskName !== "Help Moving" && props.taskName !== "Delivery"){
                showNext1();
            }
        }
    }
    const [done1, setDone1] = useState(false);
    const showNext1 = ()=>{
        if(done1 === false){setDone1(true);}
        else{setDone1(false);}
    }
    const [done2, setDone2] = useState(false);
    const showNext2 = ()=>{
        if(done2 === false){setDone2(true);}
        else{setDone2(false);}
    }

    return <>
    <div className="taskDetailsForm">
        <h6 onClick={()=>{showNext()}}>YOUR TASK LOCATION</h6>
        <div className={`${done ? "d-none" : ""}`}>
            <div className="row my-4">
                <div className="col-10">
                    <input type="text" className="form-control py-2" name="street" value={userData.street} onChange={(e)=>{changeData(e)}} placeholder="Enter street address"/>
                    <div className="text-danger">{errors.streetErr}</div>
                </div>
                <div className="col-2"><input type="text" className="form-control py-2" name="unit" value={userData.unit} onChange={(e)=>{changeData(e)}} placeholder="Unit or Apt #"/></div>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-3"><input type="button" className="btn px-4 py-2" value="Continue" onClick={()=>{showNext()}}/></div>
        </div>
    </div>
    <div className={`taskDetailsForm${showEndAddress() ? "" : " d-none"}`}>
        <h6 onClick={()=>{showNext1()}}>END ADDRESS</h6>
        <div className={`${done ? "" : "d-none"}${done1 ? "d-none" : ""}`}>
            <div className="row my-4">
                <div className="col-10">
                    <input type="text" className="form-control py-2" name="endStreet" value={userData.endStreet} onChange={(e)=>{changeData(e)}} placeholder="Enter street address"/>
                    <div className="text-danger">{errors.endStreetErr}</div>
                </div>
                <div className="col-2"><input type="text" className="form-control py-2" name="unit" value={userData.unit} onChange={(e)=>{changeData(e)}} placeholder="Unit or Apt #"/></div>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-3"><input type="button" className="btn px-4 py-2" value="Continue" onClick={()=>{showNext1()}}/></div>
        </div>
    </div>
    <div className={`taskDetailsForm${showTaskOptionsAndDetails() ? "" : " d-none"}`}>
        <h6 onClick={()=>{showNext2()}}>TASK OPTIONS</h6><br/>
        <div className={`${done1 ? "" : "d-none"}${done2 ? "d-none" : ""}`}>
            <h5>How big is your task?</h5>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions"/>
                <label class="form-check-label">Small - Est. 1 hr</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions"/>
                <label class="form-check-label">Medium - Est. 2-3 hrs</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions"/>
                <label class="form-check-label">Large - Est. 4+ hrs</label>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-3"><input type="button" className="btn px-4 py-2" value="Continue" onClick={()=>{showNext2()}}/></div>
        </div>
    </div>
    <div className={`taskDetailsForm${showTaskOptionsAndDetails() ? "" : " d-none"}`}>
        <h6>TELL US THE DETAILS OF YOUR TASK</h6>
        <div className={`${done2 ? "" : "d-none"}`}>
            <p>Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Don't worry, you can edit this later.</p>
            <textarea class="form-control" rows="3" placeholder="Provide a summary of what you need done for your Tasker. Be sure to include details like the size of your space, any equipment/tools needed, and how to get in."/>
            <p>If you need two or more Taskers, please post additional tasks for each Tasker needed.</p>
            <div className="d-flex justify-content-center mt-5 mb-3"><input type="button" className="btn px-4 py-2" value="See Taskers & Prices"/></div>
        </div>
    </div>
    <div className={`taskDetailsForm${props.taskName === "Furniture Assembly" ? "" : " d-none"}`}>
        <h6>YOUR ITEMS</h6><br/>
        <div className={`${done ? "" : "d-none"}`}>
            <h5>What type of furniture do you need assembled or disassembled?</h5>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault"/>
                <label class="form-check-label">IKEA furniture items only</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault"/>
                <label class="form-check-label">Other furniture items (non-IKEA)</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault"/>
                <label class="form-check-label">Both IKEA and non-IKEA furniture</label>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-3"><input type="button" className="btn px-4 py-2" value="Continue"/></div>
        </div>
    </div>
    </>
}