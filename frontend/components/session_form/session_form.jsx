import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playername: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const player = Object.assign({}, this.state);
    this.props.processForm(player);
  }

  renderErrors() {
    return (this.props.errors.length > 0) ? (
      <ul className="actually-errors">

        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}

      </ul>
    ): null;
  }

  pickBackground() {
    return (this.props.formType === 'Log In') ? (
      <img className="login-image" src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/backgrounds/cycling-01-94d1179262c99c878605a57a746e426866497d2ed406c8b98d006dc8139c4524.jpg" alt="" />
      ) : (
      <img className="login-image" src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/backgrounds/running-02-7b3e3e1e9e262cd1e9f4275c393559643c8ebcd09dd3fab0be325c1ffa763069.jpg" alt="" />
    );
  }

  render() {


    return (

      <div className="login-form-container">
        {this.pickBackground()}

        <h1 className="form-type" >{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          
          <br/>

          <div 
            className="error-box">
            {this.renderErrors()}
          </div>

          <div className="login-form">

            <br/>

            <div className="flex-div">
              <input type="text"
                value={this.state.playername}
                onChange={this.update('playername')}
                className="login-input"
                placeholder="playername"
                />
            </div>

            <br/>

            <div className="flex-div">
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="password"
                />
              </div>

            <br/>
            <div className="flex-div">
            <button className="session-submit" >{this.props.formType}</button>
            </div>
            
          </div>

        </form>

      </div>
    
    );
  }
}

export default SessionForm;
