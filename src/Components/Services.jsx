import { React, useState, useEffect } from 'react'
import ServicesCard from './ServicesCard'
import headerImg from '../assets/images/tools.jpg'
import Axios from 'axios'

export default function Services() {
  const [taskCategory, setTasks] = useState([])
  useEffect(()=>{
    Axios.get("http://localhost:4000/tasks").then((res)=>{
        console.log(res.data);
        setTasks(res.data);
    })
  }, [])
  
  return (
    <>
      <div>
        <div className="header">
        <h1 className="text-center mt-5 title">What do you need help with?</h1>
        <img
          src={headerImg}
          alt=" "
          style={{ width: '100%', height: '100vh'  }}
        />
        </div>
        <h2 className="my-4">
          Let Taskers help tackle your to-do list!
        </h2>
        <div className="container">
          <div className="d-flex justify-content-around row row-cols-3">
            {taskCategory.map(el =>
              <ServicesCard
                ID="1"
                Title={`${el.name}`}
                serviceImg={`${el.image}`}
                Description={`${el.whattoexpect}`}
                //Services={`${el.services}`}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
