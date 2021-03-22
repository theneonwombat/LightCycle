import React from 'react';
import MarkerManager from '../../utils/marker_manager';

const mapOptions = {
  center: { 
    lat: 40.673842, 
    lng: -73.970083 
  }, // Grand Army Plaza
  zoom: 12
};

class PinMap extends React.Component {
  
  componentDidMount() {
    // this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.map = new google.maps.Map(document.getElementById("main-map"), mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.pins);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.pins);
  }

  render() {
    return(
      <div className="map-container" id='main-map' ref={ map => this.mapNode = map } >
        MAP
      </div>
    )
  }
}

export default PinMap;