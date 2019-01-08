import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  Icon
} from 'antd'

import './index.less'
class Delete extends Component {
  render() {
    const {
      deleteAction
    } = this.props
    return (
      <div className="delete-wrapper">
        <div
          className="delete-inner"
          onClick={deleteAction}
        >
          <Icon type="delete"></Icon>
          <span>删除</span>
        </div>
      </div>
    )
  }
}

Delete.defaultProps = {
  deleteAction: () => {
    console.log('删除')
  }
}

Delete.propTypes = {
  deleteAction: PropTypes.func,
}

export default Delete