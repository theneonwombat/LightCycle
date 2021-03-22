import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({currentPlayer, currentPage, logout}) => {

  const simpleNavA = () => (

    <div className="simple-nav">

      <Link className="nav-logo" to="/splash">
        LightCycle
      </Link>

      
      <NavLink className="login-button" to="/login">Log In</NavLink>
      

    </div>
  );

  const simpleNavB = () => (

    <div className="simple-nav">

      <Link className="nav-logo" to="/splash">
        LightCycle
      </Link>

      
      <NavLink className="signup-button" to="/signup">Sign Up</NavLink>
      

    </div>
  )

  const comlpexNav = () => (
    <div className="complex-nav">

      <Link className="nav-logo" to="/splash">
        LightCycle
      </Link>


      <h3 className="welcome" >Welcome, {currentPlayer.playername}!</h3>
      {/* dropdowns go here */}

      <div className="signout-button">
        <button onClick={logout}>
          Sign Out
        </button>
      </div>

    </div>
    
  )
  
  return currentPlayer ? comlpexNav() : (currentPage === "/login") ? simpleNavB() : simpleNavA();
}

export default NavBar;