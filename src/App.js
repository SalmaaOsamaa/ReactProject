import './App.css'
import Header from './Components/Header'
import HeaderCard from './Components/HeaderCard'
import TaskCards from './Components/TaskCards'
import GetStarted from './Components/GetStarted'
import Footer from './Components/Footer/Footer.jsx'
import './Components/Conditions/Conditions.jsx'
import Taskers from './Components/Taskers/Taskers.jsx'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskDetails from './Components/TaskDetails'
import NotFound from './Components/NotFound'
import Services from './Components/Services'
import TaskerSlider from './Components/tasker-slider'
import Tasks from './Components/Tasks'
function App() {
  return (
    <>
      {/* <NavBar/> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <TaskCards />
                <TaskerSlider />
                <GetStarted />
              </>
            }
          ></Route>
          <Route path="/Tasks" element={<Tasks />}></Route>
          <Route path="/Taskers" element={<Taskers />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
