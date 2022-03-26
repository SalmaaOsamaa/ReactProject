import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpeg'
import { useNavigate } from 'react-router'
function Navbar() {
  let navigate = useNavigate();
  let userData = JSON.parse(localStorage.getItem("userData")) 
  const removeUser = () => {
    localStorage.removeItem("userData");
    navigate('/LogInOrSignUp' , {replace : true});
  }
  return (
    <>
      <nav className="navbar navbar-dark bg-primary fixed-top justify-content-center">
        <Link to="/" className="navbar-brand mb-0 h1">
          <img className="w-100 rounded-3" src={logo} alt="logo" width="40" height="40" />
        </Link>
        <div className='d-flex'>
          <Link to="/Locations" className="btn btn-primary">
            Locations
          </Link>
          <Link to="/Services" className="btn btn-primary">
            Services
          </Link>
          {!userData? <Link to="/LogInOrSignUp" className="btn btn-primary">
            Login / Sign up
          </Link> : ''}
          <Link to="/BecomeATasker" className="btn btn-primary">
            Become a Tasker
          </Link>
          {userData ? <div className='userNav'>
            <Link to="/Profile"><div className='profileNav d-flex justify-content-center align-items-center'>
          <img src={userData.image} className="userImage" alt="" />
          <p>{userData.name}</p>
          </div></Link>
          <button onClick={removeUser} className='btn btn-warning'>Log Out</button>
          </div> : ''}
        </div>
      </nav>
    </>
  )
}
export default Navbar
