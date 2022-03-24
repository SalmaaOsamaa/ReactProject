import React from 'react'
import logo from '../assets/images/logo.jpeg';
import '../assets/css/LoginOrSignUp.css'
import { Link } from 'react-router-dom';

function LoginOrSignUp() {
  return (
    <>
    <section className='form-background'>
    <div className="form-Con h-50">
      <img className='logo-chooser' src={logo} alt="logo"/>
        <form className='w-75 d-flex flex-column justify-content-evenly align-item-center'>
            <Link className='link' to="/SignUp"><button className='main-Butt'>Sign Up</button></Link>
            <Link className='link' to="/Login"><button className='sec-Butt'>Log in</button></Link>
        <p className=' py-3 text-center'>By signing up you agree to our <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a> .</p>
        </form>
    </div>
    </section>
    
    </>
  )
}

export default LoginOrSignUp