import './App.css'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer/Footer.jsx'
import React from 'react'
import { Navigate , BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './Components/NotFound'
import Services from './Components/Services'
import LoginOrSignUp from './Components/LoginOrSignUp'
import Login from './Components/Login'
import UserSignup from './Components/SignUp'
import Location from './Components/City'
import UserProfile from './Components/userProfile/UserProfile'
import SeeTaskers from './Components/seeTaskers/SeeTaskers'
import TaskRequest from './Components/TaskRequest'
import Home from './Components/Home'
import UserRequests from './Components/UserRequest/UserRequests'
import MyReqssss, { RequestsCount } from './Components/MyReqssss'
import { TasksRequestsContext } from './TasksRequestsContext'
function App() {
  function ProtectedRoute({ children }){
    return !localStorage.getItem("userData") ? <Navigate to="/login"/> :  children;
  }
  return (
    <>
        <TasksRequestsContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/locations" element={<Location />}/>
          <Route path="/Taskers" element={<ProtectedRoute><SeeTaskers /></ProtectedRoute>}></Route>
          <Route path="/loginorsignup" element={<LoginOrSignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<UserSignup />}></Route>
          <Route path='/UserReq/:id' element={<UserRequests/>}></Route>
          <Route path='/TaskerReqs/:id' element={<MyReqssss/>}></Route>
          <Route path="/Profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>}></Route>
          <Route path='/request' element={<ProtectedRoute><TaskRequest/></ProtectedRoute>}> </Route>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
        
      </BrowserRouter>
      <Footer />
      </TasksRequestsContext>
    </>
  )
}

export default App
