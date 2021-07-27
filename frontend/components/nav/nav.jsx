import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";

const NavBar = ({currentPlayer, currentPage, logout}) => {

  const simpleNavA = () => (

    <div className="simple-nav">

      <Link id="nav-logo" to="/splash">
        LightCycle
      </Link>

      <NavLink className="login-button" to="/login">Log In</NavLink>
      
    </div>
  );

  const simpleNavB = () => (

    <div className="simple-nav">

      <Link id="nav-logo" to="/splash">
        LightCycle
      </Link>

      <NavLink className="signup-button" to="/signup">Sign Up</NavLink>
      
    </div>
  )

  const comlpexNav = () => (
    <div className="all-nav" >
      <div className="complex-nav">
        <div className="nav-left" >
          <Link id="nav-logo" to="/splash">
            LightCycle
          </Link>
        </div>

        <div className="nav-right" >

            <button 
            className="signout-button"
            onClick={logout}>
              Sign Out
            </button>
          
          <Link className="new-course-button" to={`/courses/new`} >
            <IoAddCircleOutline />
          </Link>

        </div>
      </div>
    </div>
    
  )
  
  return currentPlayer ? comlpexNav() : (currentPage === "/login") ? simpleNavB() : simpleNavA();
}

export default NavBar;