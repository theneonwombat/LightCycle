import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchCourses, deleteCourse } from '../../actions/courses_actions'
import { fetchPlayer } from '../../actions/player_actions'

const mSTP = (state, ownProps) => {
  return ({
    courses: Object.values(state.entities.courses).reverse(),
    currentPlayer: state.entities.players[state.session.id],
    currentPlayerId: state.session.id
  })
}

const mDTP = (dispatch) => {
  return ({
    fetchCourses: () => (dispatch(fetchCourses())),
    fetchPlayer: (playerId) => (dispatch(fetchPlayer(playerId))),
    deleteCourse: (courseId) => (dispatch(deleteCourse(courseId))),
  })
}

export default connect(mSTP, mDTP)(Dashboard)