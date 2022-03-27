import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
function MyReqssss() {
    const params = useParams()
    const [requsets, setRequsets] = useState([])
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        setLoading(true)
        await axios.get("http://localhost:4000/taskrequests").then((res) => {
            setRequsets(res.data.filter((req) => {
            console.log(res);
                return req.tasker === params.id
            }));
            setLoading(false)
        })
    }
    useEffect(() => {
        getData();
    }, [])
  return (
    <>
<div className="container marginTop">
    <div className="row my-5 g-3">
    {requsets.length > 0 ? requsets.map((requset) =>    <div class="card m-4 col-md-3">
     <div class="card-body">
       <h5 class="card-title">{requset.name}</h5>
       <p>Average Price : {requset.avgPrice}$</p>
       <p class="card-text">Payment Method : {requset.paymentmethod}</p>
       <p class="card-text">Task Appointment : {requset.taskappointment}</p>
       <p class="card-text">Task Status : {requset.status}</p>
     </div>
   </div>):loading ? <div className="loading text-center"><i className='fas fa-spinner fa-spin spin text-primary'></i></div> :<h1>You Don't Have a Tasks Can show it</h1>}
    </div>
    </div>
    </>
  )
}

export default MyReqssss