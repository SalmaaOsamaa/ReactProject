import './App.css'
import NavBar from './Components/Navbar'
import Header from './Components/Header'
import HeaderCard from './Components/HeaderCard'
import TaskCards from './Components/TaskCards'
import GetStarted from './Components/GetStarted'
import Footer from './Components/Footer/Footer.jsx'
import './Components/Conditions/Conditions.jsx'
import React from 'react'
import TaskerProfile from './Components/tasker-profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskDetails from './Components/TaskDetails'
import NotFound from './Components/NotFound'
import Services from './Components/Services'
import TaskerSlider from './Components/tasker-slider'
import Tasks from './Components/Tasks'
import LoginOrSignUp from './Components/LoginOrSignUp'
import Login from './Components/Login'
import UserSignup from './Components/SignUp'
import Location from './Components/City'
import BecomeATasker from './Components/BecomeATasker'
import UserProfile from './Components/userProfile/UserProfile'
import SeeTaskers from './Components/seeTaskers/SeeTaskers'
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='Margin'>
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
          <Route path="/services" element={<Services />}></Route>
          <Route path="/locations" element={<Location />}></Route>
          <Route path="/Taskers" element={<SeeTaskers />}></Route>
          <Route path="/taskDetails/:id" element={<TaskDetails />}></Route>
          <Route path="/taskDetails" element={<TaskDetails />}></Route>
          <Route path="/loginorsignup" element={<LoginOrSignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<UserSignup />}></Route>
          <Route path="/BecomeATasker" element={<BecomeATasker />}></Route>
          <Route path="/Profile" element={<UserProfile />}></Route>
          <Route></Route>
        </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
