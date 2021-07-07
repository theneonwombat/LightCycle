import React from 'react';
import { Link } from 'react-router-dom';

class DashboardItem extends React.Component {
  constructor(props){
    super(props)
  
  }

  render(){

    return(
      <li className="dash-item" >

        <Link 
        to={`/courses/${this.props.course.id}`} 
        className="dash-item-name" >
          {this.props.course.course_name}
        </Link>

        <h4>{this.props.course.player}</h4>

        <h2 className="dash-item-distance" >{this.props.course.distance}</h2>
        <h2 className="dash-item-time" >{this.props.course.time}</h2>
        
        <img className="static-map" src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&path=weight:3%7Ccolor:0xfc5200FF%7Cenc:${this.props.course.static_map}&key=${window.googleAPIKey}`} alt="" />
        
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