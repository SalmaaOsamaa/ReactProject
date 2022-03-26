import './App.css'
import NavBar from './Components/Navbar'
import Footer from './Components/Footer/Footer.jsx'
import React from 'react'
import { Navigate , BrowserRouter, Route, Routes } from 'react-router-dom'
import TaskDetails from './Components/TaskDetails'
import NotFound from './Components/NotFound'
import Services from './Components/Services'
import Tasks from './Components/Tasks'
import LoginOrSignUp from './Components/LoginOrSignUp'
import Login from './Components/Login'
import UserSignup from './Components/SignUp'
import Location from './Components/City'
import UserProfile from './Components/userProfile/UserProfile'
import SeeTaskers from './Components/seeTaskers/SeeTaskers'
import TaskRequest from './Components/TaskRequest'
import Myrequests from './Components/Myrequests'
import Home from './Components/Home'
function App() {
  function ProtectedRoute({ children }){
    return !localStorage.getItem("userData") ? <Navigate to="/login"/> :  children;
  }
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Tasks" element={<ProtectedRoute><Tasks /></ProtectedRoute>}></Route>
          <Route path="/services" element={<Services />}/>
          <Route path="/locations" element={<Location />}/>
          <Route path="/Taskers" element={<ProtectedRoute><SeeTaskers /></ProtectedRoute>}></Route>
          <Route path="/taskDetails/:id" element={<ProtectedRoute><TaskDetails /></ProtectedRoute>}></Route>
          <Route path="/taskDetails" element={<ProtectedRoute><TaskDetails /></ProtectedRoute>}></Route>
          <Route path="/loginorsignup" element={<LoginOrSignUp />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<UserSignup />}></Route>
         <Route path='/myreq' element={Myrequests}></Route>
          <Route path="/Profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>}></Route>
          <Route path='/request' element={<ProtectedRoute><TaskRequest/></ProtectedRoute>}> </Route>
        <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
