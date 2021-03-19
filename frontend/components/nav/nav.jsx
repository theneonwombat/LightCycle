import React from 'react';
import { render } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({currentPlayer, currentPage, logout}) => {

  const simpleNavA = () => (

    <div className="simple-nav">

      <Link className="nav-logo" to="/splash">
        LightCycle
      </Link>

      <div className="simple-button">
        <NavLink 
        className="login-button" 
        to="/login">Log In</NavLink>
      </div>

    </div>
  );

  const simpleNavB = () => (

    <div className="simple-nav">

      <Link className="nav-logo" to="/splash">
        LightCycle
      </Link>

      <div className="simple-button">
        <NavLink 
        className="signup-button" 
        to="/signup">Sign Up</NavLink>
      </div>

    </div>
  )

  const comlpexNav = () => (
    <div className="complex-nav">

      <Link className="nav-logo" to="/splash">
        LightCycle
      </Link>

      {/* dropdowns go here */}

      <div className="logout-button">
        <button onClick={logout}>
          Sign Out
        </button>
      </div>

    </div>
    
  )
  
  return currentPlayer ? comlpexNav() : (currentPage === "/login") ? simpleNavB() : simpleNavA();
}

export default NavBar;