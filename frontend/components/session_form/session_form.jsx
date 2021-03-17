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
    return(
      <ul>

        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}

      </ul>
    );
  }

  render() {


    return (
      <div className="login-form-container">

        <form onSubmit={this.handleSubmit} className="login-form-box">

          <h1>{this.props.formType}</h1>

          <div className="error-box">{this.renderErrors()}</div>

          <div className="login-form">

            <br/>
            <label>Playername:
              <input type="text"
                value={this.state.playername}
                onChange={this.update('playername')}
                className="login-input"
              />
            </label>

            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>

            <br/>
            <button className="session-submit" >{this.props.formType}</button>
          </div>

        </form>

      </div>
    );
  }
}

export default SessionForm;
