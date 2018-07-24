import { combineReducers } from 'redux-immutable';

import routing from './router';
import images from './images';

const rootReducer = combineReducers({
  routing,
  images,
});

export default rootReducer;
