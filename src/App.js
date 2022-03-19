import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import HeaderCard from './Components/HeaderCard';
import Welcome from './Components/Welcome';
import TaskCards from './Components/TaskCards';
import GetStarted from './Components/GetStarted';
import Footer from './Components/Footer/Footer.jsx'
import './Components/Conditions/Conditions.jsx'
import Taskers from './Components/Taskers/Taskers.jsx'
import React from 'react'
import TaskerProfile from './tasker-profile'
import Tasker from './tasker'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import TaskerSlider from './tasker-slider'
function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TaskCards />}>
          </Route>
          <Route path="/Welcome" element={< Welcome />}>
          </Route>
          <Route path="/Taskers" element={<Taskers />}>
          </Route>
          <Route path="/start" element={<GetStarted />}>
          </Route>
          <Route path="/featured" element={<TaskerSlider />}>

          </Route>


        </Routes>
      </BrowserRouter>
      <Footer />
    </>
    // <Router>
    //   <div className="App">
    //     <Route exact path="/">
    //       <Header />
    //       <TaskCards />
    //       <GetStarted />
    //       <Tasker />

    //     </Route>



    //     <div>
    //       <Switch>
    //         <Route path="/Welcome">
    //           <Welcome />
    //         </Route>
    //         <div>
    //              <Router>
    //                <Routes>
    //                  <Route exact path="tasker-slider" element={<TaskerSlider />}></Route>
    //                </Routes>
    //              </Router>
    //            </div>
    //       </Switch>
    //     </div>


    //   </div>
    //   <Footer/>
    // </Router>


  );

}

export default App
