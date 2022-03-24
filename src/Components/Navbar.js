import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpeg'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary fixed-top justify-content-center">
        <Link to="/" className="navbar-brand mb-0 h1">
          <img className="w-100 rounded-3" src={logo} alt="logo" width="40" height="40" />
        </Link>
        <div>
          <Link to="/Locations" className="btn btn-primary">
            Locations
          </Link>
          <Link to="/Services" className="btn btn-primary">
            Services
          </Link>
          <Link to="/LogInOrSignUp" className="btn btn-primary">
            Login / Sign up
          </Link>
          <Link to="/BecomeATasker" className="btn btn-primary">
            Become a Tasker
          </Link>
        </div>
      </nav>
    </>
  )
}
export default Navbar
