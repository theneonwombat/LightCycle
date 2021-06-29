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

  render(){
    
    return(
      <div>
        <ul>
          {this.props.courses.map((course) => {
            return <DashboardItem course={course}
              deleteCourse={this.props.deleteCourse} 
              key={course.id} />})}
        </ul>
        <Link to={`/courses/new`} >NEW COURSE</Link>
      </div>
    )
  }
}

export default Dashboard;