import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HomePage extends PureComponent {
  static propTypes = {
    className: PropTypes.string.isRequired,
  }

  render() {
    return (
      <Fragment>
        <Helmet title="Chat" />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
});


export default connect(mapStateToProps)(HomePage);
