import React from 'react'
import '../assets/css/Header.css'
import { Link } from 'react-router-dom'
import { Typeahead } from 'react-bootstrap-typeahead'
import { useState } from 'react'
const HeaderCard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Furniture Assembly',
    },
    {
      id: 2,
      title: 'Mounting',
    },
    {
      id: 3,
      title: 'See More',
    },
    {
      id: 4,
      title: 'Help Moving',
    },
    {
      id: 5,
      title: 'Delivery',
    },
    {
      id: 6,
      title: 'Cleaning',
    },
  ])
  const [visible, setVisible] = useState(3)
  const seeMoreHandler = () => {
    setTasks(tasks.filter((r) => r.title != 'See More'))
    setVisible(tasks.length)
  }
  const items = [
    'Cleaning',
    'Assembly',
    'Delivery',
    'Mounting',
    'Painting',
    'YardWork',
    'Minor Repairs',
  ]
  return (
    <>
      <div className="container Header-text">
        <div className="row">
          <div className="col">
            <h1 className="Tasker-Header">
              Help when you need it, at your fingertips
            </h1>
            <p className="Tasker-body">
              Get help around the house from a trusted Tasker. From handyman
              work and furniture assembly to moving, yardwork, and more.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <div className="Task-search text-center">
              <Typeahead
                id="header-Search"
                className="Task-form"
                placeholder="Find Your Task..."
                options={items}
              />
            </div>
          </div>
          <div className="col-3">
            <Link
              to={{
                pathname: '/Tasks',
              }}
              className="btn btn-primary "
            >
              Get a Tasker
            </Link>
          </div>
        </div>

        <div className="row ">
          <div className="col ">
            {tasks.slice(0, visible).map((c) =>
              c.title == 'See More' ? (
                <Link
                  key={c.id}
                  to=""
                  onClick={seeMoreHandler}
                  className="btn btn-link"
                >
                  {c.title}
                </Link>
              ) : (
                <Link
                key={c.id}
                to={
                  `taskDetails/${c.id}`
                }
                className="btn btn-link"
              >
                {c.title}
              </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderCard
