import { connect } from 'react-redux';
import CourseShow from './course_show';
import { 
  fetchCourse,
  deleteCourse,
 } from '../../actions/courses_actions';

const mSTP = (state, ownProps) => {
  
  return({
    course: state.entities.courses[ownProps.match.params.courseId],
    courseId: ownProps.match.params.courseId,
    currentPlayerId: state.session.id,
  })
  
}

const mDTP = (dispatch) => {

  return({
    fetchCourse: (courseId) => dispatch(fetchCourse(courseId)),
    deleteCourse: (courseId) => dispatch(deleteCourse(courseId)),
  })

}

export default connect(mSTP, mDTP)(CourseShow);