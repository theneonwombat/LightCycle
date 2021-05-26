import React from 'react';

class CourseShow extends React.Component {
  constructor(props) {

    super(props);
    
    this.state = props.course;
    this.pins = JSON.parse(props.course.pins_object).pins;

    this.travelMode = 'BICYCLING';

    this.updateCourse = this.updateCourse.bind(this);
    this.placeMarker = this.placeMarker.bind(this);

  }

  componentDidMount() {
    
    let centerLat;
    let centerLng;
    
    if (this.pins[0] === undefined){
      centerLat = 40.673842;
      centerLng = -73.970083;
    } else {
      centerLat = parseFloat(this.pins[0].lat);
      centerLng = parseFloat(this.pins[0].lng);
    };

    const mapOptions = {
      center: { lat: centerLat, lng: centerLng }, 
      zoom: 12,
    }
    
    this.map = new google.maps.Map(document.getElementById('the-map'), mapOptions);
    
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      polylineOptions: { strokeColor: "#FC4C02" } ,
      suppressBicyclingLayer: true,
      suppressInfoWindows: true,
      suppressMarkers: true,
    })
    directionsRenderer.setMap(this.map);

    this.pins.forEach( pin => 
      this.placeMarker(pin));
    
    this.updateCourse(directionsService, directionsRenderer);
    window.googleMap = this.map;
  }

  ////////////////////////////////////////////////////////////////

  updateCourse(dS, dR) {
    let waypoints = this.pins.slice(1, this.pins.length - 1 )
    .map(pin => ({
      location: pin, 
      stopover: false})) || [];

    if(this.pins.length > 1) {
      dS.route({
        origin: this.pins[0],
        waypoints: waypoints,
        destination: this.pins[this.pins.length - 1],
        travelMode: this.travelMode
      }, (response, status) => {
        if (status === 'OK') {

          dR.setDirections(response);

          let distance = response.routes[0].legs[0].distance.text;
          this.setState({distance: distance});

          let time = response.routes[0].legs[0].duration.text;
          this.setState({time: time});
        }
      })
    }
  }

  placeMarker(location) {
    let customIcon;

    let pin = new google.maps.Marker({
      position: location, 
      map: this.map,
      // icon: customIcon,
    })

  };


  //////////////////////////////////////////////////////////////////
  
  render() {
    
    return(
      <div className='course-form-page' onSubmit={this.handlesubmit} >

        <h1>{this.state.course_name}</h1>

        <div className="map-div" >
          <div className='the-map' id='the-map'>
            MAP
          </div>
        </div>

        <div className="course-info">

          <div className="read-out" >

            <label> DISTANCE:
              <div className="distance-display" >{this.state.distance}</div>
            </label>

            <label> ESTIMATED TIME:
              <div className="time-display" >{this.state.time}</div>
            </label>
            
          </div>
          
        </div>
        

      </div>
    )
  }
}

export default CourseShow;