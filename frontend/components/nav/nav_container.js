import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav';

const mSTP = ({ session, entities: { players } }, ownProps) => {
  return {
    currentPlayer: players[session.id],
    currentPage: ownProps.location.pathname,
  };
};

const mDTP = dispatch => {
  return {logout: () => dispatch(logout())}
};

export default connect(mSTP,mDTP)(NavBar);