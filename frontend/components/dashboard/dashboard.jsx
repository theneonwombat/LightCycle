import React from 'react';
import DashboardItem from './dashboard_item';
import NewCourseContainer from '../course/new_course_container';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  render() {

    debugger
    
    return(
      <div className="dash">

        <div className="player-card">
          <div className="player-card-content" >

            <img className="player-card-avatar" 
            src={this.props.currentPlayer.avatarUrl} />

            <Link to={`/players/${this.props.currentPlayer.id}`} >
              {this.props.currentPlayer.playername}
            </Link>

            <h4>courses</h4>
            <h4>{this.props.currentPlayer.numCourses}</h4>
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