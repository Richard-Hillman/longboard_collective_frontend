import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <section>
            <div className='landing'>
                <div className='dark-overlay'>
                    <div className='landing-inner'>
                        <h1 className='x-large'>Longboard Collective</h1>
                        <p className='lead'>
                            Create a Longboarder profile here. Share where you shred and connect with other longboarders in your area! 
                        </p> 
                        <div className='buttons'>
                            <Link to='/register' className='btn btn-primary'>Sign Up Link</Link>
                            <Link to='/login' className='btn btn-light' aria-label='click here to login to an existing profile'>Login Link</Link>
                        </div>
                    </div>
                </div>
            </div> 

        </section>
    )
}

export default LandingPage