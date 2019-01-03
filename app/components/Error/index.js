import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './index.less'
class Error extends Component {
  render() {
    return (
      <div className="error-wrapper">
        <h2>
          {this.props.text}
        </h2>
      </div>
    )
  }
}

Error.defaultProps = {
  text: 'Error'
}

Error.propTypes = {
  text: PropTypes.string,
}

export default Error