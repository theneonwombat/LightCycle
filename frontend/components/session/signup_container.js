import { connect } from 'react-redux';
import {createNewPlayer} from '../../actions/session';
import Signup from './signup';

const mDTP = dispatch => ({
  createNewPlayer: formPlayer => dispatch(createNewPlayer(formPlayer)),
});

export default connect(null, mDTP)(Signup);