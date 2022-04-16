import React, {useState, useEffect} from 'react'

import '../assets/css/TaskCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';





const TaskCards = ({ src, alt, title, content, width, height }) => {
    const [tasks, setTasks] = useState([])

useEffect(()=>{
    Axios.get("http://localhost:4000/tasks").then((res)=>{
        console.log(res);
        setTasks(res.data);
    })
}, []) 
    return (
        <>
       
            
            <h2 className='mt-2 text-center '>Popular projects in your area</h2>
             <div className='container Task-container w-100 d-flex justify-content-center flex-wrap '>

                {tasks.map(el =>

                    <div className='row m-1 mt-4 mb-3'>

                        <div className='col-md-4 w-25'>

                            <Card className='taskCard  h-100'>
                                <Card.Img className='cardImg' variant="top" src={el.image} />
                                <Card.Body className='cardBody'>
                                    <Card.Title >Task : {el.name}</Card.Title>
                                    <Card.Text>

                                        <p><FontAwesomeIcon icon={faMoneyBill1Wave} /> avgPrice {el.avgPrice}</p>
                                    </Card.Text>
                                    <Link to={`/request/${el._id}`} variant="primary" >Check availability</Link >

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                )}
            </div> 






        </>


    )
}

export default TaskCards