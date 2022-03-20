import './App.css'
import Header from './Components/Header'
import HeaderCard from './Components/HeaderCard'
import Welcome from './Components/Welcome'
import TaskCards from './Components/TaskCards'
import GetStarted from './Components/GetStarted'
import Footer from './Components/Footer/Footer.jsx'
import './Components/Conditions/Conditions.jsx'
import Taskers from './Components/Taskers/Taskers.jsx'
import React from 'react'
import TaskerProfile from './tasker-profile'
import Tasker from './tasker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeTasks from './components/HomeTasks'
import TaskDetails from './components/TaskDetails'
import NotFound from './components/NotFound'
import Services from './components/Services'
import TaskerSlider from './tasker-slider'
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TaskCards />}></Route>
          <Route path="/Welcome" element={<Welcome />}></Route>
          <Route path="/Taskers" element={<Taskers />}></Route>
          <Route path="/start" element={<GetStarted />}></Route>
          <Route path="/featured" element={<TaskerSlider />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
    //   // <Router>
    //   //   <div className="App">
    //   //     <Route exact path="/">
    //   //       <Header />
    //   //       <TaskCards />
    //   //       <GetStarted />
    //   //       <Tasker />

    //   //     </Route>

    //   //     <div>
    //   //       <Switch>
    //   //         <Route path="/Welcome">
    //   //           <Welcome />
    //   //         </Route>
    //   //         <div>
    //   //              <Router>
    //   //                <Routes>
    //   //                  <Route exact path="tasker-slider" element={<TaskerSlider />}></Route>
    //   //                </Routes>
    //   //              </Router>
    //   //            </div>
    //   //       </Switch>
    //   //     </div>

    //   //   </div>
    //   //   <Footer/>
    //   // </Router>

    //   <BrowserRouter>
    //   <Switch>
    //     <Route path="/" exact component={HomeTasks}/>
    //     <Route path="/taskDetails" exact component={TaskDetails}/>
    //     <Route path="/services" exact component={Services}/>
    //     <Route path={"*"} exact component={NotFound}/>
    //   </Switch>
    //   </BrowserRouter>
    //   </>
  )
}

export default App
