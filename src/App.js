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









function App() {

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Header />
          <TaskCards />
          <GetStarted />

        </Route>
        <div className='container signupContainer  mt-3'>

          <div className='row '>
            <div className='col-md-5'>
              <UserFormLogin />

            </div>
          </div>
        </div>


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

export default App;
