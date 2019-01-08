import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  Icon
} from 'antd'

import './index.less'
class Like extends Component {
  render() {
    const {
      favoriteAction
    } = this.props
    return (
      <div className="like-wrapper">
        <div
          className="like-inner"
          onClick={favoriteAction}
        >
          <Icon type="heart"></Icon>
          <span>喜欢</span>
        </div>
      </div>
    )
  }
}

Like.defaultProps = {
  favoriteAction: () => {
    console.log('喜欢')
  }
}

Like.propTypes = {
  favoriteAction: PropTypes.func,
}

export default Like