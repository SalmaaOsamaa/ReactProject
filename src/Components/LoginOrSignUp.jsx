import React from 'react'
import logo from '../assets/images/logo.jpeg';
import '../assets/css/LoginOrSignUp.css'
import { Link } from 'react-router-dom';

function LoginOrSignUp() {
  return (
    <>
    <section className='form-background'>
    <div className="form-chooser-Con h-50">
        <form className='formSignUp2 d-flex flex-column justify-content-evenly align-item-center'>
            <img className='logo-chooser m-auto' src={logo} alt="logo"/>
            <Link className='link' to="/SignUp"><button className='main-Butt'>Sign Up</button></Link>
            <Link className='link' to="/Login"><button className='sec-Butt'>Log in</button></Link>
        <p className='text-center link'>Join your Website Now</p>
        </form>
    </div>
    </section>
    
    </>
  )
}

export default LoginOrSignUp