import React from 'react'
import '../assets/css/TaskCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';





const TaskCards = ({ src, alt, title, content, width, height }) => {
    const cardContent = [
        {
            id: 1,
             img: require('../images/task1.jpg'),
            title: 'Assemble Table / Desk',
            price: 'Avg.price 80-100EGP'
        },
        {
            id: 2,
             img: require('../images/Task2.jpg'),
            title: 'Mount Tv or a Mirror',
            price: 'Avg.price 60-92EGP'
        },
        {
            id: 3,
             img: require('../images/Task3.jpg'),
            title: 'Move boxes using A truck',
            price: 'Avg.price 100-200EGP'
        },
        {
            id: 4,
             img: require('../images/Task4.jpg'),
            title: 'Clean bathroom or a Kitchen',
            price: 'Avg.price 200-300EGP'
        },
        {
            id: 5,
             img: require('../images/Task5.jpg'),
            title: 'Plumbing a toilet',
            price: 'Avg.price 60-100EGP'
        },
        {
            id: 6,
             img: require('../images/Task6.jpg'),
            title: 'Office / Home delivery',
            price: 'Avg.price 40-50EGP'
        },
        {
            id: 7,
             img: require('../images/Task7.jpg'),
            title: 'Lifting Furniture',
            price: 'Avg.price 100-200EGP'
        }, {
            id: 8,
             img: require('../images/Task8.jpg'),
            title: 'Planting your garden',
            price: 'Avg.price 100-150EGP'
        }
    ]
    return (
        <>
            <h2>Popular projects in your area</h2>
            <div className='container Task-container w-100  d-flex justify-content-center flex-wrap '>

                {cardContent.map(el =>

                    <div className='row m-1 mt-4 mb-3'>

                        <div className='col-md-4 w-25'>

                            <Card className='taskCard  h-100'>
                                <Card.Img className='cardImg' variant="top" src={el.img} />
                                <Card.Body className='cardBody'>
                                    <Card.Title >{el.title}</Card.Title>
                                    <Card.Text>

                                        <p><FontAwesomeIcon icon={faMoneyBill1Wave} /> {el.price}</p>
                                    </Card.Text>
                                    <Link to={{
                                        pathname: "/Welcome",
                                        state: { taskName: el.id }
                                    }} variant="primary">Check availability</Link >

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