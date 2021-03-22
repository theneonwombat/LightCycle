import { RECEIVE_PINS } from "../actions/pin_actions";

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PINS:
      return action.pins;
    default:
      return state;
  }
};

export default pinsReducer;