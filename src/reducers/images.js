import { fromJS } from 'immutable';
import { ADD_IMAGE } from '_constants';

const initialState = fromJS({
  imageUrl: '',
});

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_IMAGE:
      return state.set('imageUrl', payload);

    default:
      return state;
  }
};
