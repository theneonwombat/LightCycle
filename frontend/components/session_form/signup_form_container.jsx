import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Sign Up',
  };
};

const mDTP = dispatch => {
  return {
    processForm: (player) => dispatch(signup(player)),
  };
};

export default connect(mSTP, mDTP)(SessionForm);