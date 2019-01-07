import React, { Component } from 'react'

import './index.less'
class BoxWrapper extends Component {
  render() {
    return (
      < article className='box-wrapper' >
        <div className="box-inner">
          {this.props.children}
        </div>
      </article >
    )
  }
}

export default BoxWrapper
