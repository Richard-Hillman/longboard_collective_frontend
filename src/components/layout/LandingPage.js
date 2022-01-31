import React from 'react'

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
                            <a href='register.html' className='btn btn-primary'>Sign Up Link</a>
                            <a href='login.html' className='btn btn-light' aria-label='click here to login to an existing profile'>Login Link</a>
                        </div>
                    </div>
                </div>
            </div> 

        </section>
    )
}

export default LandingPage