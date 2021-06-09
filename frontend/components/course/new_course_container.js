import { connect } from 'react-redux';
import NewCourseForm from './new_course_form';
import { createCourse } from '../../actions/courses_actions'

const mSTP = ({ session }) => {
  return {
    formType: 'Create New Course',
    course: {
      player_id: session.id,
      course_name: 'New Course',
      distance: '',
      time: '',
      // static_map: '',
      pins_object: '{"pins":[]}'
    }
  };
};

const mDTP = dispatch => {
  return{
    fetchCourse: (courseId) => dispatch(fetchCourse(courseId)),
    processForm: (course) => dispatch(createCourse(course))
  }
};

export default connect(mSTP,mDTP)(NewCourseForm);