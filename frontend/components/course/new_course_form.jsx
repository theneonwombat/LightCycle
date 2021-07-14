import React from 'react';

class CourseForm extends React.Component {

  constructor(props) {

    super(props);
    
    this.state = props.course;
    this.pins = JSON.parse(props.course.pins_object).pins;
    // this.removedPins = []

    this.travelMode = 'BICYCLING';

    this.updateCourse = this.updateCourse.bind(this);
    this.placeMarker = this.placeMarker.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.clearMarkers = this.clearMarkers.bind(this);
    // this.undoMarker = this.undoMarker.bind(this);
    // this.redoMarker = this.redoMarker.bind(this);

  }

  componentDidMount() {
    
    let centerLat = 40.673842;
    let centerLng = -73.970083;
    let zoomLevel = 12;
    let customStroke = "#FC4C02";

    const mapOptions = {
      center: { lat: centerLat, lng: centerLng }, 
      zoom: zoomLevel,
    }
    
    this.map = new google.maps.Map(document.getElementById('the-map'), mapOptions);
    
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      polylineOptions: { strokeColor: customStroke } ,
      suppressBicyclingLayer: true,
      suppressInfoWindows: true,
      suppressMarkers: true,
    })
    this.directionsRenderer.setMap(this.map);
  
    google.maps.event.addListener(this.map, 'click', (event) => {
      this.placeMarker(event.latLng);
      this.updateCourse(this.directionsService, this.directionsRenderer);
    });

    window.googleMap = this.map;
  }

  ////////////////////////////////////////////////////////////////

  updateCourse(directionsService, directionsRenderer) {

    let waypoints = this.pins.slice(1, this.pins.length - 1 )
    .map(pin => ({
      location: pin, 
      stopover: false})) || [];
    
    let distance = "0 mi"
    let time = "0 mins"
    let static_map = ""
    
    if(this.pins.length > 1) {
      directionsService.route({
        origin: this.pins[0],
        waypoints: waypoints,
        destination: this.pins[this.pins.length - 1],
        travelMode: this.travelMode
      }, (response, status) => {
        if (status === 'OK') {

          console.log(response);

          directionsRenderer.setDirections(response);

          distance = response.routes[0].legs[0].distance.text;
          time = response.routes[0].legs[0].duration.text;
          static_map = response.routes[0].overview_polyline;

          this.setState({time, distance, static_map});
        }
      })
    }
  }

  placeMarker(location) {
    // let customIcon;

    let pin = new google.maps.Marker({
      position: location, 
      map: this.map,
      // icon: customIcon,
    })

    let pinLat = pin.getPosition().lat();
    let pinLng = pin.getPosition().lng();

    this.pins.push({ lat: pinLat, lng: pinLng })
 
  };

  ////////////////////////////

  // clearMarkers() {
  //   console.log(this.pins);

  //   this.pins = [];
  //   this.updateCourse();

  //   console.log(this.pins);
  // }

  // undoMarker() {
  //   let poppedPin = this.pins.pop();
  //   this.removedPins.push(poppedPin);
  //   this.updateCourse;
  // }

  // redoMarker() {
  //   let poppedPin = this.removedPins.pop();
  //   this.pins.push(poppedPin);
  //   this.updateCourse;
  // }

  ////////////////////////////

  handleChange(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let course;
    const pinsString = JSON.stringify({ pins: this.pins });

    this.setState({ pins_object: pinsString }, () => {
      course = Object.assign({}, this.state);
      this.props.processForm(course)
        .then(this.props.history.push("/dashboard"));
    });

  }

  //////////////////////////////////////////////////////////////////
  
  render() {

    return(

      <div>
        <form className='course-form-page' onSubmit={this.handleSubmit} >

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

        {/* <button onClick={this.clearMarkers} >CLEAR</button>
        <br />
        <button onClick={this.undoMarker} >UNDO</button>
        <br />
        <button onClick={this.redoMarker} >REDO</button> */}

      </div>
    )
  }
}

export default CourseForm;