import { connect } from 'react-redux';
import NewCourseForm from './new_course_form';
import { createCourse } from '../../actions/courses_actions'

const mSTP = ({ session }) => {
  return {
    formType: 'Create New Course',
    course: {
      player_id: session.id,
      course_name: 'New Course',
      distance: '0 mi',
      time: '0 mins',
      pins_object: '{"pins":[]}',
      static_map: '',
      travel_mode: 'BICYCLING',
      description: '',
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