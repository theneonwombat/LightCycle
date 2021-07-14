import React from 'react';
import { Link } from 'react-router-dom';

class DashboardItem extends React.Component {
  constructor(props){
    super(props)
  
  }

  render(){

    return(
      <li className="dash-item" >

        <div className="dash-item-head" >
          <div className="dash-item-avatar" ></div>
          <div className="dash-item-head-text" >
            <Link 
            className="dash-item-player"
            to={`/players/${this.props.course.player_id}`} >
              {this.props.course.player}
            </Link>
            <div className="dash-item-created" >created_at</div>
          </div>
        </div>

        <div className="dash-item-body" >
          <Link 
          to={`/courses/${this.props.course.id}`} 
          className="dash-item-name" >
            {this.props.course.course_name}
          </Link>
          <div className="dash-item-stats" >
            <div className="dash-item-distance">
              <h4>distance</h4>
              <h2  >{this.props.course.distance}</h2>
            </div>

            <h2 className="dash-item-time" >{this.props.course.time}</h2>
          </div>
        </div>
        
        <img className="static-map" src={`https://maps.googleapis.com/maps/api/staticmap?size=800x500&path=weight:3%7Ccolor:0xfc5200FF%7Cenc:${this.props.course.static_map}&key=${window.googleAPIKey}`} alt="" />
        
        {/* <button 
        onClick={()=>this.props.deleteCourse(this.props.course.id)} 
        className="dash-item-delete-button" >
          Delete
        </button> */}
      
      </li>
    )
  }
}

export default DashboardItem;