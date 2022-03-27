import React from 'react';
import { Card } from 'react-bootstrap';
import '../assets/css/GetStarted.css';
import img1 from '../assets/images/signup.png';
import img2 from '../assets/images/become-a-tasker-img.png';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div className='wide-container mb-5'>
            <h1 className='title2 mt-3 text-center'>Ready to get started</h1>
            <div className='row'>
                <div className='col text-center mt-3'>
                    <img src={img1} width="600px"></img>
                    <p className='font-weight-bold'>Hear that? The sweet sigh of relief. Start getting more done.</p>
                    <Link className='btn btn-primary' to='/loginorsignup' >Sign up now</Link>
                </div>
                
            </div>
        </div>
    )
}

export default GetStarted