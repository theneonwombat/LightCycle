import React from "react";
import { Route } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavBarContainer from './nav/nav_container';
import Splash from './splash/splash';

import Dashboard from './dashboard/dashboard'

const App = () => (
  
<div>

    <Route path="/" component={NavBarContainer} />
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/splash" component={Splash} />
    {/* <AuthRoute exact path="/" component={Splash}>
      <Redirect to='/splash' />
    </AuthRoute> */}
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/dashboard" component={Dashboard} />
  </div>
  
);

export default App;