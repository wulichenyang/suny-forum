import React, { Component } from 'react'
import {
  Spin,
} from 'antd'
import PropTypes from 'prop-types'

import './index.less'
class Loading extends Component {
  
  render() {
    return (
      this.props.loading &&
      <div className="loading-wrapper">
        <Spin
          spinning={this.props.loading}
          delay={500}
        >
        </Spin>
      </div>
    )
  }
}

Loading.defaultProps = {
  loading: false
}

Loading.propTypes = {
  loading: PropTypes.bool,
}

export default Loading