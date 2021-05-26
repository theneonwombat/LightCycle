import { connect } from 'react-redux';
import CourseShow from './course_show';
import { 
  fetchCourse,
  deleteCourse,
 } from '../../actions/courses_actions';

const mSTP = (state, ownProps) => {
  debugger
  return({
    course: state.entities.courses[ownProps.match.params.courseId],
    courseId: ownProps.match.params.courseId,
  })
}

const mDTP = (dispatch) => {
  return({
    fetchCourse: (courseId) => dispatch(fetchCourse(courseId)),
    deleteCourse: (courseId) => (dispatch(deleteCourse(courseId)))
  })
}

export default connect(mSTP, mDTP)(CourseShow);