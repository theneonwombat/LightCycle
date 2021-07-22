import React from 'react';
import DashboardItem from './dashboard_item';
import NewCourseContainer from '../course/new_course_container';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.renderLatest = this.renderLatest.bind(this)
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  renderLatest() {

    if (this.props.currentPlayer.lastCourse) {

      this.dateObj = new Date(this.props.currentPlayer.lastCourse.created_at);
      this.dateString = this.dateObj.toDateString();

      return(
          <div className="latest-course-info" >
            <h4 className="latest-headding" >latest course</h4>
            <Link to={`/courses/${this.props.currentPlayer.lastCourse.id}`} 
            className ="latest-link" >
              <h4 className="latest-name" >{this.props.currentPlayer.lastCourse.course_name} •</h4>
              &nbsp;
              <h4 className="latest-date" >{this.dateString}</h4>
            </Link>
          </div>
      )
    }

    return <div className="no-activity" >No Recent Activity</div>
  }

  render() {
    
    return(
      <div className="dash">

        <div className="player-card">

          <img className="player-card-avatar" 
          src={this.props.currentPlayer.avatarUrl} />

          <div className="player-card-content" >

            <Link className="player-card-name" to={`/players/${this.props.currentPlayer.id}`} >
              {this.props.currentPlayer.playername}
            </Link>

            <div className="player-card-stats" >

              <div className="stat-block" >
                <h4 className="stat-tag" >Courses</h4>
                <h4 className="stat-num" >{this.props.currentPlayer.numCourses}</h4>
              </div>

              <div className="stat-block" >
                <h4 className="stat-tag" >Total Distance</h4>
                <h4 className="stat-num" >{this.props.currentPlayer.totalDistance} mi</h4>
              </div>

            </div>

            {this.renderLatest()}

          </div>
        </div>


        <div className="dash-feed" >
          <ul>
            {this.props.courses.map((course) => {
              return <DashboardItem course={course}
              deleteCourse={this.props.deleteCourse} 
              key={course.id} />})}
          </ul>
        </div>

        <div className="link-card">

        </div>

      </div>
    )
  }
}

export default Dashboard;