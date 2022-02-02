import React from 'react';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'; 

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const { email, password } = formData;
    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async e => {
        e.preventDefault();
        console.log('successful');
        }

    return (
        <Fragment>
            <div className='registerLoginContainer'>

                <h1 className="large text-primary">Login</h1>
                <p className="lead"><i className="fas fa-user"></i> Sign into an existing account</p>

                {/* ------------FORM START-----------  */}

                <form className="form" onSubmit={e => onSubmit(e)}>

                    <div className="form-group">
                        Email:
                        <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                    </div>

                    <div className="form-group">
                        Password:
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            minLength="6"
                            value={password} onChange={e => onChange(e)}
                            required
                            />
                    </div>

                    <input type="submit" className="btn btn-primary" value="Login" />

                </form>

                {/* ------------FORM END-----------  */}

                <p className="my-1">
                    Don't have an account yet?  
                    <Link to='/login.html'> Register/ Sign Up </Link>
                </p>
            </div>
        </Fragment>
    )
}

export default Login;
