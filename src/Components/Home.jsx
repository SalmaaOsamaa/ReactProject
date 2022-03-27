import React from 'react'
import GetStarted from './GetStarted'
import Header from './Header'
import TaskCards from './TaskCards'
import CheckTaskers from './CheckTaskers'





function Home() {
 
  

  return (
    <>
              
               <Header />
              <TaskCards />
              <CheckTaskers/>
                <GetStarted />
    </>
  )
}

export default Home