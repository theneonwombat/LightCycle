import React from "react";
import { Switch, Redirect, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute} from '../utils/route_util';

import NavBarContainer from './nav/nav_container';

import Splash from './splash/splash';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import DashboardContainer from './dashboard/dashboard_container'
import NewCourseContainer from './course/new_course_container';
import ShowCourseContainer from './course/course_show_container'
import EditCourseContainer from './course/edit_course_container'
import PlayerShowContainer from './profile/profile_container'

const App = () => (
  <div>

    <Route path="/" component={NavBarContainer} />

    <Switch>

      <AuthRoute exact path="/splash" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
      <ProtectedRoute exact path="/courses/new" component={NewCourseContainer} />
      <ProtectedRoute exact path="/courses/:courseId" component={ShowCourseContainer} />
      <ProtectedRoute exact path="/courses/:courseId/edit" component={EditCourseContainer} />
      <ProtectedRoute exact path="/players/:playerId" component={PlayerShowContainer} />

      <AuthRoute path="/" component={Splash} />
    
    </Switch>
  </div>
  
);

export default App;