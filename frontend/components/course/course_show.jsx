import React from 'react';
import { Link } from 'react-router-dom';
import ShowMap from './show_map'
// import mapStyles from './map_styles'

class CourseShow extends React.Component {
  
  constructor(props) {
    super(props);

    this.handleDeleteEvent = this.handleDeleteEvent.bind(this); 
  }

  componentDidMount() {
    if (!this.props.course) {
      this.props.fetchCourse(this.props.courseId)
    }
  }

  handleDeleteEvent() {
    this.props.deleteCourse(this.props.courseId) 
    .then(() => this.props.history.push("/dashboard"));
  }
  
  render() {

    if (!this.props.course) {
      return <div>Loading...</div>
    }

    const buttons = () => {
      if (this.props.currentPlayerId === this.props.course.player_id) {
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

    const dateObj = new Date(this.props.course.created_at);
    const month = dateObj.toLocaleDateString(undefined, { month: 'long' })
    const date = dateObj.toLocaleDateString(undefined, { day: 'numeric' })
    const year = dateObj.toLocaleDateString(undefined, { year: 'numeric' })

    return(
      <div className='course-show-page'>
        <div className="course-show-container" >

          <div className="course-show-head" >
            <h1>{this.props.course.course_name}</h1>
            {buttons()}
          </div>

          <div className="course-show-body" >

            <div className="show-map-div" >
              <ShowMap course={this.props.course}/>
            </div>

            <div className="course-show-info">
              <div className="course-show-info-head" >
                  <Link  className="show-avatar" to={`/players/${this.props.course.player_id}`} >
                    <img className="show-avatar" src={this.props.course.avatarUrl}/>
                  </Link>

                <div className="course-creation-info" >
                  <div className="show-creator" >By {this.props.course.player}</div>
                  <div className="show-created" >{`Created on ${month} ${date}, ${year}`}</div>
                </div>
              </div>

              <div className="course-show-stats" >
                <label>
                  <div className="distance-display" >{this.props.course.distance}</div>
                  Distance
                </label>

                <label>
                  <div className="time-display" >{this.props.course.time}</div>
                  Est. Time
                </label>  
              </div>

              <div className="course-show-description" >
                {this.props.course.description}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CourseShow;