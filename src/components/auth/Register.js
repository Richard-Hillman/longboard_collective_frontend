import React from 'react';
import { Fragment, useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const { name, email, password, password2 } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        if(password !== password2) {
            console.log('Passwords do not match')
        } else {
            console.log(formData)
        }
    }

    return (
        <>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>

            {/* ------------FORM START-----------  */}

            <form className="form" onSubmit={e => onSubmit(e)}>

                <div className="form-group">
                    Name:
                    <input type="text" placeholder="Name" name="name" value={name} onChange={e => onChange(e)} required />
                </div>

                <div className="form-group">
                    Email:
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} required />
                </div>

                <div className="form-group">
                    Password: Must be at least 6 characters long. 
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password} onChange={e => onChange(e)}
                        required
                    />
                </div>

                <div className="form-group">
                    Confirm Password:
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength="6"
                        value={password2} onChange={e => onChange(e)}
                        required
                    />
                </div>

                <input type="submit" className="btn btn-primary" value="Register" />

            </form>

            {/* ------------FORM END-----------  */}

            <p className="my-1">
                Already have an account?
                <a href="login.html"> Sign In</a>
            </p>
        </>
    )
}

export default Register