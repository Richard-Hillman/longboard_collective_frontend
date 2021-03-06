import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './components/layout/alert';
import './App.css';
 
import NavigationBar from './components/layout/NavigationBar';
import LandingPage from './components/layout/LandingPage';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
 
// Redux
 
import { Provider } from 'react-redux';
import store from './store';
 
const App = () => <Provider store={ store }>
                    <Router>
                      <Fragment>
                        <NavigationBar />
                        <Route exact path="/" component={ LandingPage } />
                        <Alert />
                        <Switch>
                          <Route exact path="/register" component={ Register } />
                          <Route exact path="/login" component={ Login } />
                        </Switch>
                      </Fragment>
                    </Router>
                  </Provider>

export default App;
