import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.less'
class Tag extends Component {
  render() {
    return (
      <span className="tag-item">
        {this.props.text}
      </span>
    )
  }
}

Tag.defaultProps = {
  text: '标签'
}

Tag.propTypes = {
  text: PropTypes.string,
}

export default Tag