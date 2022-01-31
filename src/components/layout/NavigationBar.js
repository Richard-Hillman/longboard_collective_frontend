import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar bg-dark">
                <h1>
                    <Link to='index.html'><i className='fas fa-code'></i> Longboard Collective</Link>
                </h1>
                <ul>
                    <li><Link to='profiles.html'>Developers Of LBC</Link></li>
                    <li><Link to='register.html'>Register</Link></li>
                    <li><Link to='login.html'>Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBar