import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import Search from './search';

const mSTP = (state) => {
  return {
    pins: Object.values(state.entities.pins)
  };
};

const mDTP = dispatch => {
  return {
    fetchPins: () => dispatch(fetchPins())
  }
};

export default connect(mSTP,mDTP)(Search);