import { connect } from 'react-redux';
import CourseForm from './course_form';
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
    processForm: (course) => dispatch(createCourse(course))
  }
};

export default connect(mSTP,mDTP)(CourseForm);