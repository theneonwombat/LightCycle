import React from 'react';
import PinMap from '../pin_map/pin_map';
import PinIndex from '../pins_index/pin_index'

class Search extends React.Component {


  render() {
    
    return(
      <div>
        <PinMap pins={this.props.pins} />
        <PinIndex pins={this.props.pins} fetchPins={this.props.fetchPins} />
      </div>
    )
  }
}

export default Search;