import React from 'react';
import DashboardItem from './dashboard_item';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { GiFoxHead } from 'react-icons/gi';
import { AiOutlineLinkedin } from 'react-icons/ai'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.renderLatest = this.renderLatest.bind(this)
  }

  componentDidMount() {
    this.props.fetchPlayer(this.props.currentPlayerId);
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
    
    if (!this.props.currentPlayer) {
      return <div>Loading...</div>
    }

    return(
      <div className="kitchen-sink" >

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
            <ul className="dash-link-list" >

              <li className="dash-link-item" >
                <div className="dash-link-left" >
                  <i className="dash-link-icon" >
                    <div className="icon-container" >
                      <FaGithub />
                    </div>
                  </i>
                </div>
                <div className="dash-link-content">
                  <h2>Github</h2>
                  <p>
                    This project was built with a React frontend and Ruby on Rails
                    backend, and utilizes the Google Maps API. If you'd like to 
                    view the code for yourself feel free to visit the Github repository.
                  </p>
                  <a href="https://github.com/theneonwombat/LightCycle" 
                    rel="noreferrer" 
                    target="_blank" 
                    className="">
                    View Project on GitHub
                  </a>
                </div>
              </li>

              <li className="dash-link-item" >
                <div className="dash-link-left" >
                  <i className="dash-link-icon" >
                    <div className="icon-container" >
                      <AiOutlineLinkedin />
                    </div>
                  </i>
                </div>
                <div className="dash-link-content">
                  <h2>Linkedin</h2>
                  <p>
                    This project was created by Alec Caro, personable Software 
                    Engineer with a degree in Mechanical Engineering, experience 
                    in leadership, who is an obsessive problem solver. 
                  </p>
                  <a href="https://www.linkedin.com/in/alec-caro-5a713a5b/" 
                    rel="noreferrer" 
                    target="_blank" 
                    className="">
                    View Alec's Linkedin
                  </a>
                </div>
              </li>

              <li className="dash-link-item" >
                <div className="dash-link-left" >
                  <i className="dash-link-icon" >
                    <div className="icon-container" >
                      <GiFoxHead />
                    </div>
                  </i>
                </div>
                <div className="dash-link-content">
                  <h2>OutFoxed</h2>
                  <p>
                    OutFoxed is a Javascript game 
                    featuring adorable pixel animals eating other adorable pixel animals. 
                    This one is a work in progress, so be sure to check back now 
                    and then to see how the game will grow!
                  </p>
                  <a href="https://theneonwombat.github.io/OutFox/" 
                    rel="noreferrer" 
                    target="_blank" 
                    className="">
                    Play Around in OutFoxed
                  </a>
                </div>
              </li>

            </ul>
          </div>

        </div>
              
      </div>
    )
  }
}

export default Dashboard;