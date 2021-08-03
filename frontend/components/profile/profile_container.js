import { connect } from 'react-redux';
import ProfileShow from './profile_hooks'
import {
  fetchPlayer,
} from '../../actions/player_actions'

const mSTP = (state, ownProps) => {
  return({
    isCurrentPlayer: state.session.id === ownProps.match.params.playerId,
    exact_path: ownProps.match.url,
    player: state.entities.players[ownProps.match.params.playerId],
    playerId: ownProps.match.params.playerId,
  })
}

const mDTP = (dispatch) => {
  return({
    deleteCourse: (courseId) => (dispatch(deleteCourse(courseId))),
    fetchPlayer: (playerId) => dispatch(fetchPlayer(playerId)),
  })
}

export default connect(mSTP, mDTP)(ProfileShow)