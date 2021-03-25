import { connect } from 'react-redux';
import CourseForm from './course_form';

const mSTP = ({ session }) => {
  return {
    formType: 'Create New Course',
    course: {
      player_id: session.id,
      course_name: 'New Course',
      distance: '',
      time: '',
      pins_object: '{"pins":[]}'
    }
  };
};

const mDTP = dispatch => {
  return{
    action: 'placeholder'
  }
};

export default connect(mSTP,mDTP)(CourseForm);