import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";
import { FaGithub } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai'

const NavBar = ({currentPlayer, currentPage, logout}) => {

  const simpleNavA = () => (
    <div className="all-nav" >
      <div className="simple-nav">

        <Link id="nav-logo" to="/splash">
          LightCycle
        </Link>

        <NavLink className="login-button btn" to="/login">Log In</NavLink>
        
      </div>
    </div>
  );

  const simpleNavB = () => (
    <div className="all-nav" >
      <div className="simple-nav">

        <Link id="nav-logo" to="/splash">
          LightCycle
        </Link>

        <NavLink className="signup-button btn" to="/signup">Sign Up</NavLink>
        
      </div>
    </div>
  )

  const comlpexNav = () => (
    <div className="all-nav" >
      <div className="complex-nav">
        <div className="nav-left" >
          <Link id="nav-logo" to="/splash">
            LightCycle
          </Link>
          <a href="https://github.com/theneonwombat/LightCycle" 
            rel="noreferrer" 
            target="_blank"
            className="nav-icon">
            <FaGithub />  
          </a>
          <a href="https://www.linkedin.com/in/alec-caro-5a713a5b/" 
            rel="noreferrer" 
            target="_blank"
            className="nav-icon">
            <AiOutlineLinkedin />  
          </a>
        </div>

        <div className="nav-right" >

            <button 
            className="signout-button"
            onClick={logout}>
              Sign Out
            </button>
          
          <Link className="new-course-button" to={`/courses/new`} >
            New Course <IoAddCircleOutline />
          </Link>

        </div>
      </div>
    </div>
    
  )
  
  return currentPlayer ? comlpexNav() : (currentPage === "/login") ? simpleNavB() : simpleNavA();
}

export default NavBar;