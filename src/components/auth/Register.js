import React from 'react';
import { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const { name, email, password, password2 } = formData;
    
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2)
            setAlert('Passwords do not match', 'danger')
        else {
            console.log('successful')
        }
    }

    return (
        <Fragment>
            <div className='registerLoginContainer'>

                <h1 className="large text-primary">Register/ Sign Up</h1>
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
                    <Link to='/login.html'> Sign In </Link>
                </p>
            </div>
        </Fragment>
    )
};

Register.protoTypes = {
    setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(Register)
