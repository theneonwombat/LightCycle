import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchCourses, deleteCourse } from '../../actions/courses_actions'

const mSTP = (state, ownProps) => {
  return ({
    courses: Object.values(state.entities.courses)
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchCourses: () => (dispatch(fetchCourses())),
    deleteCourse: (courseId) => (dispatch(deleteCourse(courseId))),
  })
}


export default connect(mSTP, mDTP)(Dashboard)