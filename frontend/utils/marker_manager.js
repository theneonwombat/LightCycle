class MarkerManager {
  constructor(map){
    this.map = map;
    this.markers = {};
  }

  updateMarkers(pins) {
    const pinsObj = {};
    
    console.log(pins);
    pins.forEach(pin => pinsObj[pin.id] = pin);
    //add all the pins to a pin object
    
    pins //all incoming pins
      .filter(pin => !this.markers[pin.id]) //if they're not in the markers object
      .forEach(newPin => this.createMarkerFromPin(newPin, this.handleClick)) //make them into markers

    // Object.keys(this.markers) //make an array of marker/pin ids in markers
    //   .filter(pinId => !pinsObj[pinId]) //if they're not in the incoming pins
    //   .forEach((pinId) => this.removeMarker(this.markers[pinId])) //take them out of the markers
  }
  
  createMarkerFromPin(pin) {
    const position = new google.maps.LatLng(pin.lat, pin.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      pinId: pin.id
    });

    this.markers[marker.benchId] = marker;
  }

}

export default MarkerManager;