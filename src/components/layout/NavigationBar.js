import React from 'react';

const NavigationBar = () => {
    return (
        <div>

            <nav role="menubar" className="navbar bg-dark">
                <ul id="mega-menu" role="presentation" >
                    <li id="home"  role="presentation"><a href="/" role="menuitem" aria-setsize="5" aria-posinset="1"><i className="fa fa-home"></i>Longboard Collective</a></li>
                    <li id="register"  role="presentation"><a href="/register" role="menuitem" aria-setsize="5" aria-posinset="1"><i className="fa fa-register"></i>Register</a></li>
                    <li id="login"  role="presentation"><a href="/login" role="menuitem" aria-setsize="5" aria-posinset="1"><i className="fa fa-register"></i>Login</a></li>
                </ul>
            </nav>

        </div>
    
    )
}

export default NavigationBar