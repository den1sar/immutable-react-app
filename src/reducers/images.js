import { fromJS } from 'immutable';
import { ADD_IMAGE } from '_constants';

const intialState = fromJS({
  imageUrl: '',
});

const images = (state = intialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_IMAGE:
      return state.set('imageUrl', payload);

    default:
      return state;
  }
};

export default images;
