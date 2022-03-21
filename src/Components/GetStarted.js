import React from 'react';
import { Card } from 'react-bootstrap';
import '../assets/css/GetStarted.css';
import img1 from '../assets/images/client-sign-up-img.png';
import img2 from '../assets/images/become-a-tasker-img.png';

const GetStarted = () => {
    return (
        <div className='wide-container'>
            <h1 className='title2'>Ready to get started</h1>
            <div className='container d-flex justify-content-center mt-5'>

                <div className="row">
                    <div class="col-sm-6 col-md-5 col-lg-6">
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>

                                <Card.Text>
                                    Hear that? The sweet sigh of relief. Start getting more done.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0"><Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>

                            <Card.Text>
                                Grow your own business while saving the day for busy neighbors.
                            </Card.Text>

                        </Card.Body>
                    </Card></div>
                </div>
            </div>
        </div>
    )
}

export default GetStarted