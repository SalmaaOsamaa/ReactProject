import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderCard from './Components/HeaderCard';
import Welcome from './Components/Welcome';
import TaskCards from './Components/TaskCards';
import GetStarted from './Components/GetStarted';
import UserFormLogin from './Components/UserFormLogin';
import './assets/css/UserForm.css';
import Footer from './Components/Footer/Footer.jsx'
import './Components/Conditions/Conditions.jsx'
import './Components/Taskers/Taskers.jsx'
import React from 'react'
import TaskerProfile from './tasker-profile'
import Tasker from './tasker'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TaskerSlider from './tasker-slider'
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Header />
          <TaskCards />
          <GetStarted />
          <Tasker />

        </Route>
        


        <div>
          <Switch>
            <Route path="/Welcome">
              <Welcome />
            </Route>
          </Switch>
        </div>


      </div>
      <Footer/>
    </Router>
              // <div className="container">
              // <div className="row">
              //   <div className="col-md-4"><Conditions/></div>
              //   <div className="col-md-8"><Taskers/></div>
              //   </div>
              // </div>
  );

}

export default App
