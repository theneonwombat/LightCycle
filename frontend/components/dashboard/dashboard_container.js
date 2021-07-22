import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchCourses, deleteCourse } from '../../actions/courses_actions'
import { fetchPlayers } from '../../actions/player_actions'

const mSTP = (state, ownProps) => {
  return ({
    courses: Object.values(state.entities.courses),
    currentPlayer: state.entities.players[state.session.id],
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchCourses: () => (dispatch(fetchCourses())),
    fetchPlayers: () => (dispatch(fetchPlayers())),
    deleteCourse: (courseId) => (dispatch(deleteCourse(courseId))),
  })
}


export default connect(mSTP, mDTP)(Dashboard)