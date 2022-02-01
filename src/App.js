import React, { Fragment } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import LandingPage from './components/layout/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

// ----------------redux---------------
import { Provider } from 'react-redux';
import store from './store';


const App = () => (
  <Provider store={store}> 
    <Fragment>
      <Router>

        <Fragment>
          <NavigationBar/> 
        </Fragment>
        
        <Routes>
          <Route path='/' element= { <LandingPage/> } />
            <Fragment>
                <Route path='/register' element= { <Register/> } />
                <Route path='/login' element= { <Login/> } />
            </Fragment>
        </Routes>

      </Router>
    </Fragment>
  </Provider>

);

export default App;
