import React from 'react';
import mapStyles from './map_styles'
import { IoBicycleSharp } from 'react-icons/io5';
import { BiRun } from "react-icons/bi";

class CourseForm extends React.Component {

  constructor(props) {

    super(props);
    
    this.state = props.course;
    this.pins = JSON.parse(props.course.pins_object).pins;
    // this.removedPins = []

    this.updateCourse = this.updateCourse.bind(this);
    this.placeMarker = this.placeMarker.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateTravelMode = this.updateTravelMode.bind(this);
    this.modeIcon = this.modeIcon.bind(this);
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
      styles: mapStyles,
      disableDefaultUI: true,
      zoomControl: true,
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
        travelMode: this.state.travel_mode
      }, (response, status) => {
        if (status === 'OK') {

          // console.log(response);

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


  updateTravelMode(event) {
    const input = event.target.value;
    this.setState({travel_mode: input}, () => {
      this.updateCourse(this.directionsService, this.directionsRenderer)
    })
  }

  modeIcon() {
    if (this.state.travel_mode === 'BICYCLING') {
      return <label className="read-out-label" >Ride
        <IoBicycleSharp className="mode-icon" />
      </label>
    }

    return <label className="read-out-label" >Run
      <BiRun className="mode-icon" />
    </label>
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let course;
    const pinsString = JSON.stringify({ pins: this.pins });

    this.setState({ pins_object: pinsString }, () => {
      course = Object.assign({}, this.state);
      this.props.processForm(course)
        .then(() => this.props.history.push("/dashboard"));
    });

  }

  //////////////////////////////////////////////////////////////////
  
  render() {

    return(

      <div>
        <form className='course-form-page' onSubmit={this.handleSubmit} >

          <div className="top-part" >

            <div className="course-edit-panel" >
              <label>Course name
                <input type="text" 
                className="course-name" 
                value={this.state.course_name} 
                onChange={this.handleChange("course_name")} />
              </label>

              <label>Description
                <textarea 
                onChange={this.handleChange("description")}
                value={this.state.description} 
                cols="32" rows="10"
                maxLength="280">
                </textarea>
              </label>
              
              <div className="select-container" >
                <select onChange={this.updateTravelMode} name="travelMode" id="travel-mode">
                  <option value="BICYCLING">Bike</option>
                  <option value="WALKING">Run</option>
                </select>
              </div>

              <button id="submit-button" >Save Course</button>
            </div>

            <div className="map-div" >
              <div className='the-map' id='the-map'>
                MAP
              </div>
            </div>

          </div>

          <div className="course-info">

            <div className="read-out" >

              <div className="read-out-method" >{this.modeIcon()}</div>

              <label className="read-out-label" > Distance
                <div className="read-out-num" >{this.state.distance}</div>
              </label>

              <label className="read-out-label" > Est. Time
                <div className="read-out-num" >{this.state.time}</div>
              </label>
              
            </div>
            
          </div>

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