import React from 'react'
import '../assets/css/Header.css';
import { Link } from 'react-router-dom';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useState } from 'react';
const HeaderCard = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Furniture Assembly'

        },
        {
            id: 2,
            title: 'Mounting'
        },
        {
            id: 3,
            title: "See More"
        },
        {
            id: 4,
            title: 'Help Moving'
        },
        {
            id: 5,
            title: 'Delivery'
        },
        {
            id: 6,
            title: 'Cleaning'
        },

    ]);
    const [visible, setVisible] = useState(3);
    const seeMoreHandler = () => {
        setTasks(tasks.filter(r => r.title != "See More"))
        setVisible(tasks.length)
    }
    const items = ["Cleaning", "Assembly", "Delivery", "Mounting", "Painting", "YardWork", "Minor Repairs"]
    return (
        <>
            <div className='container Header-text'>
                <div class="row">
                    <div class="col">
                        <h1 className='Tasker-Header'>Help when you need it, at your fingertips</h1>
                        <p className='Tasker-body'>Get help around the house from a trusted Tasker. From handyman work and furniture assembly to moving, yardwork, and more.</p>


                    </div>

                </div>
                <div class="row">
                    <div class="col-9">
                        <div className='Task-search'>

                            <Typeahead
                                className='Task-form'
                                placeholder="Find Your Task..."
                                options={items}

                            />
                        </div>
                    </div>
                    <div class="col-3">
                        <Link to={{
                            pathname: "/Welcome",

                        }} class="btn btn-primary ">Search A task</Link>
                    </div>

                </div>

                <div class="row ">
                    <div className='col '>
                        {
                            tasks.slice(0, visible).map(c =>
                                c.title == "See More" ? <Link to="" onClick={seeMoreHandler} className='btn btn-link'>{c.title}</Link>
                                    : <Link key={c.id} to={{
                                        pathname: "/Welcome",
                                        state: { taskName: c.id }
                                    }} className='btn btn-link'>{c.title}</Link>


                            )}
                    </div>
                </div>
            </div>
        </>

    )
}

export default HeaderCard