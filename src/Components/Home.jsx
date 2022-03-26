import React from 'react'
import GetStarted from './GetStarted'
import Header from './Header'
import TaskCards from './TaskCards'
import TaskerSlider from './tasker-slider'

function Home() {
  return (
    <>
           <Header />
                <TaskCards />
                <TaskerSlider />
                <GetStarted />
    </>
  )
}

export default Home