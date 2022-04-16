import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Taskers from '../Taskers/Taskers'


function SeeTaskers() {
  const [taskers, setTasker] = useState([])
  async function getData() {
    let { data } = await axios.get('http://localhost:4000/taskers')
    setTasker(data.data)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
      <div className="container my-5">
    <div className='row justify-content-between'>
        {taskers.length?<Taskers taskers={taskers}/>:null}
    </div>
    </div>
  )
}

export default SeeTaskers