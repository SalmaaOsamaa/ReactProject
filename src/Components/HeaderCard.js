import React from 'react'
import { Link } from 'react-router-dom'
import { Typeahead } from 'react-bootstrap-typeahead'
import { useState } from 'react'
import styled from 'styled-components'
const HeaderText = styled.div`
  background-color: white;
  border-radius: 4px;
  width:750px;
`
const HeaderSearch = styled.div`
  text-align: center;
`
const TasksTags = styled.div`
  margin: 0 auto;
  padding: 10px;
  text-align: left;
`
const items = [
  'Cleaning',
  'Assembly',
  'Delivery',
  'Mounting',
  'Painting',
  'YardWork',
  'Minor Repairs',
]
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
  return (
    <>
      <HeaderText className='container   p-5 m-auto center'>
        <div className="row">
          <div className="col">
            <h1 className="text-center">
              Help when you need it, at your fingertips
            </h1>
            <p className="text-center">
              Get help around the house from a trusted Tasker. From handyman
              work and furniture assembly to moving, yardwork, and more.
            </p>
          </div>
        </div>
        <HeaderSearch>
          <div className="row">
            <div className="col">
              <Typeahead
                id="header-Search"
                placeholder="Find Your Task..."
                options={items}
              />
            </div>
            <div className="col-3">
              <Link
                to={{
                  pathname: '/taskDetails',
                }}
                className="btn btn-primary "
              >
                Get a Tasker
              </Link>
            </div>
          </div>
          <div className="row ">
            <div className="col ">
              <TasksTags>
                {tasks.slice(0, visible).map((c) =>
                  c.title == 'See More' ? (
                    <Link
                      key={c.id}
                      to=""
                      onClick={seeMoreHandler}
                      className="btn btn-primary"
                    >
                      {c.title}
                    </Link>
                  ) : (
                    <Link
                      key={c.id}
                      to={`taskDetails/${c.id}`}
                      className="btn btn-primary m-1"
                    >
                      {c.title}
                    </Link>
                  ),
                )}
              </TasksTags>
            </div>
          </div>
        </HeaderSearch>
      </HeaderText>
    </>
  )
}
export default HeaderCard
