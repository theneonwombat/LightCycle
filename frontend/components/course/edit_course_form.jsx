import React from 'react';

class CourseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = props.course;
    this.pins = JSON.parse(props.course.pins_object).pins;

    this.updateCourse = this.updateCourse.bind(this);
    this.placeMarker = this.placeMarker.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
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
  
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.placeMarker(event.latLng);
      this.updateCourse(directionsService, directionsRenderer);
    });

    window.googleMap = this.map;
    this.updateCourse(directionsService, directionsRenderer);
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
        travelMode: this.state.travelMode
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

    let pinLat = pin.getPosition().lat();
    let pinLng = pin.getPosition().lng();

    this.pins.push({ lat: pinLat, lng: pinLng })
    // this.pins.push(location)
  };

  handleChange(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  handlesubmit(e) {
    e.preventDefault();
    
    let course;
    const pinsString = JSON.stringify({ pins: this.pins });

    //create a static map, set it to the state below

    this.setState({ pins_object: pinsString }, () => {
      course = Object.assign({}, this.state);
      this.props.processForm(course)
        .then(this.props.history.push("/dashboard"));
    });

  }

  //////////////////////////////////////////////////////////////////
  
  render() {
    
    return(
      <form className='course-form-page' onSubmit={this.handlesubmit} >

        <div className="map-headder" >
          <input type="text" 
          className="course-name" 
          value={this.state.course_name} 
          onChange={this.handleChange("course_name")} />
        </div>

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
        
        <button id="submit-button" >SAVE COURSE</button>

      </form>
    )
  }
}

export default CourseForm;