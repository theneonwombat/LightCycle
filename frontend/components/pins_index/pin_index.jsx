import React from 'react';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.fetchPins();
  }
  
  render() {
    let pins = this.props.pins
    
    return(
      <div>
        {pins.map((pin) => <li key={pin.id} >{pin.lat}, {pin.lng}, {pin.course_id}</li>)}
      </div>
    )
      
  }
}

export default PinIndex;