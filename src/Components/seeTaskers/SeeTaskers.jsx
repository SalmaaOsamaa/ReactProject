import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Conditions from '../Conditions/Conditions'
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
      <div className="container">
    <div className='row justify-content-between'>
        <Conditions/>
        <Taskers taskers={taskers}/>
    </div>
    </div>
  )
}

export default SeeTaskers