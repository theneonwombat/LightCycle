import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { login } from '../../actions/session_actions'

class Splash extends React.Component {

  constructor(props) {
    super(props)

    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e) {
    e.preventDefault();
    const player = { playername: 'Flynn', password: 'password123'}
    dispatch(login(player));
  }

  render(){

    return(
      <div className="splash">

        <h1 className="splash-title">The #4 app for biking places</h1>
        

        <div className="splash-content">

          <div className="splash-left">
            <img className ="splash-image" src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/show_simple/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg" alt=""/>
          </div>

          <div className="splash-right">
            <div className="splash-button-div">

              <a href="https://www.linkedin.com/in/alec-caro-5a713a5b/" 
                rel="noreferrer" 
                target="_blank" 
                className="splash-button btn">
                LinkedIn
              </a>

              <a href="https://github.com/theneonwombat/LightCycle" 
                rel="noreferrer" 
                target="_blank" 
                className="splash-button btn">
                GitHub
              </a>

              <button onClick={this.demoLogin} className="splash-button splash-demo-button">Demo</button>
              <p className="button-subtitle">there's a little bit of text on the bottom</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-col-1" >
            <p className="footer-logo" >
            LightCycle
            </p>
            <p className="copyright">
              ©2021 neonwombat 
            </p>
          </div>

          {/* links could go here if I had any */}
        </div>

      </div>
    )
  }
}

export default Splash;