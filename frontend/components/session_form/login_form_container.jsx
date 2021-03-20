import { connect } from 'react-redux';
import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
  };
};

const mDTP = dispatch => {
  return {
    processForm: (player) => dispatch(login(player)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(SessionForm);