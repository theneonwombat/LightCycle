// import * as APIUtil from '../utils/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';

export const receivePins = pins => {
  return {
    type: RECEIVE_PINS,
    pins,
}};

export const fetchPins = () => dispatch => {
    return APIUtil.fetchPins().then(pins => (
      dispatch(receivePins(pins))
    ))
};