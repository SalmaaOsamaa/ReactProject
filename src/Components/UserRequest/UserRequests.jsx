import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function UserRequests() {
    let params = useParams();
    const [requsets, setRequsets] = useState([])
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        // setLoading(true)
        await axios.get("http://localhost:4000/tasks").then((res) => {
            setRequsets(res.data.filter((req) => {
                return req._id === params.id
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
       <div className="row my-5">
    {requsets.length > 0 ? requsets.map((requset) =>    <div class="card col-md-4">
    <img src={requset.image} class="card-img-top" alt="..."/>
     <div class="card-body">
       <h5 class="card-title">{requset.name}</h5>
       <p>Average Price : {requset.avgPrice}$</p>
       <p class="card-text">{requset.whattoexpect}</p>
     </div>
   </div>):loading ? <div className="loading text-center"><i className='fas fa-spinner fa-spin spin text-primary'></i></div> :<h1>You Don't Have a Tasks Can show it</h1>}
    </div>
    </div>
    </>
  )
}

export default UserRequests

