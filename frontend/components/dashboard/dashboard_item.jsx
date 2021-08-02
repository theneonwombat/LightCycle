import React from 'react';
import { Link } from 'react-router-dom';
import { IoBicycleSharp } from 'react-icons/io5';
import { BiRun } from "react-icons/bi";

class DashboardItem extends React.Component {
  constructor(props){
    super(props)
  
    this.modeIcon = this.modeIcon.bind(this);
  }

  modeIcon() {
    if (this.props.course.travel_mode === 'BICYCLING') {
      return(
        <IoBicycleSharp className="mode-icon" />
      )
    }

    return(
      <BiRun className="mode-icon" />
    )
  }

  render(){
    //Date and time parse
    const dateObj = new Date(this.props.course.created_at);
    const month = dateObj.toLocaleDateString(undefined, { month: 'long' })
    const date = dateObj.toLocaleDateString(undefined, { day: 'numeric' })
    const year = dateObj.toLocaleDateString(undefined, { year: 'numeric' })
    const time = dateObj.toLocaleTimeString("en-Us", {
      hour: "numeric",
      minute: "2-digit",
    });

    return(
      <li className="dash-item" >

        <div className="dash-item-head" >
          <img 
          className="dash-item-avatar"
          src={this.props.course.avatarUrl} />

          <div className="dash-item-head-text" >
            <Link 
            className="dash-item-player"
            to={`/players/${this.props.course.player_id}`} >
              {this.props.course.player}
            </Link>
            <div className="dash-item-created" >{`${month} ${date}, ${year} at ${time}`}</div>
          </div>
        </div>

        <div className="flexrow" >
          <div className="icon-container" >
            {this.modeIcon()}
          </div>
          <div className="dash-item-body" >

            <Link 
            to={`/courses/${this.props.course.id}`} 
            className="dash-item-name" >
              {this.props.course.course_name}
            </Link>
            <div className="dash-item-stats" >

              <div className="dash-item-distance stat-block">
                <h4 className="stat-tag" >Distance</h4>
                <h2 className="stat-num" >{this.props.course.distance}</h2>
              </div>

              <div className="stat-block">
                <h4 className="stat-tag" >Time</h4>
                <h2 className="stat-num" >{this.props.course.time}</h2>
              </div>
              
            </div>
          </div>
        </div>
        
        <img className="static-map" src={`https://maps.googleapis.com/maps/api/staticmap?size=800x300&path=weight:3%7Ccolor:0xfc5200FF%7Cenc:${this.props.course.static_map}&key=${window.googleAPIKey}&map_id=2ce121783e577f4a`} alt="" />
        
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