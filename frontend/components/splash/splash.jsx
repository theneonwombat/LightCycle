import React from 'react';
// import { render } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

const Splash = () => (
  <div className="splash">

    <h1 className="splash-title">Oh Hey There</h1>
    
    <h2 className="splash-subtitle">didn't see you come in</h2>

    <div className="splash-content">

      <div className="splash-left">
        <img className ="splash-image" src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg" alt=""/>
      </div>

      <div className="splash-right">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        {/* <NavLink>Button A</NavLink>
        <NavLink>Button B</NavLink>
        <NavLink>Button C</NavLink> */}
      </div>

    </div>

  </div>
)

export default Splash;