import React from 'react';
import DashboardItem from './dashboard_item';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiFoxHead } from 'react-icons/gi';

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
                <i className="dash-link-icon" >
                  <FaGithub />
                </i>
                <div className="dash-link-content">
                  <h2>Github</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam officiis enim iusto repudiandae quasi tenetur non praesentium quisquam modi mollitia iste natus, ad veniam nam aliquam necessitatibus accusamus reiciendis dolor illum delectus atque ab dolorum! Sunt aut deleniti quia incidunt! Eligendi cumque, veritatis dolorum molestias soluta excepturi aspernatur mollitia?
                  </p>
                  <a href="https://github.com/theneonwombat/LightCycle" 
                    rel="noreferrer" 
                    target="_blank" 
                    className="">
                    View Project GitHub
                  </a>
                </div>
              </li>

              <li className="dash-link-item" >
                <i className="dash-link-icon" >
                  <FaLinkedin />
                </i>
                <div className="dash-link-content">
                  <h2>Linkedin</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam officiis enim iusto repudiandae quasi tenetur non praesentium quisquam modi mollitia iste natus, ad veniam nam aliquam necessitatibus accusamus reiciendis dolor illum delectus atque ab dolorum! Sunt aut deleniti quia incidunt! Eligendi cumque, veritatis dolorum molestias soluta excepturi aspernatur mollitia?
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
                <i className="dash-link-icon" >
                  <GiFoxHead />
                </i>
                <div className="dash-link-content">
                  <h2>Personal Page</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum magnam officiis enim iusto repudiandae quasi tenetur non praesentium quisquam modi mollitia iste natus, ad veniam nam aliquam necessitatibus accusamus reiciendis dolor illum delectus atque ab dolorum! Sunt aut deleniti quia incidunt! Eligendi cumque, veritatis dolorum molestias soluta excepturi aspernatur mollitia?
                  </p>
                  <a href="https://theneonwombat.github.io/OutFox/" 
                    rel="noreferrer" 
                    target="_blank" 
                    className="">
                    View Alec's Personal Page
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