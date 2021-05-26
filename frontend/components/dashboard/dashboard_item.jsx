import React from 'react';
import { Link } from 'react-router-dom';

class DashboardItem extends React.Component {
  constructor(props){
    super(props)
  
  }

  render(){
    return(
      <li>

        <Link 
        to={`/courses/${this.props.course.id}`} 
        className="dash-item-name" >
          {this.props.course.course_name}
        </Link>

        <h2 className="dash-item-distance" >{this.props.course.distance}</h2>
        <h2 className="dash-item-time" >{this.props.course.time}</h2>
        
        <button 
        onClick={()=>this.props.deleteCourse(this.props.course.id)} 
        className="dash-item-delete-button" >
          Delete
        </button>
      
      </li>
    )
  }
}

export default DashboardItem;