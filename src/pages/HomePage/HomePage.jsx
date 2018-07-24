import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getImage } from '_actions';
import { imageSelector } from '_selectors';

class HomePage extends PureComponent {
  static propTypes = {
    image: PropTypes.string,
    onGetImage: PropTypes.func,
  }

  render() {
    const { image, onGetImage } = this.props;

    return (
      <Fragment>
        <Helmet title="Home page" />
        <img src={image} alt="Current img" />
        <button onClick={onGetImage}>Refresh</button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  image: imageSelector(state),
});

const mapDispatchToProps = dispatch => ({
  onGetImage() {
    dispatch(getImage());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
