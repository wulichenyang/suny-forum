import React, { Component } from 'react'
import {
  Spin,
} from 'antd'

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

export default Loading