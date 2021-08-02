import React from 'react';
import { Link } from 'react-router-dom';
import mapStyles from './map_styles'

class CourseShow extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = props.course;

    this.travelMode = 'BICYCLING';

    this.updateCourse = this.updateCourse.bind(this);
    this.placeMarker = this.placeMarker.bind(this);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
    
  }

  componentDidMount() {
    
    this.props.fetchCourse(this.props.courseId)
    .then( () => {
    
    this.setState(this.props.course)
    this.pins = JSON.parse(this.props.course.pins_object).pins;

    //set up mp
    const mapOptions = {
      styles: mapStyles,
      disableDefaultUI: true,
      zoomControl: true,
    }

    this.map = new google.maps.Map(document.getElementById('the-map'), mapOptions);
    
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      polylineOptions: { strokeColor: "#FC4C02" } , //make this a flexable variable
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
    // let customIcon;

    let pin = new google.maps.Marker({
      position: location, 
      map: this.map,
      // icon: customIcon,
    })

  };

  handleDeleteEvent() {
    this.props.deleteCourse(this.props.courseId) 
    .then(() => this.props.history.push("/dashboard"));
  }

  //////////////////////////////////////////////////////////////////
  
  render() {
    if (!this.state) {
      return <h1>LOADING...</h1>
    }
    //if i wanna be really slick, make these dots go up and down later
    // loading component

    const buttons = () => {
      debugger
      // delete and edit buttons for course owner or admin
      if (this.props.currentPlayerId === this.props.course.player_id 
        || this.props.currentPlayerId === 1) {
        return(
        <div className="course-show-buttons" >

          <button
            className="show-button"
            onClick={ this.handleDeleteEvent } >
              Delete
          </button>

          <Link 
          to={`/courses/${this.props.courseId}/edit`}
          className="show-button" >
            Edit
          </Link>

        </div>
        )
      }
    }

    const dateObj = new Date(this.state.created_at);
    const month = dateObj.toLocaleDateString(undefined, { month: 'long' })
    const date = dateObj.toLocaleDateString(undefined, { day: 'numeric' })
    const year = dateObj.toLocaleDateString(undefined, { year: 'numeric' })
    const time = dateObj.toLocaleTimeString("en-Us", {
      hour: "numeric",
      minute: "2-digit",
    });
    debugger
    return(
      <div className='course-show-page'>
        <div className="course-show-container" >

          <div className="course-show-head" >
            <h1>{this.state.course_name}</h1>
            {buttons()}
          </div>

          <div className="course-show-body" >

            <div className="show-map-div" >
              <div className='the-map' id='the-map'>
                MAP
              </div>
            </div>

            <div className="course-show-info">
              <div className="course-show-info-head" >
                  <Link  className="show-avatar" to={`/players/${this.state.player_id}`} >
                    <img className="show-avatar" src={this.state.avatarUrl}/>
                  </Link>

                <div className="course-creation-info" >
                  <div className="show-creator" >By {this.state.player}</div>
                  <div className="show-created" >{`Created on ${month} ${date}, ${year}`}</div>
                </div>
              </div>

              <div className="course-show-stats" >
                <label>
                  <div className="distance-display" >{this.state.distance}</div>
                  Distance
                </label>

                <label>
                  <div className="time-display" >{this.state.time}</div>
                  Est. Time
                </label>  
              </div>

              <div className="course-show-description" >
                {this.state.description}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CourseShow;