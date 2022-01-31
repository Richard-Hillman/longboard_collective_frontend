import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import LandingPage from './components/layout/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

import './App.css';
import { Router } from 'react-router-dom';


const App = () => (
  <Router>

  <>
    <NavigationBar />
    <Route exact path='/' component= { LandingPage } />
    <section className='container'>
      <switch>
        <Route exact path='/register' component= { Register } />
        <Route exact path='/login' component= { Login } />
      </switch>
    </section>

  </>

  </Router>
);

export default App;
