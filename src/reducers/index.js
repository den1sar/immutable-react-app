import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import localization from './localization';

const rootReducer = combineReducers({
  routing: routerReducer,
  localization,
});

export default rootReducer;
