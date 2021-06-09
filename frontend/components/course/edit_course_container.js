import { connect } from 'react-redux';
import CourseForm from './new_course_form';
import { updateCourse } from '../../actions/courses_actions'

const mSTP = (state, ownProps) => {
  debugger
  return {
    formType: 'Edit Course',
    course: state.entities.courses[ownProps.match.params.courseId]
  };
};

const mDTP = dispatch => {
  return{
    fetchCourse: (courseId) => dispatch(fetchCourse(courseId)),
    processForm: (course) => dispatch(updateCourse(course))
  }
};

export default connect(mSTP,mDTP)(CourseForm);