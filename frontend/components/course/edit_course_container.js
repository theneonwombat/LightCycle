import { connect } from 'react-redux';
import CourseForm from './course_form';
import { createCourse } from '../../actions/courses_actions'

const mSTP = (state, ownProps) => {
  debugger
  return {
    formType: 'Edit Course',
    course: state.posts[ownProps.match.params.courseId]
  };
};

const mDTP = dispatch => {
  return{
    processForm: (course) => dispatch(createCourse(course))
  }
};

export default connect(mSTP,mDTP)(CourseForm);