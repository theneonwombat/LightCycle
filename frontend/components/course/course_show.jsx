import React from 'react';

class CourseShow extends React.Component {
  constructor(props) {

    super(props);
    
    this.state = props.course;
    // this.pins = JSON.parse(props.course.pins_object).pins;
    debugger

    this.travelMode = 'BICYCLING';

    this.updateCourse = this.updateCourse.bind(this);
    this.placeMarker = this.placeMarker.bind(this);

  }

  componentDidMount() {
    
    debugger
    this.props.fetchCourse(this.props.courseId)
    .then( () => {
    debugger
    this.setState(this.props.course)
    this.pins = JSON.parse(this.props.course.pins_object).pins;


    let centerLat = parseFloat(this.pins[0].lat);
    let centerLng = parseFloat(this.pins[0].lng);
    
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

    })
  }

  ////////////////////////////////////////////////////////////////

  updateCourse(dS, dR) {
    debugger
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

          }
        }
      )
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
    
    debugger
    if (!this.state) {
      return <h1>LOADING...</h1>
    }
    return(
      <div className='course-show-page'>

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