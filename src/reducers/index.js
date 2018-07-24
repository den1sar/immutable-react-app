import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import images from './images';

const rootReducer = combineReducers({
  routing: routerReducer,
  images,
});

export default rootReducer;
