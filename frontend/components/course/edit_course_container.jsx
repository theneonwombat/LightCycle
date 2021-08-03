import React from 'react';
import { connect } from 'react-redux';
import CourseForm from './new_course_form';
import { fetchCourse, updateCourse } from '../../actions/courses_actions'

class EditCourseForm extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.course) {
      this.props.fetchCourse(this.props.match.params.courseId)
    }
  }

  render() {
    const { course, formType, processForm, history } = this.props;
    if (!course) return <div>Loading...</div>;

    return(
      <CourseForm
      course = {course}
      formType = {formType}
      processForm = {processForm}
      history = {history}
      />
    )
  }
}

const mSTP = (state, ownProps) => {
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

export default connect(mSTP,mDTP)(EditCourseForm);