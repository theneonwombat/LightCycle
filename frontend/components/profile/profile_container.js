import { connect } from 'react-redux';
import ProfileShow from './profile_hooks'
import { fetchPlayer } from '../../actions/player_actions'
import { fetchCourses, deleteCourse } from '../../actions/courses_actions'

const mSTP = (state, ownProps) => {
  return({
    isCurrentPlayer: state.session.id === parseInt(ownProps.match.params.playerId),
    exact_path: ownProps.match.url,
    player: state.entities.players[ownProps.match.params.playerId],
    playerId: ownProps.match.params.playerId,
    playerCourses: Object.values(state.entities.courses).filter(course => course.player_id === parseInt(ownProps.match.params.playerId))
  })
}

const mDTP = (dispatch) => {
  return({
    deleteCourse: (courseId) => (dispatch(deleteCourse(courseId))),
    fetchPlayer: (playerId) => dispatch(fetchPlayer(playerId)),
    fetchCourses:  () => (dispatch(fetchCourses())),
  })
}

export default connect(mSTP, mDTP)(ProfileShow)