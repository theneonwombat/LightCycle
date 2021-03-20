import React from "react";
import { Route } from 'react-router-dom';

import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavBarContainer from './nav/nav_container';
import Splash from './splash/splash';

const App = () => (
  
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/splash" component={Splash} />
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
  </div>
  
);

export default App;