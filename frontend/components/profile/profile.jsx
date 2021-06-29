import React from 'react';
import { Link } from 'react-router-dom';

class PlayerShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = props.player
  }

  componentDidMount() {
    this.props.fetchPlayer(this.props.playerId)
    .then( () => {
      this.setState(this.props.player);
    })
  }

  render() {
    debugger
    if (!this.state) {
      return <h1>LOADING...</h1>
    }

    return(
      <div>
        <div>AVATAR</div>
        <h1>{this.state.playername}</h1>
        <label>Location:
          <h4>{this.state.location}</h4>
        </label>
        <label>Bio:
          <p>{this.state.bio}</p>
        </label>
        
        <ul>COURSES
          
        </ul>
      </div>
    )
  }
}

export default PlayerShow;