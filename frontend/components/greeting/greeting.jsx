import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentPlayer, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentPlayer.playername}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentPlayer ? personalGreeting() : sessionLinks();
};

export default Greeting;