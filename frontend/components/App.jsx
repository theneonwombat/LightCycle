import React from "react";
import { Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../utils/route_util';

import NavBarContainer from './nav/nav_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Splash from './splash/splash';
import NewCourseContainer from './course/new_course_container';


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
    <Route exact path="/dashboard" component={NewCourseContainer} />
  </div>
  
);

export default App;