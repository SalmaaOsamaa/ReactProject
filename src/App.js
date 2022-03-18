import React from 'react'
import TaskerProfile from './tasker-profile'
import Tasker from './tasker'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import TaskerSlider from './tasker-slider'
function App() {
  return (
    <div>
      <Router>
        <Tasker />
        <Routes>
          <Route
            exact
            path="/tasker-profile"
            element={<TaskerProfile />}
          ></Route>
          <Route exact path="tasker-slider" element={<TaskerSlider />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
