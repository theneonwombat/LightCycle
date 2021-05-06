import React from 'react';
import { Link } from 'react-router-dom';

class DashboardItem extends React.Component {
  constructor(props){
    super(props)
    debugger
  }

  render(){
    debugger
    return(
      <li>
        <Link to={`/courses/${this.props.course.id}`} >{this.props.course.title}</Link>
        {/* <Link to={`/courses/${this.props.course.id}/edit`}>Edit</Link> */}
        <button onClick={()=>this.props.deleteCourse(this.props.course.id)} >Delete</button>
      </li>
    )
  }
}

export default DashboardItem;