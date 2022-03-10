import React from 'react'
import './Footer.css'
import googleImg from './google_play_badge-49e6ea4ba78ca19b1246873b3369891cb6e289515c11418f1fce4cb3a694c18a.svg'
import appleImg from './appstore_badge-86c9954e1457d27db013c1f10a96ffaba845e5af7765c4ef9df4ac1549e47d67.svg'

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="container">
    <p className='icons'>Follow us! We're friendly : <span><i class="fa-brands fa-facebook-square"></i></span> | <span><i class="fa-brands fa-twitter"></i></span> | <span><i class="fa-brands fa-instagram-square"></i></span></p> 
    
    
    
        <div className="row">
            <div className="col-md-4">
                <ul>
                    <li>Discover</li>
                    <li><a className='link' href="/">Become a Tasker</a></li>
                    <li><a className='link' href="/">Services By City</a></li>
                    <li><a className='link' href="/">All Services</a></li>
                    <li><a className='link' href="/">Buy a Gift Card</a></li>
                    <li><a className='link' href="/">Elite Taskers</a></li>
                    <li><a className='link' href="/">Help</a></li>
                </ul>
                </div>
            <div className="col-md-4">
                <ul>
                    <li>Company</li>
                    <li><a className='link' href="/">About Us</a></li>
                    <li><a className='link' href="/">Careers</a></li>
                    <li><a className='link' href="/">Press</a></li>
                    <li><a className='link' href="/">TaskRabbit for Good</a></li>
                    <li><a className='link' href="/">Blog</a></li>
                    <li><a className='link' href="/">Terms & Privacy</a></li>
                    <li><a className='link' href="/"> California Consumer Notice</a></li>
                    <li><a className='link' href="/">Do Not Sell My Personal Information</a></li>
                </ul>
                </div>
            <div className="col-md-4">
                
            <h3>Download our app</h3>
            <p className="app">Tackle your to-do list wherever you are with our mobile app.</p> 
                <img src={googleImg} alt="google" />
                <img src={appleImg} alt="apple" />
                </div>
            </div>
            </div>
        </div>
    
    </>
  )
}

export default Footer