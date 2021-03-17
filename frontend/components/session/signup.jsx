import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playername: "",
      email: "",
      password: "",
    }

  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.createNewPlayer(this.state)
      .then( () => this.props.history.push())
  }

  render() {
    return(
      <div>SIGNUP COMPONENT</div>
    )
  }
}

export default Signup;