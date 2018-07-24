
import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';

import config from '../config';
// Import your global styles here
import 'normalize.css/normalize.css';
import '_styles/common.scss';

const App = ({ route }) => (
  <div>
    <Helmet {...config.app} />
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

App.propTypes = {
  route: PropTypes.object,
};

export default hot(module)(App);
