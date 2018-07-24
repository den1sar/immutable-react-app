import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
  location: null,
});

export default (state = initialState, action) => {
  const { type, payload } = action;

  if (type === LOCATION_CHANGE) {
    return state.merge({
      location: payload,
    });
  }

  return state;
};
